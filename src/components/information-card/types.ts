export type TLocationType = 'Point' | 'Circle' | 'Rectangle';
export type TRegionType = 'village' | 'district' | 'subDistrict' | 'state' | 'country';

export type TRegionLocation = {
  type: TLocationType;
  coordinates: [number, number];
};

export type TRegion = {
  highs: number;
  regionId: string;
  regionLocation: TRegionLocation;
  regionType: TRegionType;
};

export type TRegions = Array<TRegion>;

export type TRegionHotspot = {
  count: number;
  cropId: string;
  regions: TRegions;
  type: string;
  typeId: string;
};

export type TRegionHotspots = Array<TRegionHotspot>;

export type TDiseaseData = {
  typeId: string;
  typeIdDisplayName: string;
  regions: TRegions;
  type: string;
  count: number;
};

export type TCropDetails = {
  count: number;
  cropId: string;
  diseases: Array<TDiseaseData>;
};
