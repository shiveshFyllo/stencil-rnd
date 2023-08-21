import { Component, Method, Prop, State, h } from "@stencil/core";
import { removeUnderScores } from "@utils/utils";
import type { TRegionHotspots, TCropDetails } from "./types";

@Component({
  tag: 'information-card',
  styleUrls: ['../../global/global.css', 'information-card.css'],
})
export class InformationCard {

  // stores api response
  @Prop() accessToken: string;
  @State() regionHotspots: TRegionHotspots;
  @State() isLoading: boolean;
  @State() hotspotData: TCropDetails[];

  /**
   * @function calls function to fetch hotspots
   * called before render
   */
  async connectedCallback() {
    try {
      this.isLoading = true;
      const hotspots = await this.fetchHotspots();
      this.regionHotspots = hotspots;
      this.groupObjectsByCropId(hotspots)
        .then(res => {
          this.hotspotData = res;
        });
    } catch (error) {
      console.error('error', error);
    } finally {
      this.isLoading = false;
    }
  }

  /**
   * @function to fetch hotspots
   */
  async fetchHotspots() {
    return fetch('https://core.fyllo.in/regions/hotspots', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${this.accessToken}`
      }
    })
      .then(res => res.json());
  }

  /**
   * @function to convert api response (TRegionHotspots) to our desired type (Array<TCropDetails>)
   *  - iterates over the response array 
   *  - group them by cropId
   */
  @Method()
  async groupObjectsByCropId(inputArray: TRegionHotspots): Promise<Array<TCropDetails>> {
    const groupedObjects: Record<string, TCropDetails> = {};
    const array = inputArray;
    array.forEach((obj) => {
      const { cropId, typeId, regions, type } = obj;
      const typeIdDisplayName = removeUnderScores(typeId, 'capitalize') as string;

      if (!groupedObjects[cropId]) {
        groupedObjects[cropId] = {
          cropId: cropId,
          count: 0,
          diseases: [],
        };
      }

      groupedObjects[cropId].count += obj.count;

      groupedObjects[cropId].diseases.push({
        typeId,
        typeIdDisplayName,
        regions,
        type,
        count: regions.length,
      });
    });

    // Sort groupedObjects based on cropId
    const sortedGroupedObjects = Object.values(groupedObjects).sort((a, b) => a.cropId.toLowerCase().localeCompare(b.cropId.toLowerCase()));

    // Sort diseases array within each group based on typeId
    sortedGroupedObjects.forEach((group) => {
      group.diseases.sort((a, b) => a.typeIdDisplayName.toLowerCase().localeCompare(b.typeIdDisplayName.toLowerCase()));
    });

    return Object.values(sortedGroupedObjects);
  }

  render() {

    /**
     * API is pending
     */
    if (this.isLoading) {
      return <div id="loading-text">Loading...</div>
    }

    /**
     * no Data found
     */
    if (this.regionHotspots.length === 0) {
      return <div id="no-result"> No Results </div>
    }

    /**
     * get the converted data
     */


    return (
      <div>
        <div>
          <h3>{'Hotspot Regions'}</h3>
        </div>

        <div class={'hotspot-info-container'}>
          {
            this.hotspotData.map((data) => {
              const { count, cropId, diseases } = data;
              return (
                <div class={'crop-container'} key={`${cropId}-${count}`}>
                  {/* crop name and count */}
                  <div>
                    <p class={'text'}>{cropId} : <span>{count}</span></p>
                  </div>

                  {/* diseases with count */}
                  <div>
                    {
                      diseases.map((disease) => {
                        const { typeIdDisplayName, count } = disease;
                        return (
                          <div class={'disease-container'} key={`${cropId} - ${typeIdDisplayName}`}>
                            <p>{typeIdDisplayName} : {count}</p>
                          </div>
                        )
                      })
                    }
                  </div>

                </div>
              )
            })
          }
        </div>
      </div>
    )
  }

}