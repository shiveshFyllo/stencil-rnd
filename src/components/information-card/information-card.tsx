import { Component, State, h } from "@stencil/core";
import { removeUnderScores } from "@utils/utils";

type TLocationType = 'Point' | 'Circle' | 'Rectangle';
type TRegionType = 'village' | 'district' | 'subDistrict' | 'state' | 'country';

type TRegionLocation = {
  type: TLocationType;
  coordinates: [number, number];
}

type TRegion = {
  highs: number;
  regionId: string;
  regionLocation: TRegionLocation;
  regionType: TRegionType;
}

type TRegions = Array<TRegion>;

type TRegionHotspot = {
  count: number;
  cropId: string;
  regions: TRegions;
  type: string;
  typeId: string;
}

type TRegionHotspots = Array<TRegionHotspot>;

type TDiseaseData = {
  typeId: string;
  typeIdDisplayName: string;
  regions: TRegions,
  type: string;
  count: number;
}

type TCropDetails = {
  count: number;
  cropId: string;
  diseases: Array<TDiseaseData>
}

@Component({
  tag: 'information-card',
  styleUrls: ['../../global/global.css', 'information-card.css'],
})
export class InformationCard {

  // stores api response
  @State() regionHotspots: TRegionHotspots;

  /**
   * @function calls function to fetch hotspots
   * called before render
   * 
   */
  async connectedCallback() {
    try {
      const hotspots = await this.fetchHotspots();
      this.regionHotspots = hotspots;
    } catch (error) {
      console.log('error', error);
    }

  }

  /**
   * @function to fetch hotspots
   */
  async fetchHotspots() {
    return fetch('https://core.fyllo.in/regions/hotspots', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer GAlwq2xYFQ3jBH37VDE7whu4XXDHiDd8fillMrRkG0KAZNnQE3gA8FDaFG8T0xIx'
      }
    })
      .then(res => res.json());
  }

  /**
   * @function to convert api response (TRegionHotspots) to our desired type (Array<TCropDetails>)
   *  - iterates over the response array 
   *  - group them by cropId
   */
  groupObjectsByCropId(inputArray: TRegionHotspots): Array<TCropDetails> {
    const groupedObjects: Record<string, TCropDetails> = {};

    inputArray.forEach((obj) => {
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
    if (!this.regionHotspots) {
      return <div>Loading...</div>
    }

    /**
     * no Data found
     */
    if (this.regionHotspots.length === 0) {
      return <div> No Results </div>
    }

    /**
     * get the converted data
     */
    const hotspotData = this.groupObjectsByCropId(this.regionHotspots);

    return (
      <div>
        <div>
          <h3>{'Hotspot Regions'}</h3>
        </div>

        <div class={'hotspot-info-container'}>
          {
            hotspotData.map((data) => {
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