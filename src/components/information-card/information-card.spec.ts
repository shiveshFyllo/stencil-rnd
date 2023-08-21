import { newSpecPage } from '@stencil/core/testing';
import { InformationCard } from './information-card';
import { TRegionHotspots } from './types';

const inputArray: TRegionHotspots = [
  {
    count: 5,
    regions: [
      {
        regionId: 'Dubal_Kaithal_Kaithal_Haryana',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [76.4, 29.78],
        },
      },
      {
        regionId: '1 Y_Ganganagar_Ganganagar_Rajasthan',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [73.896483, 29.960941],
        },
      },
      {
        regionId: 'Marachandiram_Krishnagiri_Krishnagiri_Tamil Nadu',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [78.140587, 12.644009],
        },
      },
      {
        regionId: 'Dabwali_Sirsa_Haryana',
        regionType: 'subDistrict',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.64535, 30.023036],
        },
      },
      {
        regionId: 'Sirsa_Haryana',
        regionType: 'district',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.0267312, 29.5374003],
        },
      },
    ],
    cropId: 'tomato',
    type: 'disease',
    typeId: 'powdery_mildew',
  },
  {
    count: 1,
    regions: [
      {
        regionId: 'Jamuniya_Ratlam_Ratlam_Madhya Pradesh',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [75.1514, 23.1961],
        },
      },
    ],
    cropId: 'cucumber',
    type: 'pest',
    typeId: 'striped_cucumber_beetle',
  },
  {
    count: 1,
    regions: [
      {
        regionId: 'Jamuniya_Ratlam_Ratlam_Madhya Pradesh',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [75.1514, 23.1961],
        },
      },
    ],
    cropId: 'cucumber',
    type: 'pest',
    typeId: 'white_fly',
  },
  {
    count: 1,
    regions: [
      {
        regionId: 'Sirsa_Haryana',
        regionType: 'district',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.0267312, 29.5374003],
        },
      },
    ],
    cropId: 'muskmelon',
    type: 'disease',
    typeId: 'powdery_mildew',
  },
  {
    count: 2,
    regions: [
      {
        regionId: 'Sopore_Sopore_Baramula_Jammu and Kashmir',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.4945, 34.22812],
        },
      },
      {
        regionId: 'Dharoli_Rajgarh_Sirmaur_Himachal Pradesh',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [77.266712, 30.931901],
        },
      },
    ],
    cropId: 'apple',
    type: 'pest',
    typeId: 'wooly_aphids',
  },
  {
    count: 13,
    regions: [
      {
        regionId: 'Mavadi_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.930388, 20.312127],
        },
      },
      {
        regionId: 'Ladud_Baglan_Nashik_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.186746, 20.7732155],
        },
      },
      {
        regionId: 'Deopur_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.079995, 20.125607],
        },
      },
      {
        regionId: 'Santoshwadi_Miraj_Sangli_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.870388, 16.837687],
        },
      },
      {
        regionId: 'Shivare_Chandvad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.2472779, 20.3271277],
        },
      },
      {
        regionId: 'Lengre_Khanapur_Sangli_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.631809, 17.329731],
        },
      },
      {
        regionId: 'Pandhurli_Sinnar_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.8601, 19.829837],
        },
      },
      {
        regionId: 'Dudhkhede_Chandvad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.692277, 21.423423],
        },
      },
      {
        regionId: 'Nagthane_Palus_Sangli_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.406975, 17.02055],
        },
      },
      {
        regionId: 'Kurnoli_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.916693, 20.152362],
        },
      },
      {
        regionId: 'Shirwade Wani_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.05228, 20.21573],
        },
      },
      {
        regionId: 'Narayan Tembhi_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.019586, 20.142225],
        },
      },
      {
        regionId: 'Sawatamalinagar_Sinnar_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.866716, 19.818527],
        },
      },
    ],
    cropId: 'brinjal',
    type: 'pest',
    typeId: 'fruit_borer',
  },
  {
    count: 3,
    regions: [
      {
        regionId: 'Chichiri Pora_Anantnag_Anantnag_Jammu and Kashmir',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [75.13081, 33.70555],
        },
      },
      {
        regionId: 'Rakh Chindran_Pulwama_Pulwama_Jammu and Kashmir',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.921425, 33.821964],
        },
      },
      {
        regionId: 'Lal Gam_Budgam_Badgam_Jammu and Kashmir',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.81721, 33.970122],
        },
      },
    ],
    cropId: 'apple',
    type: 'pest',
    typeId: 'green_aphids',
  },
  {
    count: 10,
    regions: [
      {
        regionId: 'Bhuj_Bhuj_Kachchh_Gujarat',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [69.6667, 23.25],
        },
      },
      {
        regionId: 'Ladud_Baglan_Nashik_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.186746, 20.7732155],
        },
      },
      {
        regionId: 'Hatnore_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.759737, 20.215202],
        },
      },
      {
        regionId: 'Lakhamapur_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [73.831052, 20.286803],
        },
      },
      {
        regionId: 'Dari_Nashik_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.73221, 20.081959],
        },
      },
      {
        regionId: 'Jamuniya_Ratlam_Ratlam_Madhya Pradesh',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [75.1514, 23.1961],
        },
      },
      {
        regionId: 'Kavalapur_Miraj_Sangli_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.613874, 16.9239348],
        },
      },
      {
        regionId: 'Kurnoli_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [73.916693, 20.152362],
        },
      },
      {
        regionId: 'Gandasi_Arsikere_Hassan_Karnataka',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [76.301671, 13.165906],
        },
      },
      {
        regionId: 'Mukhed_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [73.977724, 20.201952],
        },
      },
    ],
    cropId: 'greenchilli',
    type: 'pest',
    typeId: 'white_fly',
  },
  {
    count: 27,
    regions: [
      {
        regionId: 'Paniwala Mahla_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.961514, 30.002457],
        },
      },
      {
        regionId: 'Dodewala_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.252963, 29.970826],
        },
      },
      {
        regionId: 'Jhurar Khera_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.13493, 29.99351],
        },
      },
      {
        regionId: 'Banwala_Dabwali_Sirsa_Haryana',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.849434, 29.680374],
        },
      },
      {
        regionId: 'Bhanger Khera_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.993104, 30.008847],
        },
      },
      {
        regionId: 'Waryam Khera_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.070218, 30.012073],
        },
      },
      {
        regionId: '3 R_Karanpur_Ganganagar_Rajasthan',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.691329, 29.982239],
        },
      },
      {
        regionId: 'Nuhiyan Wali_Dabwali_Sirsa_Haryana',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.867709, 29.719612],
        },
      },
      {
        regionId: 'Sukchain_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.3563646, 30.0400849],
        },
      },
      {
        regionId: 'Roherianwali_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.208211, 30.201005],
        },
      },
      {
        regionId: '1 Y_Ganganagar_Ganganagar_Rajasthan',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.896483, 29.960941],
        },
      },
      {
        regionId: 'Jamalpur Shekhan_Tohana_Fatehabad_Haryana',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [75.83735, 29.7088],
        },
      },
      {
        regionId: 'Himatpura_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.379222, 29.994402],
        },
      },
      {
        regionId: 'Shergarh_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.061039, 30.004959],
        },
      },
      {
        regionId: '14 Eea_Padampur_Ganganagar_Rajasthan',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.71924038983296, 29.68920239715808],
        },
      },
      {
        regionId: 'Sihol_Palwal_Palwal_Haryana',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [77.425731, 28.130272],
        },
      },
      {
        regionId: 'Patti Amra Urf Patti Sadiq_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.1056435, 29.9919978],
        },
      },
      {
        regionId: 'Khatwan_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.17757499999999, 30.0092903],
        },
      },
      {
        regionId: 'Wahabwala_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.197204, 30.017152],
        },
      },
      {
        regionId: 'Mehna_Malout_Muktsar_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.6746, 30.0829],
        },
      },
      {
        regionId: 'Patrewala_Fazilka_Firozpur_Punjab',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.079763, 30.195685],
        },
      },
      {
        regionId: 'Teja Khera_Dabwali_Sirsa_Haryana',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.566283, 29.82958],
        },
      },
      {
        regionId: '4 KSP_Tibi_Hanumangarh_Rajasthan',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.44818, 29.50403],
        },
      },
      {
        regionId: 'Daulatpur_Hisar_Hisar_Haryana',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [75.85975, 29.446465],
        },
      },
      {
        regionId: 'Pabra_Hisar_Hisar_Haryana',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.815444, 29.457303],
        },
      },
      {
        regionId: 'Bhagsar_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.287855, 30.039395],
        },
      },
      {
        regionId: 'Sherewala_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.162714, 29.974211],
        },
      },
    ],
    cropId: 'kinnow',
    type: 'pest',
    typeId: 'citrus_psylla',
  },
  {
    count: 1,
    regions: [
      {
        regionId: 'Gonda_Uttar Pradesh',
        regionType: 'district',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [81.854366, 27.0658582],
        },
      },
    ],
    cropId: 'guava',
    type: 'pest',
    typeId: 'tea_mosquitto_bug',
  },
  {
    count: 80,
    regions: [
      {
        regionId: 'Darganhalli_Solapur South_Solapur_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.86825689999999, 17.9624924],
        },
      },
      {
        regionId: 'Shelve_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.238608, 17.735375],
        },
      },
      {
        regionId: 'Junoni_Sangole_Solapur_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.001784, 17.233414],
        },
      },
      {
        regionId: 'Honawad_Bijapur_Bijapur_Karnataka',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [75.710031, 16.8301708],
        },
      },
      {
        regionId: 'Guntur_Andhra Pradesh',
        regionType: 'district',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [80.4333, 16.3783],
        },
      },
      {
        regionId: 'Sindgi_Sindgi_Bijapur_Karnataka',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [76.252438, 16.927031],
        },
      },
      {
        regionId: 'Chinchani_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.63986, 17.070231],
        },
      },
      {
        regionId: 'Rampur_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.186993, 17.05429],
        },
      },
      {
        regionId: 'Kalgurki_Basavana Bagevadi_Bijapur_Karnataka',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [75.75, 16.5676],
        },
      },
      {
        regionId: 'Rajuri_Sangole_Solapur_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [75.09881, 17.307824],
        },
      },
      {
        regionId: 'Kumbhari_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.114219, 17.109476],
        },
      },
      {
        regionId: 'Tasgaon_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.6078344, 17.0295253],
        },
      },
      {
        regionId: 'Kanthi_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [75.151802, 17.057597],
        },
      },
      {
        regionId: 'Vijayanagar_Indi_Bijapur_Karnataka',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [75.747647, 17.153153],
        },
      },
      {
        regionId: 'Jainwadi_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.144837, 17.665446],
        },
      },
      {
        regionId: 'Santoshwadi_Miraj_Sangli_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.870388, 16.837687],
        },
      },
      {
        regionId: 'Bhose_Miraj_Sangli_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.744722, 16.965333],
        },
      },
      {
        regionId: 'Kundal_Palus_Sangli_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.411341, 17.11492],
        },
      },
      {
        regionId: 'Walwa_Walwa_Sangli_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.359664, 17.030863],
        },
      },
      {
        regionId: 'Ekhatapur_Sangole_Solapur_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [75.1394925, 17.4645926],
        },
      },
      {
        regionId: 'Sonakanahalli_Indi_Bijapur_Karnataka',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.785361, 17.153153],
        },
      },
      {
        regionId: 'Motewadi_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [75.646609, 16.969631],
        },
      },
      {
        regionId: 'Karkamb_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [75.280176, 17.869368],
        },
      },
      {
        regionId: 'Chinchale_Atpadi_Sangli_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.772354, 17.353145],
        },
      },
      {
        regionId: 'Kannur_Bijapur_Bijapur_Karnataka',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.704256, 17.037722],
        },
      },
      {
        regionId: 'Mallal_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [75.198494, 17.013935],
        },
      },
      {
        regionId: 'Jumnal_Bijapur_Bijapur_Karnataka',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.550905, 16.480477],
        },
      },
      {
        regionId: 'Takli_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [75.311517, 17.632675],
        },
      },
      {
        regionId: 'Khupsangi_Mangalvedhe_Solapur_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [75.356632, 17.415105],
        },
      },
      {
        regionId: 'Bedag_Miraj_Sangli_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.750349, 16.79725],
        },
      },
      {
        regionId: 'Tikondi_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.578878, 17.039763],
        },
      },
      {
        regionId: 'Shegaon_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [75.167854, 17.189055],
        },
      },
      {
        regionId: 'Yamaji Patalachi Wadi_Atpadi_Sangli_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.948094, 17.413234],
        },
      },
      {
        regionId: 'Bhatambare_Barshi_Solapur_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [75.922916, 18.145576],
        },
      },
      {
        regionId: 'Bijapur_Bijapur_Bijapur_Karnataka',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [75.710031, 16.8301708],
        },
      },
      {
        regionId: 'Eklaspur_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [75.398962, 17.587668],
        },
      },
      {
        regionId: 'Konheri_Mohol_Solapur_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [75.519117, 17.822368],
        },
      },
      {
        regionId: 'Yelmar Mangewadi_Sangole_Solapur_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [75.106008, 17.400261],
        },
      },
      {
        regionId: 'Antroli_Solapur South_Solapur_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.86825689999999, 17.9624924],
        },
      },
      {
        regionId: 'Karewadi_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [75.595979, 17.039006],
        },
      },
      {
        regionId: 'Karibhanthnal_Basavana Bagevadi_Bijapur_Karnataka',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [76.043744, 16.600767],
        },
      },
      {
        regionId: 'Sawargaon_Barshi_Solapur_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [75.904659, 18.170242],
        },
      },
      {
        regionId: 'Jarandi_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.847037, 17.174991],
        },
      },
      {
        regionId: 'Ashta_Walwa_Sangli_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.425999, 16.945666],
        },
      },
      {
        regionId: 'Karanje_Khanapur_Sangli_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.763149, 17.234952],
        },
      },
      {
        regionId: 'Mulawad_Basavana Bagevadi_Bijapur_Karnataka',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [75.75, 16.5676],
        },
      },
      {
        regionId: 'Babanagar_Bijapur_Bijapur_Karnataka',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [75.4767099, 16.8858261],
        },
      },
      {
        regionId: 'Ranmasle_Solapur North_Solapur_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [75.779117, 17.83742],
        },
      },
      {
        regionId: 'Bhingewadi_Atpadi_Sangli_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.948094, 17.413234],
        },
      },
      {
        regionId: 'Kapanimbargi_Indi_Bijapur_Karnataka',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [75.795829, 17.17189],
        },
      },
      {
        regionId: 'Korty_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [75.311517, 17.632675],
        },
      },
      {
        regionId: 'Tungat_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.469146, 17.760851],
        },
      },
      {
        regionId: 'Lonar_Mangalvedhe_Solapur_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [75.377835, 17.244994],
        },
      },
      {
        regionId: 'Arag_Miraj_Sangli_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.808491, 16.782249],
        },
      },
      {
        regionId: 'Gheradi_Sangole_Solapur_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [75.28432, 17.25674],
        },
      },
      {
        regionId: 'Kengalagutti_Bijapur_Bijapur_Karnataka',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [75.507502, 16.504505],
        },
      },
      {
        regionId: 'Manerajuri_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.695479, 17.014179],
        },
      },
      {
        regionId: 'Mangalvedha_Mangalvedhe_Solapur_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [75.432834, 17.524535],
        },
      },
      {
        regionId: 'Aliyabad_Bijapur_Bijapur_Karnataka',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.752196, 16.87223],
        },
      },
      {
        regionId: 'Ajanale_Sangole_Solapur_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [75.079607, 17.417859],
        },
      },
      {
        regionId: 'Ravalgundwadi_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.305029, 16.990991],
        },
      },
      {
        regionId: 'Bardi_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [75.3414, 17.864163],
        },
      },
      {
        regionId: 'Kasegaon_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [75.308966, 17.622019],
        },
      },
      {
        regionId: 'Kumathe_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.64901, 16.963863],
        },
      },
      {
        regionId: 'Kotnal_Indi_Bijapur_Karnataka',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [75.788927, 17.031853],
        },
      },
      {
        regionId: 'Tumbagi_Muddebihal_Bijapur_Karnataka',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [76.286106, 16.579906],
        },
      },
      {
        regionId: 'Bolachikkalaki_Bijapur_Bijapur_Karnataka',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [75.501053, 16.561905],
        },
      },
      {
        regionId: 'Siddapur_Bijapur_Bijapur_Karnataka',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [75.549456, 16.87264],
        },
      },
      {
        regionId: 'Khandobachiwadi_Palus_Sangli_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.50334522659423, 16.997711184875463],
        },
      },
      {
        regionId: 'Halasangi_Indi_Bijapur_Karnataka',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [75.867131, 17.310738],
        },
      },
      {
        regionId: 'Pandharewadi_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.331197, 17.818607],
        },
      },
      {
        regionId: 'Manegaon_Madha_Solapur_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.6513571, 17.9897455],
        },
      },
      {
        regionId: 'Chinchgaon_Madha_Solapur_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [75.476164, 18.114794],
        },
      },
      {
        regionId: 'Lamantanda_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [75.4752537, 16.9591421],
        },
      },
      {
        regionId: 'Morvanchi_Mohol_Solapur_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [75.766764, 17.829997],
        },
      },
      {
        regionId: 'Basarkod_Muddebihal_Bijapur_Karnataka',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [76.07399989999999, 16.3848126],
        },
      },
      {
        regionId: 'Toravi_Bijapur_Bijapur_Karnataka',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [75.710031, 16.8301708],
        },
      },
      {
        regionId: 'Managuli_Basavana Bagevadi_Bijapur_Karnataka',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.810058, 16.667186],
        },
      },
      {
        regionId: 'Wakav_Madha_Solapur_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [75.590436, 17.976299],
        },
      },
      {
        regionId: 'Balvadi_Sangole_Solapur_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [75.023693, 17.383735],
        },
      },
    ],
    cropId: 'grapes',
    type: 'pest',
    typeId: 'flea_beetle',
  },
  {
    count: 11,
    regions: [
      {
        regionId: 'Dharoli_Rajgarh_Sirmaur_Himachal Pradesh',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [77.266712, 30.931901],
        },
      },
      {
        regionId: 'Gopal Pora Kalan_Anantnag_Anantnag_Jammu and Kashmir',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.200952, 33.721958],
        },
      },
      {
        regionId: 'Sir Hama_Bijbehara_Anantnag_Jammu and Kashmir',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.146514, 33.848257],
        },
      },
      {
        regionId: 'Rakh Chindran_Pulwama_Pulwama_Jammu and Kashmir',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.921425, 33.821964],
        },
      },
      {
        regionId: 'Chichiri Pora_Anantnag_Anantnag_Jammu and Kashmir',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [75.13081, 33.70555],
        },
      },
      {
        regionId: 'Sopore_Sopore_Baramula_Jammu and Kashmir',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.4945, 34.22812],
        },
      },
      {
        regionId: 'Kosum Bagh_Sonawari_Bandipore_Jammu and Kashmir',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.64498, 34.24778],
        },
      },
      {
        regionId: 'Ratni Pora_Shupiyan_Shupiyan_Jammu and Kashmir',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.904415, 33.701463],
        },
      },
      {
        regionId: 'Srinagar___Jammu and Kashmir',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.819773, 34.083717],
        },
      },
      {
        regionId: 'Manlo_Shupiyan_Shupiyan_Jammu and Kashmir',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.826405, 33.75451],
        },
      },
      {
        regionId: 'Thaji Wara_Anantnag_Anantnag_Jammu and Kashmir',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [75.19546335570067, 33.69935385885993],
        },
      },
    ],
    cropId: 'apple',
    type: 'pest',
    typeId: 'red_spider_mites',
  },
  {
    count: 57,
    regions: [
      {
        regionId: 'Dahegaon_Nashik_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.82996, 20.29135],
        },
      },
      {
        regionId: 'Datyane_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [73.971166, 20.070074],
        },
      },
      {
        regionId: 'Dhondgavhan_Chandvad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.0046727, 20.2203949],
        },
      },
      {
        regionId: 'Pimpri Sayyad_Nashik_Nashik_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [73.926071, 20.047016],
        },
      },
      {
        regionId: 'Balsogra_Dadi_Hazaribagh_Jharkhand',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [85.431538, 23.766782],
        },
      },
      {
        regionId: 'Bahaduri_Chandvad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.9738201, 20.2855097],
        },
      },
      {
        regionId: 'Amrutwadi_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.261943, 17.03157],
        },
      },
      {
        regionId: 'Antarweli_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [73.969963, 20.204328],
        },
      },
      {
        regionId: 'Jarandi_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.847037, 17.174991],
        },
      },
      {
        regionId: 'Ashta_Walwa_Sangli_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.425999, 16.945666],
        },
      },
      {
        regionId: 'Vishnu Nagar_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.208211, 20.077255],
        },
      },
      {
        regionId: 'Korhate_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.867451, 20.162221],
        },
      },
      {
        regionId: 'Umarani_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.2362381, 16.9014483],
        },
      },
      {
        regionId: 'Thengode_Baglan_Nashik_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.193489, 20.530791],
        },
      },
      {
        regionId: 'Bramhangaon Vinchur_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.2526, 20.1343],
        },
      },
      {
        regionId: 'Saptashrungagad_Kalwan_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.908977, 20.390267],
        },
      },
      {
        regionId: 'Pingalwade_Baglan_Nashik_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.124867, 20.727529],
        },
      },
      {
        regionId: 'Ghodewadi_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [73.878844, 20.247149],
        },
      },
      {
        regionId: 'Kikwari Bk._Baglan_Nashik_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.072421, 20.672307],
        },
      },
      {
        regionId: 'Rasalpur_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.10931409999999, 20.0799646],
        },
      },
      {
        regionId: 'Dudgaon_Nashik_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.659691, 19.974383],
        },
      },
      {
        regionId: 'Anjani_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.7777832, 17.0841203],
        },
      },
      {
        regionId: 'Kasbe Vani_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [73.886929, 20.328891],
        },
      },
      {
        regionId: 'Palashi_Khanapur_Sangli_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.81568659999999, 17.2201143],
        },
      },
      {
        regionId: 'Eklahare_Kalwan_Nashik_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.025055, 20.493421],
        },
      },
      {
        regionId: 'Tadasalur_Parasgad_Belgaum_Karnataka',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.899135, 15.923653],
        },
      },
      {
        regionId: 'Pimpalnare_Chandvad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.2472779, 20.3271277],
        },
      },
      {
        regionId: 'Jamuniya_Ratlam_Ratlam_Madhya Pradesh',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.1514, 23.1961],
        },
      },
      {
        regionId: 'Talegaon Vani_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [73.938003, 20.278725],
        },
      },
      {
        regionId: 'Wavi_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.080553, 20.20566],
        },
      },
      {
        regionId: 'Kadawa Mhalungi_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.792171, 20.246876],
        },
      },
      {
        regionId: 'Walwa_Walwa_Sangli_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.359664, 17.030863],
        },
      },
      {
        regionId: 'Mukhed_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.977724, 20.201952],
        },
      },
      {
        regionId: 'Hatnore_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.759737, 20.215202],
        },
      },
      {
        regionId: 'Dari_Nashik_Nashik_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [73.73221, 20.081959],
        },
      },
      {
        regionId: 'Pimpri Anchala_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.822975, 20.400579],
        },
      },
      {
        regionId: 'Rajapur_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.888031, 20.22126],
        },
      },
      {
        regionId: 'Lonar_Mangalvedhe_Solapur_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [75.377835, 17.244994],
        },
      },
      {
        regionId: 'Lakhamapur_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [73.831052, 20.286803],
        },
      },
      {
        regionId: 'Kavalapur_Miraj_Sangli_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.613874, 16.9239348],
        },
      },
      {
        regionId: 'Bhasner_Khargone_West Nimar_Madhya Pradesh',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [75.599894, 21.769016],
        },
      },
      {
        regionId: 'Tarhadi Tarf Tarhad_Shirpur_Dhule_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.7035279, 21.4154095],
        },
      },
      {
        regionId: 'Ladud_Baglan_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.186746, 20.7732155],
        },
      },
      {
        regionId: 'Ambedindori_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.863408, 20.122448],
        },
      },
      {
        regionId: 'Dhamanwadi_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.897218, 20.201876],
        },
      },
      {
        regionId: 'Sarole Thadi_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.206743, 20.008015],
        },
      },
      {
        regionId: 'Khadak Sukene_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [73.907507, 20.173918],
        },
      },
      {
        regionId: 'Kalwan Bk._Kalwan_Nashik_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.042314, 20.492507],
        },
      },
      {
        regionId: 'Gavhan_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.767172, 17.062042],
        },
      },
      {
        regionId: 'Redgaon_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.086739, 20.208289],
        },
      },
      {
        regionId: 'Dudhkhede_Chandvad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.692277, 21.423423],
        },
      },
      {
        regionId: 'Shindwad_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [73.987961, 20.247229],
        },
      },
      {
        regionId: 'Dindori_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [73.8272029, 20.2041657],
        },
      },
      {
        regionId: 'Shirsane_Chandvad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.2472779, 20.3271277],
        },
      },
      {
        regionId: 'Jaulakedindori_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [73.90126, 20.061645],
        },
      },
      {
        regionId: 'Harsule_Sinnar_Nashik_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [73.939472, 19.808243],
        },
      },
      {
        regionId: 'Khanapur_Khanapur_Sangli_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.71761210000001, 17.2636096],
        },
      },
    ],
    cropId: 'tomato',
    type: 'disease',
    typeId: 'late_blight',
  },
  {
    count: 4,
    regions: [
      {
        regionId: 'Nashik_Nashik_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.78980229999999, 19.9974533],
        },
      },
      {
        regionId: 'Dahegaon_Nashik_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.82996, 20.29135],
        },
      },
      {
        regionId: 'Ahergaon_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.016555, 20.178866],
        },
      },
      {
        regionId: 'Dudgaon_Nashik_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.659691, 19.974383],
        },
      },
    ],
    cropId: 'blueberry',
    type: 'disease',
    typeId: 'powdery_mildew',
  },
  {
    count: 115,
    regions: [
      {
        regionId: 'Pimpri_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.0649, 20.10161],
        },
      },
      {
        regionId: 'Zalaki_Indi_Bijapur_Karnataka',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [75.816569, 17.241298],
        },
      },
      {
        regionId: 'Kikwari Bk._Baglan_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.072421, 20.672307],
        },
      },
      {
        regionId: 'Pimpri Anchala_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.822975, 20.400579],
        },
      },
      {
        regionId: 'Pimpri Sayyad_Nashik_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.926071, 20.047016],
        },
      },
      {
        regionId: 'Redgaon_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.086739, 20.208289],
        },
      },
      {
        regionId: 'Karanjgaon_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.062141, 20.007462],
        },
      },
      {
        regionId: 'Ugaon_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.127483, 20.126669],
        },
      },
      {
        regionId: 'Shirwade Wani_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.05228, 20.21573],
        },
      },
      {
        regionId: 'Pimpalgaon Baswant_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.9879323, 20.1654012],
        },
      },
      {
        regionId: 'Kurnoli_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.916693, 20.152362],
        },
      },
      {
        regionId: 'Rasalpur_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.10931409999999, 20.0799646],
        },
      },
      {
        regionId: 'Mohadi_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.90126, 20.143693],
        },
      },
      {
        regionId: 'Raulas_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.0649, 20.10161],
        },
      },
      {
        regionId: 'Tisgaon_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.398148, 20.52333],
        },
      },
      {
        regionId: 'Dudgaon_Nashik_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.659691, 19.974383],
        },
      },
      {
        regionId: 'Gitakunj_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.083054, 20.106509],
        },
      },
      {
        regionId: 'Thengode_Baglan_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.193489, 20.530791],
        },
      },
      {
        regionId: 'Palkhed_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.8713099, 20.1880642],
        },
      },
      {
        regionId: 'Sawatawadi_Malegaon_Nashik_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.5139188, 20.5650788],
        },
      },
      {
        regionId: 'Antarweli_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.969963, 20.204328],
        },
      },
      {
        regionId: 'Nandurdi_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.1027069, 20.1350622],
        },
      },
      {
        regionId: 'Mukhed_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.977724, 20.201952],
        },
      },
      {
        regionId: 'Nanegaon_Nashik_Nashik_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [73.862306, 19.888923],
        },
      },
      {
        regionId: 'Belanki_Miraj_Sangli_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.872127, 16.860279],
        },
      },
      {
        regionId: 'Lakhamapur_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.831052, 20.286803],
        },
      },
      {
        regionId: 'Bhuyane_Baglan_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.150863, 20.732837],
        },
      },
      {
        regionId: 'Takali_Miraj_Sangli_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.686392, 16.824227],
        },
      },
      {
        regionId: 'Jaulakedindori_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.90126, 20.061645],
        },
      },
      {
        regionId: 'Khadak Malegaon_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.16730079999999, 20.1757318],
        },
      },
      {
        regionId: 'Sangli-Miraj and Kupwad_Miraj_Sangli_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.5814773, 16.8523973],
        },
      },
      {
        regionId: 'Nandur Madhyameshwar_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.148035, 20.021114],
        },
      },
      {
        regionId: 'Lonwadi_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.0289106, 20.1618864],
        },
      },
      {
        regionId: 'Sonewadi Bk._Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.15715, 20.09744],
        },
      },
      {
        regionId: 'Jaikheda_Baglan_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.204758, 20.792035],
        },
      },
      {
        regionId: 'Mungsare_Nashik_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.722436, 20.059675],
        },
      },
      {
        regionId: 'Karanjad_Baglan_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.1434477, 20.7356497],
        },
      },
      {
        regionId: 'Dahegaon_Nashik_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.82996, 20.29135],
        },
      },
      {
        regionId: 'Khadakjamb_Chandvad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.077194, 20.249008],
        },
      },
      {
        regionId: 'Rajapur_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.888031, 20.22126],
        },
      },
      {
        regionId: 'Khede_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.114269, 20.087111],
        },
      },
      {
        regionId: 'Kurli_Khanapur_Sangli_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.575803, 17.233716],
        },
      },
      {
        regionId: 'Ozar_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [73.92611, 20.08734],
        },
      },
      {
        regionId: 'Behed_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.0017, 20.1565],
        },
      },
      {
        regionId: 'Dugaon_Nashik_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.68636289999999, 20.073488],
        },
      },
      {
        regionId: 'Kadawa Mhalungi_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.792171, 20.246876],
        },
      },
      {
        regionId: 'Mauje Sukene_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.0138541, 20.0784069],
        },
      },
      {
        regionId: 'Palkhed_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.059938, 20.175788],
        },
      },
      {
        regionId: 'Pandhurli_Sinnar_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.8601, 19.829837],
        },
      },
      {
        regionId: 'Nashik_Nashik_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.78980229999999, 19.9974533],
        },
      },
      {
        regionId: 'Gondilwadi_Palus_Sangli_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.449082, 17.078759],
        },
      },
      {
        regionId: 'Dari_Nashik_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.73221, 20.081959],
        },
      },
      {
        regionId: 'Ambedindori_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.863408, 20.122448],
        },
      },
      {
        regionId: 'Kalwan Bk._Kalwan_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.042314, 20.492507],
        },
      },
      {
        regionId: 'Ladud_Baglan_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.186746, 20.7732155],
        },
      },
      {
        regionId: 'Niphad_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.10931409999999, 20.0799646],
        },
      },
      {
        regionId: 'Ghodewadi_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.878844, 20.247149],
        },
      },
      {
        regionId: 'Pingalwade_Baglan_Nashik_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.124867, 20.727529],
        },
      },
      {
        regionId: 'Sawatamalinagar_Sinnar_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.866716, 19.818527],
        },
      },
      {
        regionId: 'Pimpalnare_Chandvad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.2472779, 20.3271277],
        },
      },
      {
        regionId: 'Bramhangaon Vinchur_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.2526, 20.1343],
        },
      },
      {
        regionId: 'Ankalkhop_Palus_Sangli_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.445651, 17.016482],
        },
      },
      {
        regionId: 'Bolwad_Miraj_Sangli_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.701699, 16.816175],
        },
      },
      {
        regionId: 'Kasbe Vani_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.886929, 20.328891],
        },
      },
      {
        regionId: 'Waghale_Baglan_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.246728, 20.777388],
        },
      },
      {
        regionId: 'Telangwadi_Mohol_Solapur_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.451858, 17.884624],
        },
      },
      {
        regionId: 'Dindori_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.8272029, 20.2041657],
        },
      },
      {
        regionId: 'Shindwad_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.987961, 20.247229],
        },
      },
      {
        regionId: 'Lengre_Khanapur_Sangli_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.631809, 17.329731],
        },
      },
      {
        regionId: 'Dhondgavhan_Chandvad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.0046727, 20.2203949],
        },
      },
      {
        regionId: 'Alur_Indi_Bijapur_Karnataka',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.97178, 17.24365],
        },
      },
      {
        regionId: 'Saptashrungagad_Kalwan_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.908977, 20.390267],
        },
      },
      {
        regionId: 'Bandal_Sindgi_Bijapur_Karnataka',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [76.203187, 16.910681],
        },
      },
      {
        regionId: 'Talegaon Vani_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.938003, 20.278725],
        },
      },
      {
        regionId: 'Kasabe Sukene_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.0138541, 20.0784069],
        },
      },
      {
        regionId: 'Eklahare_Kalwan_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.025055, 20.493421],
        },
      },
      {
        regionId: 'Vadali Najik_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.023035, 20.1273487],
        },
      },
      {
        regionId: 'Vishnu Nagar_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.208211, 20.077255],
        },
      },
      {
        regionId: 'Anawali_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [75.37237, 17.628971],
        },
      },
      {
        regionId: 'Nagthane_Palus_Sangli_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.406975, 17.02055],
        },
      },
      {
        regionId: 'Nampur_Baglan_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.3109045, 20.7264993],
        },
      },
      {
        regionId: 'Pachorewani_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.025422, 20.202973],
        },
      },
      {
        regionId: 'Fopir_Baglan_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.26294, 20.697225],
        },
      },
      {
        regionId: 'Manori Kh._Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.10931409999999, 20.0799646],
        },
      },
      {
        regionId: 'Narayan Tembhi_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.019586, 20.142225],
        },
      },
      {
        regionId: 'Davachwadi_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.0549812, 20.1429594],
        },
      },
      {
        regionId: 'Bahaduri_Chandvad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.9738201, 20.2855097],
        },
      },
      {
        regionId: 'Khedgaon_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.9565551, 20.2394181],
        },
      },
      {
        regionId: 'Bopegaon_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.938447, 20.218671],
        },
      },
      {
        regionId: 'Vadner Bhairao_Chandvad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.031395, 20.260168],
        },
      },
      {
        regionId: 'Lokhandewadi_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [73.9058534, 20.1992494],
        },
      },
      {
        regionId: 'Hatnore_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.759737, 20.215202],
        },
      },
      {
        regionId: 'Shivadi_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.127483, 20.119796],
        },
      },
      {
        regionId: 'Devergaon_Chandvad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.172071, 20.2127173],
        },
      },
      {
        regionId: 'Vinchurgavali_Nashik_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.8846, 20.0246],
        },
      },
      {
        regionId: 'Bijote_Baglan_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.199039, 20.731996],
        },
      },
      {
        regionId: 'Ahergaon_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.016555, 20.178866],
        },
      },
      {
        regionId: 'Vadalibhoi_Chandvad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.088941, 20.262397],
        },
      },
      {
        regionId: 'Sarole Thadi_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.206743, 20.008015],
        },
      },
      {
        regionId: 'Ranwad_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.120656, 20.167138],
        },
      },
      {
        regionId: 'Gardi_Khanapur_Sangli_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.545047, 17.285561],
        },
      },
      {
        regionId: 'Mavadi_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.930388, 20.312127],
        },
      },
      {
        regionId: 'Vithalwadi_Palus_Sangli_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.47195, 17.051178],
        },
      },
      {
        regionId: 'Deopur_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.079995, 20.125607],
        },
      },
      {
        regionId: 'Akolekati_Solapur North_Solapur_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.851259, 17.785157],
        },
      },
      {
        regionId: 'Bramhanpade_Baglan_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.245627, 20.783443],
        },
      },
      {
        regionId: 'Dhamanwadi_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.897218, 20.201876],
        },
      },
      {
        regionId: 'Dudhkhede_Chandvad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.692277, 21.423423],
        },
      },
      {
        regionId: 'Wavi_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.080553, 20.20566],
        },
      },
      {
        regionId: 'Mukhed_Yevla_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.313104, 19.983271],
        },
      },
      {
        regionId: 'Gondegaon_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.972167, 20.215381],
        },
      },
      {
        regionId: 'Chinchkhed_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [73.9301037, 20.1704231],
        },
      },
      {
        regionId: 'Kavalapur_Miraj_Sangli_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.613874, 16.9239348],
        },
      },
      {
        regionId: 'Shivare_Chandvad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.2472779, 20.3271277],
        },
      },
      {
        regionId: 'Korhate_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.867451, 20.162221],
        },
      },
    ],
    cropId: 'grapes',
    type: 'pest',
    typeId: 'jassids',
  },
  {
    count: 6,
    regions: [
      {
        regionId: 'Khamni_Burhanpur_Burhanpur_Madhya Pradesh',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [76.265834, 21.213971],
        },
      },
      {
        regionId: 'Sirsa_Haryana',
        regionType: 'district',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [75.0267312, 29.5374003],
        },
      },
      {
        regionId: 'Dabwali_Sirsa_Haryana',
        regionType: 'subDistrict',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.64535, 30.023036],
        },
      },
      {
        regionId: 'Firozpur_Punjab',
        regionType: 'district',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.622, 30.933],
        },
      },
      {
        regionId: 'Bulandshahr_Uttar Pradesh',
        regionType: 'district',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [77.8403, 28.4198],
        },
      },
      {
        regionId: 'Gonda_Uttar Pradesh',
        regionType: 'district',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [81.854366, 27.0658582],
        },
      },
    ],
    cropId: 'guava',
    type: 'disease',
    typeId: 'fruit_canker',
  },
  {
    count: 13,
    regions: [
      {
        regionId: 'Talegaon Vani_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [73.938003, 20.278725],
        },
      },
      {
        regionId: 'Bopegaon_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.938447, 20.218671],
        },
      },
      {
        regionId: 'Bandhara Nana_Bhuj_Kachchh_Gujarat',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [69.75308, 23.096905],
        },
      },
      {
        regionId: 'Sapar Timbo_Bhuj_Kachchh_Gujarat',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [69.659063, 23.127809],
        },
      },
      {
        regionId: 'Gandher_Bhuj_Kachchh_Gujarat',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [69.859927, 23.184744],
        },
      },
      {
        regionId: 'Sanosara_Bhuj_Kachchh_Gujarat',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [69.719357, 23.130993],
        },
      },
      {
        regionId: 'Kachchh_Gujarat',
        regionType: 'district',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [69.8597406, 23.7337326],
        },
      },
      {
        regionId: 'Hatnore_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [73.759737, 20.215202],
        },
      },
      {
        regionId: 'Saiyedpar_Bhuj_Kachchh_Gujarat',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [69.851737, 23.191129],
        },
      },
      {
        regionId: 'Sarli_Bhuj_Kachchh_Gujarat',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [69.479758, 23.089054],
        },
      },
      {
        regionId: 'Kadawa Mhalungi_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.792171, 20.246876],
        },
      },
      {
        regionId: 'Mankuva_Bhuj_Kachchh_Gujarat',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [69.572115, 23.21201],
        },
      },
      {
        regionId: 'Thengode_Baglan_Nashik_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.193489, 20.530791],
        },
      },
    ],
    cropId: 'pomegranate',
    type: 'disease',
    typeId: 'colletotrichum',
  },
  {
    count: 5,
    regions: [
      {
        regionId: 'Firozpur_Punjab',
        regionType: 'district',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.622, 30.933],
        },
      },
      {
        regionId: 'Dabwali_Sirsa_Haryana',
        regionType: 'subDistrict',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.64535, 30.023036],
        },
      },
      {
        regionId: 'Khamni_Burhanpur_Burhanpur_Madhya Pradesh',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [76.265834, 21.213971],
        },
      },
      {
        regionId: 'Bulandshahr_Uttar Pradesh',
        regionType: 'district',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [77.8403, 28.4198],
        },
      },
      {
        regionId: 'Sirsa_Haryana',
        regionType: 'district',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.0267312, 29.5374003],
        },
      },
    ],
    cropId: 'guava',
    type: 'pest',
    typeId: 'mealybug',
  },
  {
    count: 146,
    regions: [
      {
        regionId: 'Karibhanthnal_Basavana Bagevadi_Bijapur_Karnataka',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [76.043744, 16.600767],
        },
      },
      {
        regionId: 'Tikondi_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.578878, 17.039763],
        },
      },
      {
        regionId: 'Kundal_Palus_Sangli_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.411341, 17.11492],
        },
      },
      {
        regionId: 'Zalaki_Indi_Bijapur_Karnataka',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.816569, 17.241298],
        },
      },
      {
        regionId: 'Siddapur_Bijapur_Bijapur_Karnataka',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.549456, 16.87264],
        },
      },
      {
        regionId: 'Yeoti_Mohol_Solapur_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [75.470339, 17.789793],
        },
      },
      {
        regionId: 'Mauje Sukene_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.0138541, 20.0784069],
        },
      },
      {
        regionId: 'Bijote_Baglan_Nashik_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.199039, 20.731996],
        },
      },
      {
        regionId: 'Darganhalli_Solapur South_Solapur_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.86825689999999, 17.9624924],
        },
      },
      {
        regionId: 'Malgaon_Miraj_Sangli_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.7093812, 16.868783],
        },
      },
      {
        regionId: 'Sonakanahalli_Indi_Bijapur_Karnataka',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.785361, 17.153153],
        },
      },
      {
        regionId: 'Bhose_Miraj_Sangli_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.744722, 16.965333],
        },
      },
      {
        regionId: 'Yamaji Patalachi Wadi_Atpadi_Sangli_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.948094, 17.413234],
        },
      },
      {
        regionId: 'Bolachikkalaki_Bijapur_Bijapur_Karnataka',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.501053, 16.561905],
        },
      },
      {
        regionId: 'Umarani_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [75.2362381, 16.9014483],
        },
      },
      {
        regionId: 'Guntur_Andhra Pradesh',
        regionType: 'district',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [80.4333, 16.3783],
        },
      },
      {
        regionId: 'Bilur_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [75.185728, 16.942502],
        },
      },
      {
        regionId: 'Rampur_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.186993, 17.05429],
        },
      },
      {
        regionId: 'Ravalgundwadi_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.305029, 16.990991],
        },
      },
      {
        regionId: 'Siddhewadi_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.777411, 17.136483],
        },
      },
      {
        regionId: 'Kamalapur_Sangole_Solapur_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.129545, 17.400066],
        },
      },
      {
        regionId: 'Jaloli_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [75.25538, 17.872738],
        },
      },
      {
        regionId: 'Ozar_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [73.92611, 20.08734],
        },
      },
      {
        regionId: 'Kasegaon_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.308966, 17.622019],
        },
      },
      {
        regionId: 'Eklaspur_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.398962, 17.587668],
        },
      },
      {
        regionId: 'Lonar_Mangalvedhe_Solapur_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.377835, 17.244994],
        },
      },
      {
        regionId: 'Sawatawadi_Malegaon_Nashik_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.5139188, 20.5650788],
        },
      },
      {
        regionId: 'Kannur_Bijapur_Bijapur_Karnataka',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [75.704256, 17.037722],
        },
      },
      {
        regionId: 'Arag_Miraj_Sangli_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.808491, 16.782249],
        },
      },
      {
        regionId: 'Sawargaon_Barshi_Solapur_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [75.904659, 18.170242],
        },
      },
      {
        regionId: 'Belanki_Miraj_Sangli_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.872127, 16.860279],
        },
      },
      {
        regionId: 'Mukhed_Yevla_Nashik_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.313104, 19.983271],
        },
      },
      {
        regionId: 'Ankalkhop_Palus_Sangli_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.445651, 17.016482],
        },
      },
      {
        regionId: 'Hanchinal_Basavana Bagevadi_Bijapur_Karnataka',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [76.003466, 16.523061],
        },
      },
      {
        regionId: 'Pimpri Sayyad_Nashik_Nashik_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [73.926071, 20.047016],
        },
      },
      {
        regionId: 'Takali_Miraj_Sangli_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.686392, 16.824227],
        },
      },
      {
        regionId: 'Motewadi_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.646609, 16.969631],
        },
      },
      {
        regionId: 'Khanderajuri_Miraj_Sangli_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.773108, 16.891831],
        },
      },
      {
        regionId: 'Takli_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.311517, 17.632675],
        },
      },
      {
        regionId: 'Bhairvawadi_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.660353, 17.078992],
        },
      },
      {
        regionId: 'Jarandi_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.847037, 17.174991],
        },
      },
      {
        regionId: 'Gondilwadi_Palus_Sangli_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.449082, 17.078759],
        },
      },
      {
        regionId: 'Wakav_Madha_Solapur_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.590436, 17.976299],
        },
      },
      {
        regionId: 'Khupsangi_Mangalvedhe_Solapur_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [75.356632, 17.415105],
        },
      },
      {
        regionId: 'Balvadi_Sangole_Solapur_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.023693, 17.383735],
        },
      },
      {
        regionId: 'Morvanchi_Mohol_Solapur_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.766764, 17.829997],
        },
      },
      {
        regionId: 'Undargaon_Madha_Solapur_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.573477, 18.003468],
        },
      },
      {
        regionId: 'Karewadi_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.595979, 17.039006],
        },
      },
      {
        regionId: 'Managuli_Basavana Bagevadi_Bijapur_Karnataka',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [75.810058, 16.667186],
        },
      },
      {
        regionId: 'Fopir_Baglan_Nashik_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.26294, 20.697225],
        },
      },
      {
        regionId: 'Bhatambare_Barshi_Solapur_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.922916, 18.145576],
        },
      },
      {
        regionId: 'Palashe_Nashik_Nashik_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [73.878476, 19.924019],
        },
      },
      {
        regionId: 'Ashta_Walwa_Sangli_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.425999, 16.945666],
        },
      },
      {
        regionId: 'Bedag_Miraj_Sangli_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.750349, 16.79725],
        },
      },
      {
        regionId: 'Kasabe Sukene_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.0138541, 20.0784069],
        },
      },
      {
        regionId: 'Kotnal_Indi_Bijapur_Karnataka',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.788927, 17.031853],
        },
      },
      {
        regionId: 'Niphad_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.10931409999999, 20.0799646],
        },
      },
      {
        regionId: 'Amrutwadi_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.261943, 17.03157],
        },
      },
      {
        regionId: 'Chinchkhed_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [73.9301037, 20.1704231],
        },
      },
      {
        regionId: 'Pimpri_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.0649, 20.10161],
        },
      },
      {
        regionId: 'Walwa_Walwa_Sangli_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.359664, 17.030863],
        },
      },
      {
        regionId: 'Gheradi_Sangole_Solapur_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.28432, 17.25674],
        },
      },
      {
        regionId: 'Anawali_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.37237, 17.628971],
        },
      },
      {
        regionId: 'Savarde_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.6872515, 17.0624211],
        },
      },
      {
        regionId: 'Jainwadi_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.144837, 17.665446],
        },
      },
      {
        regionId: 'Bandal_Sindgi_Bijapur_Karnataka',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [76.203187, 16.910681],
        },
      },
      {
        regionId: 'Manerajuri_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.695479, 17.014179],
        },
      },
      {
        regionId: 'Mangalvedha_Mangalvedhe_Solapur_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.432834, 17.524535],
        },
      },
      {
        regionId: 'Kapanimbargi_Indi_Bijapur_Karnataka',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.795829, 17.17189],
        },
      },
      {
        regionId: 'Junoni_Sangole_Solapur_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.001784, 17.233414],
        },
      },
      {
        regionId: 'Wavi_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.080553, 20.20566],
        },
      },
      {
        regionId: 'Bijapur_Bijapur_Bijapur_Karnataka',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.710031, 16.8301708],
        },
      },
      {
        regionId: 'Mallal_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.198494, 17.013935],
        },
      },
      {
        regionId: 'Jumnal_Bijapur_Bijapur_Karnataka',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.550905, 16.480477],
        },
      },
      {
        regionId: 'Shegaon_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.167854, 17.189055],
        },
      },
      {
        regionId: 'Balvadi_Khanapur_Sangli_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.723282, 17.288316],
        },
      },
      {
        regionId: 'Honawad_Bijapur_Bijapur_Karnataka',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.710031, 16.8301708],
        },
      },
      {
        regionId: 'Manori Kh._Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.10931409999999, 20.0799646],
        },
      },
      {
        regionId: 'Amanapur_Palus_Sangli_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.454211, 17.05153],
        },
      },
      {
        regionId: 'Toravi_Bijapur_Bijapur_Karnataka',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.710031, 16.8301708],
        },
      },
      {
        regionId: 'Kumbhari_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [75.114219, 17.109476],
        },
      },
      {
        regionId: 'Kumathe_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.64901, 16.963863],
        },
      },
      {
        regionId: 'Kengalagutti_Bijapur_Bijapur_Karnataka',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.507502, 16.504505],
        },
      },
      {
        regionId: 'Nidoni_Bijapur_Bijapur_Karnataka',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [75.710031, 16.8301708],
        },
      },
      {
        regionId: 'Babanagar_Bijapur_Bijapur_Karnataka',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.4767099, 16.8858261],
        },
      },
      {
        regionId: 'Dhanyal_Bijapur_Bijapur_Karnataka',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.567152, 16.764387],
        },
      },
      {
        regionId: 'Karanje_Khanapur_Sangli_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.763149, 17.234952],
        },
      },
      {
        regionId: 'Lamantanda_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.4752537, 16.9591421],
        },
      },
      {
        regionId: 'Palus_Palus_Sangli_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.4496317, 17.097643],
        },
      },
      {
        regionId: 'Kalgurki_Basavana Bagevadi_Bijapur_Karnataka',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.75, 16.5676],
        },
      },
      {
        regionId: 'Tikota_Bijapur_Bijapur_Karnataka',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.710031, 16.8301708],
        },
      },
      {
        regionId: 'Bhandi Shegaon_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.233503, 17.703954],
        },
      },
      {
        regionId: 'Yelmar Mangewadi_Sangole_Solapur_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.106008, 17.400261],
        },
      },
      {
        regionId: 'Shivadi_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.127483, 20.119796],
        },
      },
      {
        regionId: 'Kanamadi_Bijapur_Bijapur_Karnataka',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.391677, 16.923038],
        },
      },
      {
        regionId: 'Palashi_Khanapur_Sangli_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.81568659999999, 17.2201143],
        },
      },
      {
        regionId: 'Tungat_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.469146, 17.760851],
        },
      },
      {
        regionId: 'Rasalpur_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.10931409999999, 20.0799646],
        },
      },
      {
        regionId: 'Devnal_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [75.24103, 17.02297],
        },
      },
      {
        regionId: 'Basarkod_Muddebihal_Bijapur_Karnataka',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [76.07399989999999, 16.3848126],
        },
      },
      {
        regionId: 'Benapur_Khanapur_Sangli_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.757298, 17.245646],
        },
      },
      {
        regionId: 'Gavhan_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.767172, 17.062042],
        },
      },
      {
        regionId: 'Korty_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.311517, 17.632675],
        },
      },
      {
        regionId: 'Honaganahalli_Bijapur_Bijapur_Karnataka',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [75.716474, 16.696828],
        },
      },
      {
        regionId: 'Sangli-Miraj and Kupwad_Miraj_Sangli_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.5814773, 16.8523973],
        },
      },
      {
        regionId: 'Mulawad_Basavana Bagevadi_Bijapur_Karnataka',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [75.75, 16.5676],
        },
      },
      {
        regionId: 'Bijjaragi_Bijapur_Bijapur_Karnataka',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [75.716474, 16.696828],
        },
      },
      {
        regionId: 'Manegaon_Madha_Solapur_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.6513571, 17.9897455],
        },
      },
      {
        regionId: 'Sindgi_Sindgi_Bijapur_Karnataka',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [76.252438, 16.927031],
        },
      },
      {
        regionId: 'Lakhamapur_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.831052, 20.286803],
        },
      },
      {
        regionId: 'Chale_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.436476, 17.687215],
        },
      },
      {
        regionId: 'Kanthi_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.151802, 17.057597],
        },
      },
      {
        regionId: 'Vijayanagar_Indi_Bijapur_Karnataka',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.747647, 17.153153],
        },
      },
      {
        regionId: 'Ajanale_Sangole_Solapur_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.079607, 17.417859],
        },
      },
      {
        regionId: 'Halasangi_Indi_Bijapur_Karnataka',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.867131, 17.310738],
        },
      },
      {
        regionId: 'Vishnu Nagar_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.208211, 20.077255],
        },
      },
      {
        regionId: 'Chinchale_Atpadi_Sangli_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.772354, 17.353145],
        },
      },
      {
        regionId: 'Konheri_Mohol_Solapur_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.519117, 17.822368],
        },
      },
      {
        regionId: 'Chinchani_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.63986, 17.070231],
        },
      },
      {
        regionId: 'Shirwade Wani_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.05228, 20.21573],
        },
      },
      {
        regionId: 'Ekhatapur_Sangole_Solapur_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [75.1394925, 17.4645926],
        },
      },
      {
        regionId: 'Tumbagi_Muddebihal_Bijapur_Karnataka',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [76.286106, 16.579906],
        },
      },
      {
        regionId: 'Bardi_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.3414, 17.864163],
        },
      },
      {
        regionId: 'Sarole Thadi_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.206743, 20.008015],
        },
      },
      {
        regionId: 'Shelve_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.238608, 17.735375],
        },
      },
      {
        regionId: 'Bhingewadi_Atpadi_Sangli_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.948094, 17.413234],
        },
      },
      {
        regionId: 'Antroli_Solapur South_Solapur_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.86825689999999, 17.9624924],
        },
      },
      {
        regionId: 'Kurli_Khanapur_Sangli_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.575803, 17.233716],
        },
      },
      {
        regionId: 'Santoshwadi_Miraj_Sangli_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.870388, 16.837687],
        },
      },
      {
        regionId: 'Aliyabad_Bijapur_Bijapur_Karnataka',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.752196, 16.87223],
        },
      },
      {
        regionId: 'Upale_Barshi_Solapur_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.885891, 18.125079],
        },
      },
      {
        regionId: 'Karkamb_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.280176, 17.869368],
        },
      },
      {
        regionId: 'Alur_Indi_Bijapur_Karnataka',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [75.97178, 17.24365],
        },
      },
      {
        regionId: 'Jondhalkhindi_Khanapur_Sangli_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.618266, 17.32364],
        },
      },
      {
        regionId: 'Telangwadi_Mohol_Solapur_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.451858, 17.884624],
        },
      },
      {
        regionId: 'Thengode_Baglan_Nashik_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.193489, 20.530791],
        },
      },
      {
        regionId: 'Khadak Sukene_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [73.907507, 20.173918],
        },
      },
      {
        regionId: 'Tasgaon_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.6078344, 17.0295253],
        },
      },
      {
        regionId: 'Savalaj_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.76589179999999, 17.1106264],
        },
      },
      {
        regionId: 'Pandharewadi_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [75.331197, 17.818607],
        },
      },
      {
        regionId: 'Ranmasle_Solapur North_Solapur_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.779117, 17.83742],
        },
      },
      {
        regionId: 'Khandobachiwadi_Palus_Sangli_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.50334522659423, 16.997711184875463],
        },
      },
      {
        regionId: 'Bolwad_Miraj_Sangli_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.701699, 16.816175],
        },
      },
      {
        regionId: 'Chinchgaon_Madha_Solapur_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [75.476164, 18.114794],
        },
      },
      {
        regionId: 'Khede_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.114269, 20.087111],
        },
      },
      {
        regionId: 'Rajuri_Sangole_Solapur_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.09881, 17.307824],
        },
      },
    ],
    cropId: 'grapes',
    type: 'pest',
    typeId: 'mealybug',
  },
  {
    count: 85,
    regions: [
      {
        regionId: 'Dudgaon_Nashik_Nashik_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [73.659691, 19.974383],
        },
      },
      {
        regionId: 'Dudhkhede_Chandvad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.692277, 21.423423],
        },
      },
      {
        regionId: 'Mungsare_Nashik_Nashik_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [73.722436, 20.059675],
        },
      },
      {
        regionId: 'Shirwade Wani_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.05228, 20.21573],
        },
      },
      {
        regionId: 'Rasalpur_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.10931409999999, 20.0799646],
        },
      },
      {
        regionId: 'Pimpri Anchala_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.822975, 20.400579],
        },
      },
      {
        regionId: 'Kadawa Mhalungi_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.792171, 20.246876],
        },
      },
      {
        regionId: 'Lonwadi_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.0289106, 20.1618864],
        },
      },
      {
        regionId: 'Vadalibhoi_Chandvad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.088941, 20.262397],
        },
      },
      {
        regionId: 'Rajapur_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [73.888031, 20.22126],
        },
      },
      {
        regionId: 'Bhairvawadi_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.660353, 17.078992],
        },
      },
      {
        regionId: 'Chinchani_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.63986, 17.070231],
        },
      },
      {
        regionId: 'Walwa_Walwa_Sangli_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.359664, 17.030863],
        },
      },
      {
        regionId: 'Amanapur_Palus_Sangli_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.454211, 17.05153],
        },
      },
      {
        regionId: 'Wavi_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.080553, 20.20566],
        },
      },
      {
        regionId: 'Palashi_Khanapur_Sangli_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.81568659999999, 17.2201143],
        },
      },
      {
        regionId: 'Nanegaon_Nashik_Nashik_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [73.862306, 19.888923],
        },
      },
      {
        regionId: 'Ladud_Baglan_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.186746, 20.7732155],
        },
      },
      {
        regionId: 'Jaulakedindori_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [73.90126, 20.061645],
        },
      },
      {
        regionId: 'Gondilwadi_Palus_Sangli_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.449082, 17.078759],
        },
      },
      {
        regionId: 'Redgaon_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.086739, 20.208289],
        },
      },
      {
        regionId: 'Pimpalgaon Baswant_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [73.9879323, 20.1654012],
        },
      },
      {
        regionId: 'Vinchurgavali_Nashik_Nashik_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [73.8846, 20.0246],
        },
      },
      {
        regionId: 'Dhondgavhan_Chandvad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.0046727, 20.2203949],
        },
      },
      {
        regionId: 'Nagthane_Palus_Sangli_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.406975, 17.02055],
        },
      },
      {
        regionId: 'Mavadi_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.930388, 20.312127],
        },
      },
      {
        regionId: 'Pachorewani_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.025422, 20.202973],
        },
      },
      {
        regionId: 'Manori Kh._Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.10931409999999, 20.0799646],
        },
      },
      {
        regionId: 'Dindori_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.8272029, 20.2041657],
        },
      },
      {
        regionId: 'Dhamanwadi_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [73.897218, 20.201876],
        },
      },
      {
        regionId: 'Bopegaon_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.938447, 20.218671],
        },
      },
      {
        regionId: 'Jaikheda_Baglan_Nashik_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.204758, 20.792035],
        },
      },
      {
        regionId: 'Lokhandewadi_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [73.9058534, 20.1992494],
        },
      },
      {
        regionId: 'Mukhed_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [73.977724, 20.201952],
        },
      },
      {
        regionId: 'Gavhan_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.767172, 17.062042],
        },
      },
      {
        regionId: 'Vadner Bhairao_Chandvad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.031395, 20.260168],
        },
      },
      {
        regionId: 'Vishnu Nagar_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.208211, 20.077255],
        },
      },
      {
        regionId: 'Khadakjamb_Chandvad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.077194, 20.249008],
        },
      },
      {
        regionId: 'Bhose_Miraj_Sangli_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.744722, 16.965333],
        },
      },
      {
        regionId: 'Behed_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.0017, 20.1565],
        },
      },
      {
        regionId: 'Khanderajuri_Miraj_Sangli_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.773108, 16.891831],
        },
      },
      {
        regionId: 'Vita_Khanapur_Sangli_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.53571269999999, 17.2751726],
        },
      },
      {
        regionId: 'Eklahare_Kalwan_Nashik_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.025055, 20.493421],
        },
      },
      {
        regionId: 'Kumathe_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.64901, 16.963863],
        },
      },
      {
        regionId: 'Shindwad_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.987961, 20.247229],
        },
      },
      {
        regionId: 'Shivare_Chandvad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.2472779, 20.3271277],
        },
      },
      {
        regionId: 'Savarde_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.6872515, 17.0624211],
        },
      },
      {
        regionId: 'Kasbe Vani_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.886929, 20.328891],
        },
      },
      {
        regionId: 'Saptashrungagad_Kalwan_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.908977, 20.390267],
        },
      },
      {
        regionId: 'Khedgaon_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [73.9565551, 20.2394181],
        },
      },
      {
        regionId: 'Anjani_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.7777832, 17.0841203],
        },
      },
      {
        regionId: 'Manerajuri_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.695479, 17.014179],
        },
      },
      {
        regionId: 'Bahaduri_Chandvad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.9738201, 20.2855097],
        },
      },
      {
        regionId: 'Kundal_Palus_Sangli_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.411341, 17.11492],
        },
      },
      {
        regionId: 'Khadak Sukene_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [73.907507, 20.173918],
        },
      },
      {
        regionId: 'Gardi_Khanapur_Sangli_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.545047, 17.285561],
        },
      },
      {
        regionId: 'Dugaon_Nashik_Nashik_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [73.68636289999999, 20.073488],
        },
      },
      {
        regionId: 'Sawatamalinagar_Sinnar_Nashik_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [73.866716, 19.818527],
        },
      },
      {
        regionId: 'Savalaj_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.76589179999999, 17.1106264],
        },
      },
      {
        regionId: 'Devikhindi_Khanapur_Sangli_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.648277, 17.380994],
        },
      },
      {
        regionId: 'Jarandi_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.847037, 17.174991],
        },
      },
      {
        regionId: 'Telangwadi_Mohol_Solapur_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [75.451858, 17.884624],
        },
      },
      {
        regionId: 'Hatnore_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.759737, 20.215202],
        },
      },
      {
        regionId: 'Palkhed_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.059938, 20.175788],
        },
      },
      {
        regionId: 'Vithalwadi_Palus_Sangli_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.47195, 17.051178],
        },
      },
      {
        regionId: 'Ranwad_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.120656, 20.167138],
        },
      },
      {
        regionId: 'Talegaon Vani_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.938003, 20.278725],
        },
      },
      {
        regionId: 'Ahergaon_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.016555, 20.178866],
        },
      },
      {
        regionId: 'Nashik_Nashik_Nashik_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [73.78980229999999, 19.9974533],
        },
      },
      {
        regionId: 'Sarole Thadi_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.206743, 20.008015],
        },
      },
      {
        regionId: 'Gondegaon_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [73.972167, 20.215381],
        },
      },
      {
        regionId: 'Dahegaon_Nashik_Nashik_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [73.82996, 20.29135],
        },
      },
      {
        regionId: 'Ghodewadi_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [73.878844, 20.247149],
        },
      },
      {
        regionId: 'Dari_Nashik_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.73221, 20.081959],
        },
      },
      {
        regionId: 'Kavalapur_Miraj_Sangli_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.613874, 16.9239348],
        },
      },
      {
        regionId: 'Kurnoli_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.916693, 20.152362],
        },
      },
      {
        regionId: 'Pimpalnare_Chandvad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.2472779, 20.3271277],
        },
      },
      {
        regionId: 'Thengode_Baglan_Nashik_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.193489, 20.530791],
        },
      },
      {
        regionId: 'Palus_Palus_Sangli_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.4496317, 17.097643],
        },
      },
      {
        regionId: 'Ozar_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [73.92611, 20.08734],
        },
      },
      {
        regionId: 'Palkhed_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [73.8713099, 20.1880642],
        },
      },
      {
        regionId: 'Devergaon_Chandvad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.172071, 20.2127173],
        },
      },
      {
        regionId: 'Tasgaon_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.6078344, 17.0295253],
        },
      },
      {
        regionId: 'Tisgaon_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.398148, 20.52333],
        },
      },
      {
        regionId: 'Nandur Madhyameshwar_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.148035, 20.021114],
        },
      },
    ],
    cropId: 'grapes',
    type: 'disease',
    typeId: 'downy_mildew',
  },
  {
    count: 3,
    regions: [
      {
        regionId: 'Ekhatapur_Sangole_Solapur_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.1394925, 17.4645926],
        },
      },
      {
        regionId: 'Dudgaon_Nashik_Nashik_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [73.659691, 19.974383],
        },
      },
      {
        regionId: 'Kavalapur_Miraj_Sangli_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.613874, 16.9239348],
        },
      },
    ],
    cropId: 'grapes',
    type: 'pest',
    typeId: 'red_spider_mites',
  },
  {
    count: 1,
    regions: [
      {
        regionId: 'Anand_Gujarat',
        regionType: 'district',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [72.928871, 22.5645175],
        },
      },
    ],
    cropId: 'capsicum',
    type: 'pest',
    typeId: 'broad_mites',
  },
  {
    count: 47,
    regions: [
      {
        regionId: 'Chinchgaon_Madha_Solapur_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [75.476164, 18.114794],
        },
      },
      {
        regionId: 'Khadki_Tuljapur_Osmanabad_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [76.013862, 17.76305],
        },
      },
      {
        regionId: 'Jugul_Athni_Belgaum_Karnataka',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.714312, 16.629335],
        },
      },
      {
        regionId: 'Wakav_Madha_Solapur_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [75.590436, 17.976299],
        },
      },
      {
        regionId: 'Yamaji Patalachi Wadi_Atpadi_Sangli_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.948094, 17.413234],
        },
      },
      {
        regionId: 'Ratdi_Porbandar_Porbandar_Gujarat',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [69.502103, 21.731675],
        },
      },
      {
        regionId: 'Chale_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [75.436476, 17.687215],
        },
      },
      {
        regionId: 'Surendranagar_Gujarat',
        regionType: 'district',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [71.62, 22.73],
        },
      },
      {
        regionId: 'Karewadi_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [75.595979, 17.039006],
        },
      },
      {
        regionId: 'Khupsangi_Mangalvedhe_Solapur_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [75.356632, 17.415105],
        },
      },
      {
        regionId: 'Darganhalli_Solapur South_Solapur_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.86825689999999, 17.9624924],
        },
      },
      {
        regionId: 'Telangwadi_Mohol_Solapur_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [75.451858, 17.884624],
        },
      },
      {
        regionId: 'Dabwali_Sirsa_Haryana',
        regionType: 'subDistrict',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.64535, 30.023036],
        },
      },
      {
        regionId: 'Sarola_Nepanagar_Burhanpur_Madhya Pradesh',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [76.309583, 21.330737],
        },
      },
      {
        regionId: 'Sindgi_Sindgi_Bijapur_Karnataka',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [76.252438, 16.927031],
        },
      },
      {
        regionId: 'Undargaon_Madha_Solapur_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.573477, 18.003468],
        },
      },
      {
        regionId: 'Tungat_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [75.469146, 17.760851],
        },
      },
      {
        regionId: 'Bardi_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [75.3414, 17.864163],
        },
      },
      {
        regionId: 'Gandhara_Karjan_Vadodara_Gujarat',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.191245, 22.055217],
        },
      },
      {
        regionId: 'Kasegaon_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [75.308966, 17.622019],
        },
      },
      {
        regionId: 'Lavangi_Mangalvedhe_Solapur_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [75.48927, 17.269415],
        },
      },
      {
        regionId: 'Kalvi West_Hadagalli_Bellary_Karnataka',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [75.968474, 15.135135],
        },
      },
      {
        regionId: 'Bhuyane_Baglan_Nashik_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.150863, 20.732837],
        },
      },
      {
        regionId: 'Gheradi_Sangole_Solapur_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [75.28432, 17.25674],
        },
      },
      {
        regionId: 'Sawargaon_Barshi_Solapur_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [75.904659, 18.170242],
        },
      },
      {
        regionId: 'Kurli_Khanapur_Sangli_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.575803, 17.233716],
        },
      },
      {
        regionId: 'Tumbagi_Muddebihal_Bijapur_Karnataka',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [76.286106, 16.579906],
        },
      },
      {
        regionId: 'Vadiya_Nasvadi_Vadodara_Gujarat',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [73.785433, 22.039731],
        },
      },
      {
        regionId: 'Eklaspur_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [75.398962, 17.587668],
        },
      },
      {
        regionId: 'Belanki_Miraj_Sangli_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.872127, 16.860279],
        },
      },
      {
        regionId: 'Loria_Bhuj_Kachchh_Gujarat',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [69.635406, 23.423681],
        },
      },
      {
        regionId: 'Devnal_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [75.24103, 17.02297],
        },
      },
      {
        regionId: 'Sirsa_Haryana',
        regionType: 'district',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.0267312, 29.5374003],
        },
      },
      {
        regionId: 'Nagthane_Palus_Sangli_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.406975, 17.02055],
        },
      },
      {
        regionId: 'Bramhanpade_Baglan_Nashik_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.245627, 20.783443],
        },
      },
      {
        regionId: 'Bijote_Baglan_Nashik_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.199039, 20.731996],
        },
      },
      {
        regionId: 'Khodu_Wadhwan_Surendranagar_Gujarat',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [71.474275, 22.805605],
        },
      },
      {
        regionId: 'Pandharewadi_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [75.331197, 17.818607],
        },
      },
      {
        regionId: 'Guntur_Andhra Pradesh',
        regionType: 'district',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [80.4333, 16.3783],
        },
      },
      {
        regionId: 'Gonda_Uttar Pradesh',
        regionType: 'district',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [81.854366, 27.0658582],
        },
      },
      {
        regionId: 'Anand_Gujarat',
        regionType: 'district',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [72.928871, 22.5645175],
        },
      },
      {
        regionId: 'Yelmar Mangewadi_Sangole_Solapur_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [75.106008, 17.400261],
        },
      },
      {
        regionId: 'Loni_Burhanpur_Burhanpur_Madhya Pradesh',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [76.163701, 21.284294],
        },
      },
      {
        regionId: 'Jesapura Mithapura_Thasra_Kheda_Gujarat',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [73.205575, 22.67697],
        },
      },
      {
        regionId: 'Antroli_Solapur South_Solapur_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.86825689999999, 17.9624924],
        },
      },
      {
        regionId: 'Akolekati_Solapur North_Solapur_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.851259, 17.785157],
        },
      },
      {
        regionId: 'Kamalapur_Sangole_Solapur_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [75.129545, 17.400066],
        },
      },
    ],
    cropId: 'greenchilli',
    type: 'pest',
    typeId: 'broad_mites',
  },
  {
    count: 1,
    regions: [
      {
        regionId: 'Krishnagiri_Tamil Nadu',
        regionType: 'district',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [78.2317, 12.3933],
        },
      },
    ],
    cropId: 'pomegranate',
    type: 'pest',
    typeId: 'mealybug',
  },
  {
    count: 16,
    regions: [
      {
        regionId: 'Ladud_Baglan_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.186746, 20.7732155],
        },
      },
      {
        regionId: 'Kasbe Vani_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [73.886929, 20.328891],
        },
      },
      {
        regionId: 'Kadawa Mhalungi_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [73.792171, 20.246876],
        },
      },
      {
        regionId: 'Shindwad_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [73.987961, 20.247229],
        },
      },
      {
        regionId: 'Khadakjamb_Chandvad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.077194, 20.249008],
        },
      },
      {
        regionId: 'Kavalapur_Miraj_Sangli_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.613874, 16.9239348],
        },
      },
      {
        regionId: 'Pimpri Anchala_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [73.822975, 20.400579],
        },
      },
      {
        regionId: 'Kurnoli_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.916693, 20.152362],
        },
      },
      {
        regionId: 'Mukhed_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [73.977724, 20.201952],
        },
      },
      {
        regionId: 'Pimpalnare_Chandvad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.2472779, 20.3271277],
        },
      },
      {
        regionId: 'Tisgaon_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.398148, 20.52333],
        },
      },
      {
        regionId: 'Talegaon Vani_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [73.938003, 20.278725],
        },
      },
      {
        regionId: 'Sapar Timbo_Bhuj_Kachchh_Gujarat',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [69.659063, 23.127809],
        },
      },
      {
        regionId: 'Dari_Nashik_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.73221, 20.081959],
        },
      },
      {
        regionId: 'Dudhkhede_Chandvad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.692277, 21.423423],
        },
      },
      {
        regionId: 'Hatnore_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.759737, 20.215202],
        },
      },
    ],
    cropId: 'pomegranate',
    type: 'pest',
    typeId: 'thrips',
  },
  {
    count: 9,
    regions: [
      {
        regionId: 'Ladud_Baglan_Nashik_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.186746, 20.7732155],
        },
      },
      {
        regionId: 'Gandasi_Arsikere_Hassan_Karnataka',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [76.301671, 13.165906],
        },
      },
      {
        regionId: 'Lakhamapur_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [73.831052, 20.286803],
        },
      },
      {
        regionId: 'Dari_Nashik_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.73221, 20.081959],
        },
      },
      {
        regionId: 'Kavalapur_Miraj_Sangli_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.613874, 16.9239348],
        },
      },
      {
        regionId: 'Jamuniya_Ratlam_Ratlam_Madhya Pradesh',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [75.1514, 23.1961],
        },
      },
      {
        regionId: 'Mukhed_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [73.977724, 20.201952],
        },
      },
      {
        regionId: 'Hatnore_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.759737, 20.215202],
        },
      },
      {
        regionId: 'Kurnoli_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [73.916693, 20.152362],
        },
      },
    ],
    cropId: 'tomato',
    type: 'pest',
    typeId: 'white_fly',
  },
  {
    count: 81,
    regions: [
      {
        regionId: 'Teja Khera_Dabwali_Sirsa_Haryana',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.566283, 29.82958],
        },
      },
      {
        regionId: '58 Np_Raisinghnagar_Ganganagar_Rajasthan',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.433657, 29.410873],
        },
      },
      {
        regionId: 'Sherewala_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.162714, 29.974211],
        },
      },
      {
        regionId: 'Roherianwali_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.208211, 30.201005],
        },
      },
      {
        regionId: 'Karod_Uchchhal_Tapi_Gujarat',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [73.942167, 21.295102],
        },
      },
      {
        regionId: 'Mehna_Malout_Muktsar_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.6746, 30.0829],
        },
      },
      {
        regionId: 'Amravati_Amravati_Amravati_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [77.7814, 20.9453],
        },
      },
      {
        regionId: 'Chorwad_Raver_Jalgaon_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [76.134713, 21.281147],
        },
      },
      {
        regionId: 'Khatwan_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.17757499999999, 30.0092903],
        },
      },
      {
        regionId: 'Haripar_Lalpur_Jamnagar_Gujarat',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [70.017377, 22.293025],
        },
      },
      {
        regionId: 'Kalan Wali_Sirsa_Sirsa_Haryana',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.98462, 29.795018],
        },
      },
      {
        regionId: '1 Y_Ganganagar_Ganganagar_Rajasthan',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.896483, 29.960941],
        },
      },
      {
        regionId: 'Patti Amra Urf Patti Sadiq_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.1056435, 29.9919978],
        },
      },
      {
        regionId: 'Lunasar_Wankaner_Rajkot_Gujarat',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [71.128826, 22.662951],
        },
      },
      {
        regionId: 'Sanosara_Bhuj_Kachchh_Gujarat',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [69.719357, 23.130993],
        },
      },
      {
        regionId: 'Mankuva_Bhuj_Kachchh_Gujarat',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [69.572115, 23.21201],
        },
      },
      {
        regionId: 'Gandher_Bhuj_Kachchh_Gujarat',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [69.859927, 23.184744],
        },
      },
      {
        regionId: 'Khodu_Wadhwan_Surendranagar_Gujarat',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [71.474275, 22.805605],
        },
      },
      {
        regionId: 'Mangvana_Nakhatrana_Kachchh_Gujarat',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [69.356104, 23.216791],
        },
      },
      {
        regionId: 'Bhagsar_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.287855, 30.039395],
        },
      },
      {
        regionId: 'Borsar_Vaijapur_Aurangabad_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.869968, 19.999234],
        },
      },
      {
        regionId: 'Dubal_Kaithal_Kaithal_Haryana',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [76.4, 29.78],
        },
      },
      {
        regionId: 'Godhra_Mandvi_Kachchh_Gujarat',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [69.2663751, 22.9181754],
        },
      },
      {
        regionId: '4 KSP_Tibi_Hanumangarh_Rajasthan',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.44818, 29.50403],
        },
      },
      {
        regionId: 'Wahabwala_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.197204, 30.017152],
        },
      },
      {
        regionId: 'Halvad_Halvad_Surendranagar_Gujarat',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [71.1823868, 23.013705],
        },
      },
      {
        regionId: 'Tarhadi Tarf Tarhad_Shirpur_Dhule_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.7035279, 21.4154095],
        },
      },
      {
        regionId: 'Banwala_Dabwali_Sirsa_Haryana',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.849434, 29.680374],
        },
      },
      {
        regionId: 'Paniwala Mahla_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.961514, 30.002457],
        },
      },
      {
        regionId: 'Waryam Khera_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.070218, 30.012073],
        },
      },
      {
        regionId: 'Manjal_Nakhatrana_Kachchh_Gujarat',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [69.423829, 23.20042],
        },
      },
      {
        regionId: 'Tappar_Mundra_Kachchh_Gujarat',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [69.649197, 22.987053],
        },
      },
      {
        regionId: 'Sukchain_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.3563646, 30.0400849],
        },
      },
      {
        regionId: 'Rajpar_Mandvi_Kachchh_Gujarat',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [69.380212, 23.093156],
        },
      },
      {
        regionId: 'Kotda Jadodar_Nakhatrana_Kachchh_Gujarat',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [69.22767, 23.335328],
        },
      },
      {
        regionId: 'Kakadbhit_Nakhatrana_Kachchh_Gujarat',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [69.357221, 23.275158],
        },
      },
      {
        regionId: 'Sihol_Palwal_Palwal_Haryana',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [77.425731, 28.130272],
        },
      },
      {
        regionId: 'Pokhari_Bid_Bid_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [75.483991, 18.8067254],
        },
      },
      {
        regionId: 'Thasra_Thasra_Kheda_Gujarat',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.22, 22.8],
        },
      },
      {
        regionId: 'Morgar_Nakhatrana_Kachchh_Gujarat',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [69.335667, 23.255647],
        },
      },
      {
        regionId: '3 R_Karanpur_Ganganagar_Rajasthan',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.691329, 29.982239],
        },
      },
      {
        regionId: 'Jesapura Mithapura_Thasra_Kheda_Gujarat',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.205575, 22.67697],
        },
      },
      {
        regionId: 'Jalgaon_Jalna_Jalna_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [76.1581, 20.5238],
        },
      },
      {
        regionId: 'Deshalpar_Nakhatrana_Kachchh_Gujarat',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [69.170599, 23.472925],
        },
      },
      {
        regionId: 'Bhanger Khera_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.993104, 30.008847],
        },
      },
      {
        regionId: 'Daulatpur_Hisar_Hisar_Haryana',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.85975, 29.446465],
        },
      },
      {
        regionId: 'Vadiya_Nasvadi_Vadodara_Gujarat',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.785433, 22.039731],
        },
      },
      {
        regionId: 'Lathi_Lathi_Amreli_Gujarat',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [71.420474, 21.727768],
        },
      },
      {
        regionId: 'Devpar_Nakhatrana_Kachchh_Gujarat',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [69.331521, 23.300389],
        },
      },
      {
        regionId: 'Vehar_Nakhatrana_Kachchh_Gujarat',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [69.209548, 23.32406],
        },
      },
      {
        regionId: 'Himatpura_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.379222, 29.994402],
        },
      },
      {
        regionId: 'Ram Nagaria_Sirsa_Sirsa_Haryana',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.99712, 29.497551],
        },
      },
      {
        regionId: '25 Ps-A_Raisinghnagar_Ganganagar_Rajasthan',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.436621, 29.538672],
        },
      },
      {
        regionId: 'Latur_Latur_Latur_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [76.56, 18.4],
        },
      },
      {
        regionId: 'Sarli_Bhuj_Kachchh_Gujarat',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [69.479758, 23.089054],
        },
      },
      {
        regionId: 'Ghordadi_Sengaon_Hingoli_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [76.698706, 19.848949],
        },
      },
      {
        regionId: 'Nuhiyan Wali_Dabwali_Sirsa_Haryana',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.867709, 29.719612],
        },
      },
      {
        regionId: 'Nikoli_Valia_Bharuch_Gujarat',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.2418, 21.510589],
        },
      },
      {
        regionId: 'Barwala_Hisar_Hisar_Haryana',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.910575, 29.3425],
        },
      },
      {
        regionId: '14 Eea_Padampur_Ganganagar_Rajasthan',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.71924038983296, 29.68920239715808],
        },
      },
      {
        regionId: 'Sapar Timbo_Bhuj_Kachchh_Gujarat',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [69.659063, 23.127809],
        },
      },
      {
        regionId: 'Kasalwadi_Pathardi_Ahmadnagar_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [75.0699, 19.1907],
        },
      },
      {
        regionId: 'Umbarwadi_Gangakhed_Parbhani_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [76.852817, 18.832449],
        },
      },
      {
        regionId: 'Pabra_Hisar_Hisar_Haryana',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.815444, 29.457303],
        },
      },
      {
        regionId: 'Vithon_Nakhatrana_Kachchh_Gujarat',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [69.349772, 23.311407],
        },
      },
      {
        regionId: 'Dodewala_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.252963, 29.970826],
        },
      },
      {
        regionId: 'Jhurar Khera_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.13493, 29.99351],
        },
      },
      {
        regionId: 'Kanakpar_Abdasa_Kachchh_Gujarat',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [69.119934, 23.202811],
        },
      },
      {
        regionId: 'Karanji_Pathardi_Ahmadnagar_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.99429, 19.1192],
        },
      },
      {
        regionId: 'Umreth_Umreth_Anand_Gujarat',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.1132661, 22.6923341],
        },
      },
      {
        regionId: 'Kuntalpur_Muli_Surendranagar_Gujarat',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [71.319832, 22.786744],
        },
      },
      {
        regionId: 'Gandhara_Karjan_Vadodara_Gujarat',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.191245, 22.055217],
        },
      },
      {
        regionId: 'Bandhara Nana_Bhuj_Kachchh_Gujarat',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [69.75308, 23.096905],
        },
      },
      {
        regionId: 'Patrewala_Fazilka_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.079763, 30.195685],
        },
      },
      {
        regionId: 'Loria_Bhuj_Kachchh_Gujarat',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [69.635406, 23.423681],
        },
      },
      {
        regionId: 'Rupnagar_Fazilka_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.002566, 30.211329],
        },
      },
      {
        regionId: 'Jamalpur Shekhan_Tohana_Fatehabad_Haryana',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.83735, 29.7088],
        },
      },
      {
        regionId: 'Shergarh_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.061039, 30.004959],
        },
      },
      {
        regionId: 'Ratdi_Porbandar_Porbandar_Gujarat',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [69.502103, 21.731675],
        },
      },
      {
        regionId: 'Saiyedpar_Bhuj_Kachchh_Gujarat',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [69.851737, 23.191129],
        },
      },
      {
        regionId: 'Maan_Malout_Muktsar_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.6746, 30.0829],
        },
      },
    ],
    cropId: 'cotton',
    type: 'pest',
    typeId: 'mealybug',
  },
  {
    count: 1,
    regions: [
      {
        regionId: 'Bhuj_Bhuj_Kachchh_Gujarat',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [69.6667, 23.25],
        },
      },
    ],
    cropId: 'banana',
    type: 'pest',
    typeId: 'rust_thrips',
  },
  {
    count: 1,
    regions: [
      {
        regionId: 'Dahegaon_Nashik_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.82996, 20.29135],
        },
      },
    ],
    cropId: 'blueberry',
    type: 'pest',
    typeId: 'aphids',
  },
  {
    count: 2,
    regions: [
      {
        regionId: 'Manlo_Shupiyan_Shupiyan_Jammu and Kashmir',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.826405, 33.75451],
        },
      },
      {
        regionId: 'Silana-II_Kotkhai_Shimla_Himachal Pradesh',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [77.585664, 31.092442],
        },
      },
    ],
    cropId: 'apple',
    type: 'disease',
    typeId: 'apple_scab',
  },
  {
    count: 1,
    regions: [
      {
        regionId: 'Sopore_Sopore_Baramula_Jammu and Kashmir',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.4945, 34.22812],
        },
      },
    ],
    cropId: 'apple',
    type: 'pest',
    typeId: 'scale_insects',
  },
  {
    count: 98,
    regions: [
      {
        regionId: 'Rajapur_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [73.888031, 20.22126],
        },
      },
      {
        regionId: 'Rasalpur_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.10931409999999, 20.0799646],
        },
      },
      {
        regionId: 'Sawatamalinagar_Sinnar_Nashik_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [73.866716, 19.818527],
        },
      },
      {
        regionId: 'Karanje_Khanapur_Sangli_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.763149, 17.234952],
        },
      },
      {
        regionId: 'Chinchkhed_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.9301037, 20.1704231],
        },
      },
      {
        regionId: 'Tasgaon_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.6078344, 17.0295253],
        },
      },
      {
        regionId: 'Savalaj_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.76589179999999, 17.1106264],
        },
      },
      {
        regionId: 'Savarde_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.6872515, 17.0624211],
        },
      },
      {
        regionId: 'Chinchani_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.63986, 17.070231],
        },
      },
      {
        regionId: 'Sarole Thadi_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.206743, 20.008015],
        },
      },
      {
        regionId: 'Arag_Miraj_Sangli_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.808491, 16.782249],
        },
      },
      {
        regionId: 'Khedgaon_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [73.9565551, 20.2394181],
        },
      },
      {
        regionId: 'Hatnore_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.759737, 20.215202],
        },
      },
      {
        regionId: 'Kasabe Sukene_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.0138541, 20.0784069],
        },
      },
      {
        regionId: 'Siddhewadi_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.777411, 17.136483],
        },
      },
      {
        regionId: 'Lonwadi_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.0289106, 20.1618864],
        },
      },
      {
        regionId: 'Mungsare_Nashik_Nashik_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [73.722436, 20.059675],
        },
      },
      {
        regionId: 'Bopegaon_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [73.938447, 20.218671],
        },
      },
      {
        regionId: 'Ambedindori_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [73.863408, 20.122448],
        },
      },
      {
        regionId: 'Amanapur_Palus_Sangli_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.454211, 17.05153],
        },
      },
      {
        regionId: 'Umarani_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [75.2362381, 16.9014483],
        },
      },
      {
        regionId: 'Palashe_Nashik_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.878476, 19.924019],
        },
      },
      {
        regionId: 'Wavi_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.080553, 20.20566],
        },
      },
      {
        regionId: 'Manerajuri_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.695479, 17.014179],
        },
      },
      {
        regionId: 'Vadner Bhairao_Chandvad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.031395, 20.260168],
        },
      },
      {
        regionId: 'Jaulakedindori_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [73.90126, 20.061645],
        },
      },
      {
        regionId: 'Khadak Sukene_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.907507, 20.173918],
        },
      },
      {
        regionId: 'Mavadi_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [73.930388, 20.312127],
        },
      },
      {
        regionId: 'Korhate_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [73.867451, 20.162221],
        },
      },
      {
        regionId: 'Vinchurgavali_Nashik_Nashik_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [73.8846, 20.0246],
        },
      },
      {
        regionId: 'Ugaon_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.127483, 20.126669],
        },
      },
      {
        regionId: 'Pimpri_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.0649, 20.10161],
        },
      },
      {
        regionId: 'Kasbe Vani_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.886929, 20.328891],
        },
      },
      {
        regionId: 'Jarandi_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.847037, 17.174991],
        },
      },
      {
        regionId: 'Bhose_Miraj_Sangli_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.744722, 16.965333],
        },
      },
      {
        regionId: 'Nashik_Nashik_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.78980229999999, 19.9974533],
        },
      },
      {
        regionId: 'Gondegaon_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.972167, 20.215381],
        },
      },
      {
        regionId: 'Vadalibhoi_Chandvad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.088941, 20.262397],
        },
      },
      {
        regionId: 'Dhondgavhan_Chandvad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.0046727, 20.2203949],
        },
      },
      {
        regionId: 'Bhairvawadi_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.660353, 17.078992],
        },
      },
      {
        regionId: 'Gitakunj_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.083054, 20.106509],
        },
      },
      {
        regionId: 'Kundal_Palus_Sangli_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.411341, 17.11492],
        },
      },
      {
        regionId: 'Pachorewani_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.025422, 20.202973],
        },
      },
      {
        regionId: 'Vita_Khanapur_Sangli_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.53571269999999, 17.2751726],
        },
      },
      {
        regionId: 'Pimpri Anchala_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [73.822975, 20.400579],
        },
      },
      {
        regionId: 'Manori Kh._Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.10931409999999, 20.0799646],
        },
      },
      {
        regionId: 'Shivadi_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.127483, 20.119796],
        },
      },
      {
        regionId: 'Niphad_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.10931409999999, 20.0799646],
        },
      },
      {
        regionId: 'Jaikheda_Baglan_Nashik_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.204758, 20.792035],
        },
      },
      {
        regionId: 'Ranwad_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.120656, 20.167138],
        },
      },
      {
        regionId: 'Ozar_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [73.92611, 20.08734],
        },
      },
      {
        regionId: 'Khanapur_Khanapur_Sangli_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.71761210000001, 17.2636096],
        },
      },
      {
        regionId: 'Mauje Sukene_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.0138541, 20.0784069],
        },
      },
      {
        regionId: 'Behed_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.0017, 20.1565],
        },
      },
      {
        regionId: 'Balvadi_Khanapur_Sangli_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.723282, 17.288316],
        },
      },
      {
        regionId: 'Kumathe_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.64901, 16.963863],
        },
      },
      {
        regionId: 'Dudgaon_Nashik_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.659691, 19.974383],
        },
      },
      {
        regionId: 'Antarweli_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [73.969963, 20.204328],
        },
      },
      {
        regionId: 'Pimpri Sayyad_Nashik_Nashik_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [73.926071, 20.047016],
        },
      },
      {
        regionId: 'Khadakjamb_Chandvad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.077194, 20.249008],
        },
      },
      {
        regionId: 'Palkhed_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [73.8713099, 20.1880642],
        },
      },
      {
        regionId: 'Mukhed_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [73.977724, 20.201952],
        },
      },
      {
        regionId: 'Anjani_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.7777832, 17.0841203],
        },
      },
      {
        regionId: 'Raulas_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.0649, 20.10161],
        },
      },
      {
        regionId: 'Nanegaon_Nashik_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.862306, 19.888923],
        },
      },
      {
        regionId: 'Talegaon Vani_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [73.938003, 20.278725],
        },
      },
      {
        regionId: 'Vithalwadi_Palus_Sangli_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.47195, 17.051178],
        },
      },
      {
        regionId: 'Khandobachiwadi_Palus_Sangli_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.50334522659423, 16.997711184875463],
        },
      },
      {
        regionId: 'Pimpalnare_Chandvad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.2472779, 20.3271277],
        },
      },
      {
        regionId: 'Dudhkhede_Chandvad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.692277, 21.423423],
        },
      },
      {
        regionId: 'Tisgaon_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.398148, 20.52333],
        },
      },
      {
        regionId: 'Vadali Najik_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.023035, 20.1273487],
        },
      },
      {
        regionId: 'Dindori_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [73.8272029, 20.2041657],
        },
      },
      {
        regionId: 'Palashi_Khanapur_Sangli_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.81568659999999, 17.2201143],
        },
      },
      {
        regionId: 'Narayan Tembhi_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.019586, 20.142225],
        },
      },
      {
        regionId: 'Ahergaon_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.016555, 20.178866],
        },
      },
      {
        regionId: 'Bedag_Miraj_Sangli_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.750349, 16.79725],
        },
      },
      {
        regionId: 'Redgaon_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.086739, 20.208289],
        },
      },
      {
        regionId: 'Ashta_Walwa_Sangli_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.425999, 16.945666],
        },
      },
      {
        regionId: 'Benapur_Khanapur_Sangli_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.757298, 17.245646],
        },
      },
      {
        regionId: 'Pimpalgaon Baswant_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [73.9879323, 20.1654012],
        },
      },
      {
        regionId: 'Shindwad_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.987961, 20.247229],
        },
      },
      {
        regionId: 'Shirwade Wani_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.05228, 20.21573],
        },
      },
      {
        regionId: 'Gavhan_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.767172, 17.062042],
        },
      },
      {
        regionId: 'Khede_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.114269, 20.087111],
        },
      },
      {
        regionId: 'Jondhalkhindi_Khanapur_Sangli_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.618266, 17.32364],
        },
      },
      {
        regionId: 'Lokhandewadi_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [73.9058534, 20.1992494],
        },
      },
      {
        regionId: 'Saptashrungagad_Kalwan_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.908977, 20.390267],
        },
      },
      {
        regionId: 'Santoshwadi_Miraj_Sangli_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.870388, 16.837687],
        },
      },
      {
        regionId: 'Deopur_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.079995, 20.125607],
        },
      },
      {
        regionId: 'Gardi_Khanapur_Sangli_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.545047, 17.285561],
        },
      },
      {
        regionId: 'Lengre_Khanapur_Sangli_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.631809, 17.329731],
        },
      },
      {
        regionId: 'Karanjgaon_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.062141, 20.007462],
        },
      },
      {
        regionId: 'Ladud_Baglan_Nashik_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.186746, 20.7732155],
        },
      },
      {
        regionId: 'Bahaduri_Chandvad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.9738201, 20.2855097],
        },
      },
      {
        regionId: 'Walwa_Walwa_Sangli_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.359664, 17.030863],
        },
      },
      {
        regionId: 'Devikhindi_Khanapur_Sangli_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.648277, 17.380994],
        },
      },
      {
        regionId: 'Kadawa Mhalungi_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.792171, 20.246876],
        },
      },
    ],
    cropId: 'brinjal',
    type: 'disease',
    typeId: 'leaf_spot',
  },
  {
    count: 8,
    regions: [
      {
        regionId: 'Alur_Indi_Bijapur_Karnataka',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [75.97178, 17.24365],
        },
      },
      {
        regionId: 'Kurnoli_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [73.916693, 20.152362],
        },
      },
      {
        regionId: 'Guntur_Andhra Pradesh',
        regionType: 'district',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [80.4333, 16.3783],
        },
      },
      {
        regionId: 'Santoshwadi_Miraj_Sangli_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.870388, 16.837687],
        },
      },
      {
        regionId: 'Kengalagutti_Bijapur_Bijapur_Karnataka',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [75.507502, 16.504505],
        },
      },
      {
        regionId: 'Deopur_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.079995, 20.125607],
        },
      },
      {
        regionId: 'Pandhurli_Sinnar_Nashik_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [73.8601, 19.829837],
        },
      },
      {
        regionId: 'Nagthane_Palus_Sangli_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.406975, 17.02055],
        },
      },
    ],
    cropId: 'grapes',
    type: 'pest',
    typeId: 'caterpillar',
  },
  {
    count: 1,
    regions: [
      {
        regionId: 'Bhuj_Bhuj_Kachchh_Gujarat',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [69.6667, 23.25],
        },
      },
    ],
    cropId: 'cotton',
    type: 'pest',
    typeId: 'white_fly',
  },
  {
    count: 1,
    regions: [
      {
        regionId: 'Jamalpur Shekhan_Tohana_Fatehabad_Haryana',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.83735, 29.7088],
        },
      },
    ],
    cropId: 'banana',
    type: 'pest',
    typeId: 'aphids',
  },
  {
    count: 3,
    regions: [
      {
        regionId: 'Jamalpur Shekhan_Tohana_Fatehabad_Haryana',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.83735, 29.7088],
        },
      },
      {
        regionId: 'Anand_Gujarat',
        regionType: 'district',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [72.928871, 22.5645175],
        },
      },
      {
        regionId: 'Bhuj_Bhuj_Kachchh_Gujarat',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [69.6667, 23.25],
        },
      },
    ],
    cropId: 'banana',
    type: 'disease',
    typeId: 'sigatoka_leaf_spot',
  },
  {
    count: 18,
    regions: [
      {
        regionId: 'Talegaon Vani_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [73.938003, 20.278725],
        },
      },
      {
        regionId: 'Bhose_Miraj_Sangli_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.744722, 16.965333],
        },
      },
      {
        regionId: 'Shivare_Chandvad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.2472779, 20.3271277],
        },
      },
      {
        regionId: 'Anjani_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.7777832, 17.0841203],
        },
      },
      {
        regionId: 'Saptashrungagad_Kalwan_Nashik_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [73.908977, 20.390267],
        },
      },
      {
        regionId: 'Thengode_Baglan_Nashik_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.193489, 20.530791],
        },
      },
      {
        regionId: 'Kurnoli_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [73.916693, 20.152362],
        },
      },
      {
        regionId: 'Gavhan_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.767172, 17.062042],
        },
      },
      {
        regionId: 'Bopegaon_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.938447, 20.218671],
        },
      },
      {
        regionId: 'Manerajuri_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.695479, 17.014179],
        },
      },
      {
        regionId: 'Khadakjamb_Chandvad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.077194, 20.249008],
        },
      },
      {
        regionId: 'Dudhkhede_Chandvad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.692277, 21.423423],
        },
      },
      {
        regionId: 'Mavadi_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [73.930388, 20.312127],
        },
      },
      {
        regionId: 'Kadawa Mhalungi_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.792171, 20.246876],
        },
      },
      {
        regionId: 'Pimpalnare_Chandvad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.2472779, 20.3271277],
        },
      },
      {
        regionId: 'Tisgaon_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.398148, 20.52333],
        },
      },
      {
        regionId: 'Pimpri Anchala_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [73.822975, 20.400579],
        },
      },
      {
        regionId: 'Hatnore_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.759737, 20.215202],
        },
      },
    ],
    cropId: 'grapes',
    type: 'disease',
    typeId: 'anthracnose',
  },
  {
    count: 8,
    regions: [
      {
        regionId: 'Nampur_Baglan_Nashik_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.3109045, 20.7264993],
        },
      },
      {
        regionId: 'Bramhangaon Vinchur_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.2526, 20.1343],
        },
      },
      {
        regionId: 'Kavalapur_Miraj_Sangli_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.613874, 16.9239348],
        },
      },
      {
        regionId: 'Kurnoli_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [73.916693, 20.152362],
        },
      },
      {
        regionId: 'Bhuyane_Baglan_Nashik_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.150863, 20.732837],
        },
      },
      {
        regionId: 'Dari_Nashik_Nashik_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [73.73221, 20.081959],
        },
      },
      {
        regionId: 'Dahegaon_Nashik_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.82996, 20.29135],
        },
      },
      {
        regionId: 'Akolekati_Solapur North_Solapur_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.851259, 17.785157],
        },
      },
    ],
    cropId: 'pomegranate',
    type: 'pest',
    typeId: 'aphids',
  },
  {
    count: 2,
    regions: [
      {
        regionId: 'Gonda_Uttar Pradesh',
        regionType: 'district',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [81.854366, 27.0658582],
        },
      },
      {
        regionId: 'Firozpur_Punjab',
        regionType: 'district',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.622, 30.933],
        },
      },
    ],
    cropId: 'guava',
    type: 'disease',
    typeId: 'stylar_end_rot',
  },
  {
    count: 1,
    regions: [
      {
        regionId: 'Gonda_Uttar Pradesh',
        regionType: 'district',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [81.854366, 27.0658582],
        },
      },
    ],
    cropId: 'guava',
    type: 'disease',
    typeId: 'anthracnose',
  },
  {
    count: 9,
    regions: [
      {
        regionId: 'Halvad_Halvad_Surendranagar_Gujarat',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [71.1823868, 23.013705],
        },
      },
      {
        regionId: 'Teja Khera_Dabwali_Sirsa_Haryana',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.566283, 29.82958],
        },
      },
      {
        regionId: 'Jamuniya_Ratlam_Ratlam_Madhya Pradesh',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [75.1514, 23.1961],
        },
      },
      {
        regionId: 'Sihol_Palwal_Palwal_Haryana',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [77.425731, 28.130272],
        },
      },
      {
        regionId: 'Bhasner_Khargone_West Nimar_Madhya Pradesh',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.599894, 21.769016],
        },
      },
      {
        regionId: 'Ratdi_Porbandar_Porbandar_Gujarat',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [69.502103, 21.731675],
        },
      },
      {
        regionId: 'Ratagarh_Nepanagar_Burhanpur_Madhya Pradesh',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [76.35993, 21.437013],
        },
      },
      {
        regionId: 'Barwala_Hisar_Hisar_Haryana',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.910575, 29.3425],
        },
      },
      {
        regionId: 'Hazaribagh_Jharkhand',
        regionType: 'district',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [85.3885, 24.0171],
        },
      },
    ],
    cropId: 'cucumber',
    type: 'disease',
    typeId: 'downy_mildew',
  },
  {
    count: 2,
    regions: [
      {
        regionId: 'Daulatpur_Hisar_Hisar_Haryana',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [75.85975, 29.446465],
        },
      },
      {
        regionId: 'Himatpura_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.379222, 29.994402],
        },
      },
    ],
    cropId: 'kinnow',
    type: 'pest',
    typeId: 'thrips',
  },
  {
    count: 27,
    regions: [
      {
        regionId: 'Patti Amra Urf Patti Sadiq_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.1056435, 29.9919978],
        },
      },
      {
        regionId: 'Roherianwali_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.208211, 30.201005],
        },
      },
      {
        regionId: '3 R_Karanpur_Ganganagar_Rajasthan',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [73.691329, 29.982239],
        },
      },
      {
        regionId: 'Patrewala_Fazilka_Firozpur_Punjab',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.079763, 30.195685],
        },
      },
      {
        regionId: 'Dodewala_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.252963, 29.970826],
        },
      },
      {
        regionId: 'Sihol_Palwal_Palwal_Haryana',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [77.425731, 28.130272],
        },
      },
      {
        regionId: 'Daulatpur_Hisar_Hisar_Haryana',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [75.85975, 29.446465],
        },
      },
      {
        regionId: 'Paniwala Mahla_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [73.961514, 30.002457],
        },
      },
      {
        regionId: '4 KSP_Tibi_Hanumangarh_Rajasthan',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.44818, 29.50403],
        },
      },
      {
        regionId: 'Jamalpur Shekhan_Tohana_Fatehabad_Haryana',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.83735, 29.7088],
        },
      },
      {
        regionId: 'Khatwan_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.17757499999999, 30.0092903],
        },
      },
      {
        regionId: '1 Y_Ganganagar_Ganganagar_Rajasthan',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [73.896483, 29.960941],
        },
      },
      {
        regionId: 'Bhagsar_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.287855, 30.039395],
        },
      },
      {
        regionId: 'Waryam Khera_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.070218, 30.012073],
        },
      },
      {
        regionId: 'Mehna_Malout_Muktsar_Punjab',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.6746, 30.0829],
        },
      },
      {
        regionId: 'Shergarh_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.061039, 30.004959],
        },
      },
      {
        regionId: 'Sukchain_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.3563646, 30.0400849],
        },
      },
      {
        regionId: 'Sherewala_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.162714, 29.974211],
        },
      },
      {
        regionId: 'Himatpura_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.379222, 29.994402],
        },
      },
      {
        regionId: 'Pabra_Hisar_Hisar_Haryana',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.815444, 29.457303],
        },
      },
      {
        regionId: 'Nuhiyan Wali_Dabwali_Sirsa_Haryana',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.867709, 29.719612],
        },
      },
      {
        regionId: '14 Eea_Padampur_Ganganagar_Rajasthan',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [73.71924038983296, 29.68920239715808],
        },
      },
      {
        regionId: 'Banwala_Dabwali_Sirsa_Haryana',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.849434, 29.680374],
        },
      },
      {
        regionId: 'Jhurar Khera_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.13493, 29.99351],
        },
      },
      {
        regionId: 'Bhanger Khera_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [73.993104, 30.008847],
        },
      },
      {
        regionId: 'Wahabwala_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.197204, 30.017152],
        },
      },
      {
        regionId: 'Teja Khera_Dabwali_Sirsa_Haryana',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.566283, 29.82958],
        },
      },
    ],
    cropId: 'kinnow',
    type: 'pest',
    typeId: 'mites',
  },
  {
    count: 105,
    regions: [
      {
        regionId: 'Upale_Barshi_Solapur_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [75.885891, 18.125079],
        },
      },
      {
        regionId: 'Rajuri_Sangole_Solapur_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [75.09881, 17.307824],
        },
      },
      {
        regionId: 'Manerajuri_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.695479, 17.014179],
        },
      },
      {
        regionId: 'Wavi_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.080553, 20.20566],
        },
      },
      {
        regionId: 'Motewadi_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.646609, 16.969631],
        },
      },
      {
        regionId: 'Shivadi_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.127483, 20.119796],
        },
      },
      {
        regionId: 'Deopur_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.079995, 20.125607],
        },
      },
      {
        regionId: 'Tungat_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.469146, 17.760851],
        },
      },
      {
        regionId: 'Kanthi_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [75.151802, 17.057597],
        },
      },
      {
        regionId: 'Jainwadi_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [75.144837, 17.665446],
        },
      },
      {
        regionId: 'Kasegaon_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.308966, 17.622019],
        },
      },
      {
        regionId: 'Devikhindi_Khanapur_Sangli_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.648277, 17.380994],
        },
      },
      {
        regionId: 'Vadali Najik_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.023035, 20.1273487],
        },
      },
      {
        regionId: 'Pandharewadi_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.331197, 17.818607],
        },
      },
      {
        regionId: 'Gondegaon_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [73.972167, 20.215381],
        },
      },
      {
        regionId: 'Chinchgaon_Madha_Solapur_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [75.476164, 18.114794],
        },
      },
      {
        regionId: 'Vadalibhoi_Chandvad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.088941, 20.262397],
        },
      },
      {
        regionId: 'Bhairvawadi_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.660353, 17.078992],
        },
      },
      {
        regionId: 'Kundal_Palus_Sangli_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.411341, 17.11492],
        },
      },
      {
        regionId: 'Ravalgundwadi_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [75.305029, 16.990991],
        },
      },
      {
        regionId: 'Khandobachiwadi_Palus_Sangli_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.50334522659423, 16.997711184875463],
        },
      },
      {
        regionId: 'Darganhalli_Solapur South_Solapur_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.86825689999999, 17.9624924],
        },
      },
      {
        regionId: 'Lamantanda_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.4752537, 16.9591421],
        },
      },
      {
        regionId: 'Ozar_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [73.92611, 20.08734],
        },
      },
      {
        regionId: 'Benapur_Khanapur_Sangli_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.757298, 17.245646],
        },
      },
      {
        regionId: 'Dhondgavhan_Chandvad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.0046727, 20.2203949],
        },
      },
      {
        regionId: 'Mangalvedha_Mangalvedhe_Solapur_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [75.432834, 17.524535],
        },
      },
      {
        regionId: 'Sawatawadi_Malegaon_Nashik_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.5139188, 20.5650788],
        },
      },
      {
        regionId: 'Ambedindori_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [73.863408, 20.122448],
        },
      },
      {
        regionId: 'Khede_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.114269, 20.087111],
        },
      },
      {
        regionId: 'Kumbhari_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.114219, 17.109476],
        },
      },
      {
        regionId: 'Lokhandewadi_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [73.9058534, 20.1992494],
        },
      },
      {
        regionId: 'Nashik_Nashik_Nashik_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [73.78980229999999, 19.9974533],
        },
      },
      {
        regionId: 'Bhandi Shegaon_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.233503, 17.703954],
        },
      },
      {
        regionId: 'Bedag_Miraj_Sangli_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.750349, 16.79725],
        },
      },
      {
        regionId: 'Devnal_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [75.24103, 17.02297],
        },
      },
      {
        regionId: 'Ahergaon_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.016555, 20.178866],
        },
      },
      {
        regionId: 'Karanjgaon_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.062141, 20.007462],
        },
      },
      {
        regionId: 'Takli_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [75.311517, 17.632675],
        },
      },
      {
        regionId: 'Pimpri_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.0649, 20.10161],
        },
      },
      {
        regionId: 'Umarani_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [75.2362381, 16.9014483],
        },
      },
      {
        regionId: 'Mukhed_Yevla_Nashik_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.313104, 19.983271],
        },
      },
      {
        regionId: 'Sawargaon_Barshi_Solapur_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [75.904659, 18.170242],
        },
      },
      {
        regionId: 'Amrutwadi_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.261943, 17.03157],
        },
      },
      {
        regionId: 'Jondhalkhindi_Khanapur_Sangli_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.618266, 17.32364],
        },
      },
      {
        regionId: 'Junoni_Sangole_Solapur_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.001784, 17.233414],
        },
      },
      {
        regionId: 'Narayan Tembhi_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.019586, 20.142225],
        },
      },
      {
        regionId: 'Khanapur_Khanapur_Sangli_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.71761210000001, 17.2636096],
        },
      },
      {
        regionId: 'Khupsangi_Mangalvedhe_Solapur_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [75.356632, 17.415105],
        },
      },
      {
        regionId: 'Kumathe_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.64901, 16.963863],
        },
      },
      {
        regionId: 'Mallal_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.198494, 17.013935],
        },
      },
      {
        regionId: 'Kasabe Sukene_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.0138541, 20.0784069],
        },
      },
      {
        regionId: 'Jarandi_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.847037, 17.174991],
        },
      },
      {
        regionId: 'Ashta_Walwa_Sangli_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.425999, 16.945666],
        },
      },
      {
        regionId: 'Rasalpur_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.10931409999999, 20.0799646],
        },
      },
      {
        regionId: 'Balvadi_Khanapur_Sangli_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.723282, 17.288316],
        },
      },
      {
        regionId: 'Sangli-Miraj and Kupwad_Miraj_Sangli_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.5814773, 16.8523973],
        },
      },
      {
        regionId: 'Chinchkhed_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.9301037, 20.1704231],
        },
      },
      {
        regionId: 'Sawatamalinagar_Sinnar_Nashik_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [73.866716, 19.818527],
        },
      },
      {
        regionId: 'Karanje_Khanapur_Sangli_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.763149, 17.234952],
        },
      },
      {
        regionId: 'Karewadi_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.595979, 17.039006],
        },
      },
      {
        regionId: 'Ranmasle_Solapur North_Solapur_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [75.779117, 17.83742],
        },
      },
      {
        regionId: 'Morvanchi_Mohol_Solapur_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [75.766764, 17.829997],
        },
      },
      {
        regionId: 'Konheri_Mohol_Solapur_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.519117, 17.822368],
        },
      },
      {
        regionId: 'Mukhed_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [73.977724, 20.201952],
        },
      },
      {
        regionId: 'Manegaon_Madha_Solapur_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [75.6513571, 17.9897455],
        },
      },
      {
        regionId: 'Arag_Miraj_Sangli_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.808491, 16.782249],
        },
      },
      {
        regionId: 'Khadak Sukene_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [73.907507, 20.173918],
        },
      },
      {
        regionId: 'Jaulakedindori_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [73.90126, 20.061645],
        },
      },
      {
        regionId: 'Korty_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [75.311517, 17.632675],
        },
      },
      {
        regionId: 'Chinchale_Atpadi_Sangli_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.772354, 17.353145],
        },
      },
      {
        regionId: 'Lonar_Mangalvedhe_Solapur_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [75.377835, 17.244994],
        },
      },
      {
        regionId: 'Manori Kh._Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.10931409999999, 20.0799646],
        },
      },
      {
        regionId: 'Palus_Palus_Sangli_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.4496317, 17.097643],
        },
      },
      {
        regionId: 'Tikondi_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [75.578878, 17.039763],
        },
      },
      {
        regionId: 'Karkamb_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.280176, 17.869368],
        },
      },
      {
        regionId: 'Bilur_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [75.185728, 16.942502],
        },
      },
      {
        regionId: 'Palashi_Khanapur_Sangli_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.81568659999999, 17.2201143],
        },
      },
      {
        regionId: 'Gitakunj_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.083054, 20.106509],
        },
      },
      {
        regionId: 'Rampur_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [75.186993, 17.05429],
        },
      },
      {
        regionId: 'Gavhan_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.767172, 17.062042],
        },
      },
      {
        regionId: 'Wakav_Madha_Solapur_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [75.590436, 17.976299],
        },
      },
      {
        regionId: 'Niphad_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.10931409999999, 20.0799646],
        },
      },
      {
        regionId: 'Pimpri Sayyad_Nashik_Nashik_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [73.926071, 20.047016],
        },
      },
      {
        regionId: 'Eklaspur_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [75.398962, 17.587668],
        },
      },
      {
        regionId: 'Raulas_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.0649, 20.10161],
        },
      },
      {
        regionId: 'Savalaj_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.76589179999999, 17.1106264],
        },
      },
      {
        regionId: 'Mungsare_Nashik_Nashik_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [73.722436, 20.059675],
        },
      },
      {
        regionId: 'Antroli_Solapur South_Solapur_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.86825689999999, 17.9624924],
        },
      },
      {
        regionId: 'Gheradi_Sangole_Solapur_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [75.28432, 17.25674],
        },
      },
      {
        regionId: 'Shirwade Wani_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.05228, 20.21573],
        },
      },
      {
        regionId: 'Santoshwadi_Miraj_Sangli_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.870388, 16.837687],
        },
      },
      {
        regionId: 'Walwa_Walwa_Sangli_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.359664, 17.030863],
        },
      },
      {
        regionId: 'Bhose_Miraj_Sangli_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.744722, 16.965333],
        },
      },
      {
        regionId: 'Chale_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.436476, 17.687215],
        },
      },
      {
        regionId: 'Mauje Sukene_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.0138541, 20.0784069],
        },
      },
      {
        regionId: 'Nanegaon_Nashik_Nashik_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [73.862306, 19.888923],
        },
      },
      {
        regionId: 'Palashe_Nashik_Nashik_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [73.878476, 19.924019],
        },
      },
      {
        regionId: 'Shelve_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [75.238608, 17.735375],
        },
      },
      {
        regionId: 'Malgaon_Miraj_Sangli_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.7093812, 16.868783],
        },
      },
      {
        regionId: 'Pachorewani_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.025422, 20.202973],
        },
      },
      {
        regionId: 'Bhatambare_Barshi_Solapur_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.922916, 18.145576],
        },
      },
      {
        regionId: 'Savarde_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.6872515, 17.0624211],
        },
      },
      {
        regionId: 'Tasgaon_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.6078344, 17.0295253],
        },
      },
      {
        regionId: 'Ugaon_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.127483, 20.126669],
        },
      },
    ],
    cropId: 'brinjal',
    type: 'pest',
    typeId: 'thrips',
  },
  {
    count: 13,
    regions: [
      {
        regionId: 'Banwala_Dabwali_Sirsa_Haryana',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.849434, 29.680374],
        },
      },
      {
        regionId: 'Kalan Wali_Sirsa_Sirsa_Haryana',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.98462, 29.795018],
        },
      },
      {
        regionId: 'Dubal_Kaithal_Kaithal_Haryana',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [76.4, 29.78],
        },
      },
      {
        regionId: 'Ram Nagaria_Sirsa_Sirsa_Haryana',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.99712, 29.497551],
        },
      },
      {
        regionId: 'Bassi Jhajhra_Phulera (Hq.Sambhar)_Jaipur_Rajasthan',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [75.506136, 26.926694],
        },
      },
      {
        regionId: 'Jamalpur Shekhan_Tohana_Fatehabad_Haryana',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.83735, 29.7088],
        },
      },
      {
        regionId: 'Dabwali_Sirsa_Haryana',
        regionType: 'subDistrict',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.64535, 30.023036],
        },
      },
      {
        regionId: 'Nuhiyan Wali_Dabwali_Sirsa_Haryana',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.867709, 29.719612],
        },
      },
      {
        regionId: 'Sirsa_Haryana',
        regionType: 'district',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [75.0267312, 29.5374003],
        },
      },
      {
        regionId: 'Firozpur_Punjab',
        regionType: 'district',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.622, 30.933],
        },
      },
      {
        regionId: 'Teja Khera_Dabwali_Sirsa_Haryana',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.566283, 29.82958],
        },
      },
      {
        regionId: 'Pabra_Hisar_Hisar_Haryana',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.815444, 29.457303],
        },
      },
      {
        regionId: 'Daulatpur_Hisar_Hisar_Haryana',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.85975, 29.446465],
        },
      },
    ],
    cropId: 'cucumber',
    type: 'disease',
    typeId: 'powdery_mildew',
  },
  {
    count: 1,
    regions: [
      {
        regionId: 'Kadawa Mhalungi_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [73.792171, 20.246876],
        },
      },
    ],
    cropId: 'pomegranate',
    type: 'disease',
    typeId: 'bacterial_blight',
  },
  {
    count: 66,
    regions: [
      {
        regionId: 'Morgar_Nakhatrana_Kachchh_Gujarat',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [69.335667, 23.255647],
        },
      },
      {
        regionId: 'Thasra_Thasra_Kheda_Gujarat',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [73.22, 22.8],
        },
      },
      {
        regionId: 'Mehna_Malout_Muktsar_Punjab',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.6746, 30.0829],
        },
      },
      {
        regionId: 'Patti Amra Urf Patti Sadiq_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.1056435, 29.9919978],
        },
      },
      {
        regionId: 'Vehar_Nakhatrana_Kachchh_Gujarat',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [69.209548, 23.32406],
        },
      },
      {
        regionId: '1 Y_Ganganagar_Ganganagar_Rajasthan',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.896483, 29.960941],
        },
      },
      {
        regionId: 'Barwala_Hisar_Hisar_Haryana',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [75.910575, 29.3425],
        },
      },
      {
        regionId: 'Rupnagar_Fazilka_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.002566, 30.211329],
        },
      },
      {
        regionId: '3 R_Karanpur_Ganganagar_Rajasthan',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [73.691329, 29.982239],
        },
      },
      {
        regionId: 'Khatwan_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.17757499999999, 30.0092903],
        },
      },
      {
        regionId: 'Jhurar Khera_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.13493, 29.99351],
        },
      },
      {
        regionId: 'Wahabwala_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.197204, 30.017152],
        },
      },
      {
        regionId: 'Halvad_Halvad_Surendranagar_Gujarat',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [71.1823868, 23.013705],
        },
      },
      {
        regionId: 'Banwala_Dabwali_Sirsa_Haryana',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.849434, 29.680374],
        },
      },
      {
        regionId: 'Lunasar_Wankaner_Rajkot_Gujarat',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [71.128826, 22.662951],
        },
      },
      {
        regionId: 'Haripar_Lalpur_Jamnagar_Gujarat',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [70.017377, 22.293025],
        },
      },
      {
        regionId: 'Dodewala_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.252963, 29.970826],
        },
      },
      {
        regionId: 'Loria_Bhuj_Kachchh_Gujarat',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [69.635406, 23.423681],
        },
      },
      {
        regionId: 'Sukchain_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.3563646, 30.0400849],
        },
      },
      {
        regionId: 'Shergarh_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.061039, 30.004959],
        },
      },
      {
        regionId: 'Waryam Khera_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.070218, 30.012073],
        },
      },
      {
        regionId: 'Kakadbhit_Nakhatrana_Kachchh_Gujarat',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [69.357221, 23.275158],
        },
      },
      {
        regionId: 'Vadiya_Nasvadi_Vadodara_Gujarat',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.785433, 22.039731],
        },
      },
      {
        regionId: '4 KSP_Tibi_Hanumangarh_Rajasthan',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.44818, 29.50403],
        },
      },
      {
        regionId: 'Nuhiyan Wali_Dabwali_Sirsa_Haryana',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.867709, 29.719612],
        },
      },
      {
        regionId: 'Umbarwadi_Gangakhed_Parbhani_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [76.852817, 18.832449],
        },
      },
      {
        regionId: '14 Eea_Padampur_Ganganagar_Rajasthan',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.71924038983296, 29.68920239715808],
        },
      },
      {
        regionId: 'Amravati_Amravati_Amravati_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [77.7814, 20.9453],
        },
      },
      {
        regionId: 'Vithon_Nakhatrana_Kachchh_Gujarat',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [69.349772, 23.311407],
        },
      },
      {
        regionId: 'Deshalpar_Nakhatrana_Kachchh_Gujarat',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [69.170599, 23.472925],
        },
      },
      {
        regionId: 'Bhanger Khera_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.993104, 30.008847],
        },
      },
      {
        regionId: 'Khodu_Wadhwan_Surendranagar_Gujarat',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [71.474275, 22.805605],
        },
      },
      {
        regionId: 'Paniwala Mahla_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.961514, 30.002457],
        },
      },
      {
        regionId: 'Rajpar_Mandvi_Kachchh_Gujarat',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [69.380212, 23.093156],
        },
      },
      {
        regionId: '25 Ps-A_Raisinghnagar_Ganganagar_Rajasthan',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.436621, 29.538672],
        },
      },
      {
        regionId: 'Sarli_Bhuj_Kachchh_Gujarat',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [69.479758, 23.089054],
        },
      },
      {
        regionId: 'Latur_Latur_Latur_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [76.56, 18.4],
        },
      },
      {
        regionId: 'Ghordadi_Sengaon_Hingoli_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [76.698706, 19.848949],
        },
      },
      {
        regionId: 'Ratdi_Porbandar_Porbandar_Gujarat',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [69.502103, 21.731675],
        },
      },
      {
        regionId: 'Bandhara Nana_Bhuj_Kachchh_Gujarat',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [69.75308, 23.096905],
        },
      },
      {
        regionId: 'Jamalpur Shekhan_Tohana_Fatehabad_Haryana',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [75.83735, 29.7088],
        },
      },
      {
        regionId: 'Mankuva_Bhuj_Kachchh_Gujarat',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [69.572115, 23.21201],
        },
      },
      {
        regionId: 'Kalan Wali_Sirsa_Sirsa_Haryana',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.98462, 29.795018],
        },
      },
      {
        regionId: 'Godhra_Mandvi_Kachchh_Gujarat',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [69.2663751, 22.9181754],
        },
      },
      {
        regionId: 'Maan_Malout_Muktsar_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.6746, 30.0829],
        },
      },
      {
        regionId: 'Tarhadi Tarf Tarhad_Shirpur_Dhule_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.7035279, 21.4154095],
        },
      },
      {
        regionId: 'Bhagsar_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.287855, 30.039395],
        },
      },
      {
        regionId: 'Sherewala_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.162714, 29.974211],
        },
      },
      {
        regionId: 'Nikoli_Valia_Bharuch_Gujarat',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [73.2418, 21.510589],
        },
      },
      {
        regionId: 'Ram Nagaria_Sirsa_Sirsa_Haryana',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.99712, 29.497551],
        },
      },
      {
        regionId: '58 Np_Raisinghnagar_Ganganagar_Rajasthan',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.433657, 29.410873],
        },
      },
      {
        regionId: 'Lathi_Lathi_Amreli_Gujarat',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [71.420474, 21.727768],
        },
      },
      {
        regionId: 'Dubal_Kaithal_Kaithal_Haryana',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [76.4, 29.78],
        },
      },
      {
        regionId: 'Mangvana_Nakhatrana_Kachchh_Gujarat',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [69.356104, 23.216791],
        },
      },
      {
        regionId: 'Sanosara_Bhuj_Kachchh_Gujarat',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [69.719357, 23.130993],
        },
      },
      {
        regionId: 'Devpar_Nakhatrana_Kachchh_Gujarat',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [69.331521, 23.300389],
        },
      },
      {
        regionId: 'Pabra_Hisar_Hisar_Haryana',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [75.815444, 29.457303],
        },
      },
      {
        regionId: 'Roherianwali_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.208211, 30.201005],
        },
      },
      {
        regionId: 'Manjal_Nakhatrana_Kachchh_Gujarat',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [69.423829, 23.20042],
        },
      },
      {
        regionId: 'Tappar_Mundra_Kachchh_Gujarat',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [69.649197, 22.987053],
        },
      },
      {
        regionId: 'Kuntalpur_Muli_Surendranagar_Gujarat',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [71.319832, 22.786744],
        },
      },
      {
        regionId: 'Gandher_Bhuj_Kachchh_Gujarat',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [69.859927, 23.184744],
        },
      },
      {
        regionId: 'Teja Khera_Dabwali_Sirsa_Haryana',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.566283, 29.82958],
        },
      },
      {
        regionId: 'Sapar Timbo_Bhuj_Kachchh_Gujarat',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [69.659063, 23.127809],
        },
      },
      {
        regionId: 'Patrewala_Fazilka_Firozpur_Punjab',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.079763, 30.195685],
        },
      },
      {
        regionId: 'Kanakpar_Abdasa_Kachchh_Gujarat',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [69.119934, 23.202811],
        },
      },
    ],
    cropId: 'cotton',
    type: 'pest',
    typeId: 'thrips',
  },
  {
    count: 11,
    regions: [
      {
        regionId: 'Dharoli_Rajgarh_Sirmaur_Himachal Pradesh',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [77.266712, 30.931901],
        },
      },
      {
        regionId: 'Chichiri Pora_Anantnag_Anantnag_Jammu and Kashmir',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.13081, 33.70555],
        },
      },
      {
        regionId: 'Rakh Chindran_Pulwama_Pulwama_Jammu and Kashmir',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.921425, 33.821964],
        },
      },
      {
        regionId: 'Ratni Pora_Shupiyan_Shupiyan_Jammu and Kashmir',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.904415, 33.701463],
        },
      },
      {
        regionId: 'Gopal Pora Kalan_Anantnag_Anantnag_Jammu and Kashmir',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.200952, 33.721958],
        },
      },
      {
        regionId: 'Thaji Wara_Anantnag_Anantnag_Jammu and Kashmir',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.19546335570067, 33.69935385885993],
        },
      },
      {
        regionId: 'Silana-II_Kotkhai_Shimla_Himachal Pradesh',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [77.585664, 31.092442],
        },
      },
      {
        regionId: 'Srinagar___Jammu and Kashmir',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.819773, 34.083717],
        },
      },
      {
        regionId: 'Kosum Bagh_Sonawari_Bandipore_Jammu and Kashmir',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.64498, 34.24778],
        },
      },
      {
        regionId: 'Sir Hama_Bijbehara_Anantnag_Jammu and Kashmir',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.146514, 33.848257],
        },
      },
      {
        regionId: 'Lal Gam_Budgam_Badgam_Jammu and Kashmir',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.81721, 33.970122],
        },
      },
    ],
    cropId: 'apple',
    type: 'disease',
    typeId: 'alternaria_blotch',
  },
  {
    count: 3,
    regions: [
      {
        regionId: 'Sirsa_Haryana',
        regionType: 'district',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.0267312, 29.5374003],
        },
      },
      {
        regionId: 'Dabwali_Sirsa_Haryana',
        regionType: 'subDistrict',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.64535, 30.023036],
        },
      },
      {
        regionId: 'Gandhara_Karjan_Vadodara_Gujarat',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [73.191245, 22.055217],
        },
      },
    ],
    cropId: 'greenchilli',
    type: 'disease',
    typeId: 'powdery_mildew',
  },
  {
    count: 6,
    regions: [
      {
        regionId: 'Lal Gam_Budgam_Badgam_Jammu and Kashmir',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.81721, 33.970122],
        },
      },
      {
        regionId: 'Sir Hama_Bijbehara_Anantnag_Jammu and Kashmir',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.146514, 33.848257],
        },
      },
      {
        regionId: 'Srinagar___Jammu and Kashmir',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.819773, 34.083717],
        },
      },
      {
        regionId: 'Kosum Bagh_Sonawari_Bandipore_Jammu and Kashmir',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.64498, 34.24778],
        },
      },
      {
        regionId: 'Rakh Chindran_Pulwama_Pulwama_Jammu and Kashmir',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.921425, 33.821964],
        },
      },
      {
        regionId: 'Gopal Pora Kalan_Anantnag_Anantnag_Jammu and Kashmir',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.200952, 33.721958],
        },
      },
    ],
    cropId: 'apple',
    type: 'pest',
    typeId: 'leaf_miner',
  },
  {
    count: 35,
    regions: [
      {
        regionId: 'Patrewala_Fazilka_Firozpur_Punjab',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.079763, 30.195685],
        },
      },
      {
        regionId: 'Shergarh_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.061039, 30.004959],
        },
      },
      {
        regionId: '1 Y_Ganganagar_Ganganagar_Rajasthan',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.896483, 29.960941],
        },
      },
      {
        regionId: 'Mehna_Malout_Muktsar_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.6746, 30.0829],
        },
      },
      {
        regionId: 'Jamalpur Shekhan_Tohana_Fatehabad_Haryana',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [75.83735, 29.7088],
        },
      },
      {
        regionId: 'Dubal_Kaithal_Kaithal_Haryana',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [76.4, 29.78],
        },
      },
      {
        regionId: 'Patti Amra Urf Patti Sadiq_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.1056435, 29.9919978],
        },
      },
      {
        regionId: 'Dodewala_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.252963, 29.970826],
        },
      },
      {
        regionId: 'Wahabwala_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.197204, 30.017152],
        },
      },
      {
        regionId: 'Sukchain_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.3563646, 30.0400849],
        },
      },
      {
        regionId: '14 Eea_Padampur_Ganganagar_Rajasthan',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.71924038983296, 29.68920239715808],
        },
      },
      {
        regionId: 'Pabra_Hisar_Hisar_Haryana',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [75.815444, 29.457303],
        },
      },
      {
        regionId: 'Ram Nagaria_Sirsa_Sirsa_Haryana',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.99712, 29.497551],
        },
      },
      {
        regionId: '3 R_Karanpur_Ganganagar_Rajasthan',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.691329, 29.982239],
        },
      },
      {
        regionId: 'Jhurar Khera_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.13493, 29.99351],
        },
      },
      {
        regionId: 'Daulatpur_Hisar_Hisar_Haryana',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [75.85975, 29.446465],
        },
      },
      {
        regionId: 'Rupnagar_Fazilka_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.002566, 30.211329],
        },
      },
      {
        regionId: 'Maan_Malout_Muktsar_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.6746, 30.0829],
        },
      },
      {
        regionId: '4 KSP_Tibi_Hanumangarh_Rajasthan',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.44818, 29.50403],
        },
      },
      {
        regionId: '58 Np_Raisinghnagar_Ganganagar_Rajasthan',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.433657, 29.410873],
        },
      },
      {
        regionId: 'Bhanger Khera_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.993104, 30.008847],
        },
      },
      {
        regionId: 'Paniwala Mahla_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.961514, 30.002457],
        },
      },
      {
        regionId: 'Himatpura_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.379222, 29.994402],
        },
      },
      {
        regionId: 'Roherianwali_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.208211, 30.201005],
        },
      },
      {
        regionId: 'Loria_Bhuj_Kachchh_Gujarat',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [69.635406, 23.423681],
        },
      },
      {
        regionId: '25 Ps-A_Raisinghnagar_Ganganagar_Rajasthan',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.436621, 29.538672],
        },
      },
      {
        regionId: 'Waryam Khera_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.070218, 30.012073],
        },
      },
      {
        regionId: 'Khatwan_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.17757499999999, 30.0092903],
        },
      },
      {
        regionId: 'Teja Khera_Dabwali_Sirsa_Haryana',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.566283, 29.82958],
        },
      },
      {
        regionId: 'Barwala_Hisar_Hisar_Haryana',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.910575, 29.3425],
        },
      },
      {
        regionId: 'Banwala_Dabwali_Sirsa_Haryana',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.849434, 29.680374],
        },
      },
      {
        regionId: 'Nuhiyan Wali_Dabwali_Sirsa_Haryana',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.867709, 29.719612],
        },
      },
      {
        regionId: 'Sherewala_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.162714, 29.974211],
        },
      },
      {
        regionId: 'Bhagsar_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.287855, 30.039395],
        },
      },
      {
        regionId: 'Kalan Wali_Sirsa_Sirsa_Haryana',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.98462, 29.795018],
        },
      },
    ],
    cropId: 'cotton',
    type: 'pest',
    typeId: 'aphids',
  },
  {
    count: 20,
    regions: [
      {
        regionId: 'Sihol_Palwal_Palwal_Haryana',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [77.425731, 28.130272],
        },
      },
      {
        regionId: 'Pabra_Hisar_Hisar_Haryana',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [75.815444, 29.457303],
        },
      },
      {
        regionId: 'Firozpur_Punjab',
        regionType: 'district',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.622, 30.933],
        },
      },
      {
        regionId: 'Vadiya_Nasvadi_Vadodara_Gujarat',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.785433, 22.039731],
        },
      },
      {
        regionId: 'Barwala_Hisar_Hisar_Haryana',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.910575, 29.3425],
        },
      },
      {
        regionId: 'Dabwali_Sirsa_Haryana',
        regionType: 'subDistrict',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.64535, 30.023036],
        },
      },
      {
        regionId: 'Dangaheri_Indragarh_Bundi_Rajasthan',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [76.063667, 25.578067],
        },
      },
      {
        regionId: 'Ratdi_Porbandar_Porbandar_Gujarat',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [69.502103, 21.731675],
        },
      },
      {
        regionId: 'Banwala_Dabwali_Sirsa_Haryana',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.849434, 29.680374],
        },
      },
      {
        regionId: 'Ram Nagaria_Sirsa_Sirsa_Haryana',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.99712, 29.497551],
        },
      },
      {
        regionId: 'Ratagarh_Nepanagar_Burhanpur_Madhya Pradesh',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [76.35993, 21.437013],
        },
      },
      {
        regionId: 'Nuhiyan Wali_Dabwali_Sirsa_Haryana',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.867709, 29.719612],
        },
      },
      {
        regionId: 'Jamuniya_Ratlam_Ratlam_Madhya Pradesh',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.1514, 23.1961],
        },
      },
      {
        regionId: 'Teja Khera_Dabwali_Sirsa_Haryana',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.566283, 29.82958],
        },
      },
      {
        regionId: 'Bhasner_Khargone_West Nimar_Madhya Pradesh',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.599894, 21.769016],
        },
      },
      {
        regionId: 'Sarola_Nepanagar_Burhanpur_Madhya Pradesh',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [76.309583, 21.330737],
        },
      },
      {
        regionId: 'Kuntalpur_Muli_Surendranagar_Gujarat',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [71.319832, 22.786744],
        },
      },
      {
        regionId: 'Sirsa_Haryana',
        regionType: 'district',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [75.0267312, 29.5374003],
        },
      },
      {
        regionId: 'Dubal_Kaithal_Kaithal_Haryana',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [76.4, 29.78],
        },
      },
      {
        regionId: 'Halvad_Halvad_Surendranagar_Gujarat',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [71.1823868, 23.013705],
        },
      },
    ],
    cropId: 'cucumber',
    type: 'pest',
    typeId: 'thrips',
  },
  {
    count: 27,
    regions: [
      {
        regionId: 'Khatwan_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.17757499999999, 30.0092903],
        },
      },
      {
        regionId: 'Himatpura_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.379222, 29.994402],
        },
      },
      {
        regionId: 'Dodewala_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.252963, 29.970826],
        },
      },
      {
        regionId: 'Bhanger Khera_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.993104, 30.008847],
        },
      },
      {
        regionId: '4 KSP_Tibi_Hanumangarh_Rajasthan',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.44818, 29.50403],
        },
      },
      {
        regionId: 'Waryam Khera_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.070218, 30.012073],
        },
      },
      {
        regionId: 'Jhurar Khera_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.13493, 29.99351],
        },
      },
      {
        regionId: 'Sukchain_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.3563646, 30.0400849],
        },
      },
      {
        regionId: 'Banwala_Dabwali_Sirsa_Haryana',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.849434, 29.680374],
        },
      },
      {
        regionId: '1 Y_Ganganagar_Ganganagar_Rajasthan',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [73.896483, 29.960941],
        },
      },
      {
        regionId: 'Daulatpur_Hisar_Hisar_Haryana',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [75.85975, 29.446465],
        },
      },
      {
        regionId: 'Teja Khera_Dabwali_Sirsa_Haryana',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.566283, 29.82958],
        },
      },
      {
        regionId: 'Bhagsar_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.287855, 30.039395],
        },
      },
      {
        regionId: 'Shergarh_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.061039, 30.004959],
        },
      },
      {
        regionId: 'Sherewala_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.162714, 29.974211],
        },
      },
      {
        regionId: 'Jamalpur Shekhan_Tohana_Fatehabad_Haryana',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [75.83735, 29.7088],
        },
      },
      {
        regionId: 'Patrewala_Fazilka_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.079763, 30.195685],
        },
      },
      {
        regionId: 'Paniwala Mahla_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [73.961514, 30.002457],
        },
      },
      {
        regionId: 'Roherianwali_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.208211, 30.201005],
        },
      },
      {
        regionId: 'Pabra_Hisar_Hisar_Haryana',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [75.815444, 29.457303],
        },
      },
      {
        regionId: 'Patti Amra Urf Patti Sadiq_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.1056435, 29.9919978],
        },
      },
      {
        regionId: '3 R_Karanpur_Ganganagar_Rajasthan',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [73.691329, 29.982239],
        },
      },
      {
        regionId: 'Wahabwala_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.197204, 30.017152],
        },
      },
      {
        regionId: '14 Eea_Padampur_Ganganagar_Rajasthan',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.71924038983296, 29.68920239715808],
        },
      },
      {
        regionId: 'Mehna_Malout_Muktsar_Punjab',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.6746, 30.0829],
        },
      },
      {
        regionId: 'Sihol_Palwal_Palwal_Haryana',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [77.425731, 28.130272],
        },
      },
      {
        regionId: 'Nuhiyan Wali_Dabwali_Sirsa_Haryana',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.867709, 29.719612],
        },
      },
    ],
    cropId: 'kinnow',
    type: 'pest',
    typeId: 'white_fly',
  },
  {
    count: 180,
    regions: [
      {
        regionId: 'Shirwade Wani_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.05228, 20.21573],
        },
      },
      {
        regionId: 'Upale_Barshi_Solapur_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [75.885891, 18.125079],
        },
      },
      {
        regionId: 'Khandobachiwadi_Palus_Sangli_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.50334522659423, 16.997711184875463],
        },
      },
      {
        regionId: 'Ladud_Baglan_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.186746, 20.7732155],
        },
      },
      {
        regionId: 'Kotnal_Indi_Bijapur_Karnataka',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [75.788927, 17.031853],
        },
      },
      {
        regionId: 'Devikhindi_Khanapur_Sangli_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.648277, 17.380994],
        },
      },
      {
        regionId: 'Toravi_Bijapur_Bijapur_Karnataka',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.710031, 16.8301708],
        },
      },
      {
        regionId: 'Lokhandewadi_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.9058534, 20.1992494],
        },
      },
      {
        regionId: 'Sarole Thadi_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.206743, 20.008015],
        },
      },
      {
        regionId: 'Managuli_Basavana Bagevadi_Bijapur_Karnataka',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [75.810058, 16.667186],
        },
      },
      {
        regionId: 'Bijapur_Bijapur_Bijapur_Karnataka',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [75.710031, 16.8301708],
        },
      },
      {
        regionId: 'Mungsare_Nashik_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.722436, 20.059675],
        },
      },
      {
        regionId: 'Arag_Miraj_Sangli_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.808491, 16.782249],
        },
      },
      {
        regionId: 'Shegaon_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [75.167854, 17.189055],
        },
      },
      {
        regionId: 'Palkhed_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.8713099, 20.1880642],
        },
      },
      {
        regionId: 'Balvadi_Khanapur_Sangli_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.723282, 17.288316],
        },
      },
      {
        regionId: 'Walwa_Walwa_Sangli_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.359664, 17.030863],
        },
      },
      {
        regionId: 'Manerajuri_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.695479, 17.014179],
        },
      },
      {
        regionId: 'Vishnu Nagar_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.208211, 20.077255],
        },
      },
      {
        regionId: 'Amanapur_Palus_Sangli_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.454211, 17.05153],
        },
      },
      {
        regionId: 'Khadak Sukene_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.907507, 20.173918],
        },
      },
      {
        regionId: 'Kumbhari_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [75.114219, 17.109476],
        },
      },
      {
        regionId: 'Bopegaon_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.938447, 20.218671],
        },
      },
      {
        regionId: 'Khede_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.114269, 20.087111],
        },
      },
      {
        regionId: 'Dudgaon_Nashik_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.659691, 19.974383],
        },
      },
      {
        regionId: 'Bedag_Miraj_Sangli_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.750349, 16.79725],
        },
      },
      {
        regionId: 'Honawad_Bijapur_Bijapur_Karnataka',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.710031, 16.8301708],
        },
      },
      {
        regionId: 'Mavadi_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.930388, 20.312127],
        },
      },
      {
        regionId: 'Ambedindori_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.863408, 20.122448],
        },
      },
      {
        regionId: 'Nanegaon_Nashik_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.862306, 19.888923],
        },
      },
      {
        regionId: 'Chinchale_Atpadi_Sangli_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.772354, 17.353145],
        },
      },
      {
        regionId: 'Pimpri Anchala_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.822975, 20.400579],
        },
      },
      {
        regionId: 'Nandurdi_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.1027069, 20.1350622],
        },
      },
      {
        regionId: 'Pachorewani_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.025422, 20.202973],
        },
      },
      {
        regionId: 'Khanapur_Khanapur_Sangli_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.71761210000001, 17.2636096],
        },
      },
      {
        regionId: 'Basarkod_Muddebihal_Bijapur_Karnataka',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [76.07399989999999, 16.3848126],
        },
      },
      {
        regionId: 'Narayan Tembhi_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.019586, 20.142225],
        },
      },
      {
        regionId: 'Hatnore_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.759737, 20.215202],
        },
      },
      {
        regionId: 'Mukhed_Yevla_Nashik_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.313104, 19.983271],
        },
      },
      {
        regionId: 'Dugaon_Nashik_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.68636289999999, 20.073488],
        },
      },
      {
        regionId: 'Khedgaon_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.9565551, 20.2394181],
        },
      },
      {
        regionId: 'Bijjaragi_Bijapur_Bijapur_Karnataka',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.716474, 16.696828],
        },
      },
      {
        regionId: 'Bramhangaon Vinchur_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.2526, 20.1343],
        },
      },
      {
        regionId: 'Redgaon_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.086739, 20.208289],
        },
      },
      {
        regionId: 'Bahaduri_Chandvad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.9738201, 20.2855097],
        },
      },
      {
        regionId: 'Mallal_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [75.198494, 17.013935],
        },
      },
      {
        regionId: 'Gondegaon_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.972167, 20.215381],
        },
      },
      {
        regionId: 'Vijayanagar_Indi_Bijapur_Karnataka',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [75.747647, 17.153153],
        },
      },
      {
        regionId: 'Thengode_Baglan_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.193489, 20.530791],
        },
      },
      {
        regionId: 'Vadali Najik_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.023035, 20.1273487],
        },
      },
      {
        regionId: 'Palkhed_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.059938, 20.175788],
        },
      },
      {
        regionId: 'Rampur_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.186993, 17.05429],
        },
      },
      {
        regionId: 'Lakhamapur_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.831052, 20.286803],
        },
      },
      {
        regionId: 'Ranwad_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.120656, 20.167138],
        },
      },
      {
        regionId: 'Siddhewadi_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.777411, 17.136483],
        },
      },
      {
        regionId: 'Jarandi_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.847037, 17.174991],
        },
      },
      {
        regionId: 'Deopur_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.079995, 20.125607],
        },
      },
      {
        regionId: 'Devergaon_Chandvad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.172071, 20.2127173],
        },
      },
      {
        regionId: 'Davachwadi_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.0549812, 20.1429594],
        },
      },
      {
        regionId: 'Sawatawadi_Malegaon_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.5139188, 20.5650788],
        },
      },
      {
        regionId: 'Kasbe Vani_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.886929, 20.328891],
        },
      },
      {
        regionId: 'Karanjad_Baglan_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.1434477, 20.7356497],
        },
      },
      {
        regionId: 'Gardi_Khanapur_Sangli_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.545047, 17.285561],
        },
      },
      {
        regionId: 'Dhamanwadi_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.897218, 20.201876],
        },
      },
      {
        regionId: 'Palus_Palus_Sangli_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.4496317, 17.097643],
        },
      },
      {
        regionId: 'Takli_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [75.311517, 17.632675],
        },
      },
      {
        regionId: 'Bhatambare_Barshi_Solapur_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [75.922916, 18.145576],
        },
      },
      {
        regionId: 'Shindwad_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.987961, 20.247229],
        },
      },
      {
        regionId: 'Kanamadi_Bijapur_Bijapur_Karnataka',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [75.391677, 16.923038],
        },
      },
      {
        regionId: 'Lonwadi_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.0289106, 20.1618864],
        },
      },
      {
        regionId: 'Gavhan_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.767172, 17.062042],
        },
      },
      {
        regionId: 'Pingalwade_Baglan_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.124867, 20.727529],
        },
      },
      {
        regionId: 'Kurnoli_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.916693, 20.152362],
        },
      },
      {
        regionId: 'Karanje_Khanapur_Sangli_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.763149, 17.234952],
        },
      },
      {
        regionId: 'Takali_Miraj_Sangli_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.686392, 16.824227],
        },
      },
      {
        regionId: 'Amrutwadi_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.261943, 17.03157],
        },
      },
      {
        regionId: 'Tasgaon_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.6078344, 17.0295253],
        },
      },
      {
        regionId: 'Palashi_Khanapur_Sangli_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.81568659999999, 17.2201143],
        },
      },
      {
        regionId: 'Kalgurki_Basavana Bagevadi_Bijapur_Karnataka',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.75, 16.5676],
        },
      },
      {
        regionId: 'Khadak Malegaon_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.16730079999999, 20.1757318],
        },
      },
      {
        regionId: 'Pimpri_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.0649, 20.10161],
        },
      },
      {
        regionId: 'Nandur Madhyameshwar_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.148035, 20.021114],
        },
      },
      {
        regionId: 'Zalaki_Indi_Bijapur_Karnataka',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [75.816569, 17.241298],
        },
      },
      {
        regionId: 'Dari_Nashik_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.73221, 20.081959],
        },
      },
      {
        regionId: 'Bhandi Shegaon_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [75.233503, 17.703954],
        },
      },
      {
        regionId: 'Ravalgundwadi_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.305029, 16.990991],
        },
      },
      {
        regionId: 'Mulawad_Basavana Bagevadi_Bijapur_Karnataka',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [75.75, 16.5676],
        },
      },
      {
        regionId: 'Mohadi_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.90126, 20.143693],
        },
      },
      {
        regionId: 'Ugaon_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.127483, 20.126669],
        },
      },
      {
        regionId: 'Karkamb_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [75.280176, 17.869368],
        },
      },
      {
        regionId: 'Vadner Bhairao_Chandvad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.031395, 20.260168],
        },
      },
      {
        regionId: 'Shivare_Chandvad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.2472779, 20.3271277],
        },
      },
      {
        regionId: 'Kikwari Bk._Baglan_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.072421, 20.672307],
        },
      },
      {
        regionId: 'Gitakunj_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.083054, 20.106509],
        },
      },
      {
        regionId: 'Nampur_Baglan_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.3109045, 20.7264993],
        },
      },
      {
        regionId: 'Shivadi_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.127483, 20.119796],
        },
      },
      {
        regionId: 'Kalwan Bk._Kalwan_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.042314, 20.492507],
        },
      },
      {
        regionId: 'Dindori_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.8272029, 20.2041657],
        },
      },
      {
        regionId: 'Vadalibhoi_Chandvad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.088941, 20.262397],
        },
      },
      {
        regionId: 'Mangalvedha_Mangalvedhe_Solapur_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [75.432834, 17.524535],
        },
      },
      {
        regionId: 'Dhanyal_Bijapur_Bijapur_Karnataka',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.567152, 16.764387],
        },
      },
      {
        regionId: 'Ahergaon_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.016555, 20.178866],
        },
      },
      {
        regionId: 'Fopir_Baglan_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.26294, 20.697225],
        },
      },
      {
        regionId: 'Kanthi_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.151802, 17.057597],
        },
      },
      {
        regionId: 'Dhondgavhan_Chandvad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.0046727, 20.2203949],
        },
      },
      {
        regionId: 'Wavi_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.080553, 20.20566],
        },
      },
      {
        regionId: 'Manori Kh._Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.10931409999999, 20.0799646],
        },
      },
      {
        regionId: 'Bilur_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.185728, 16.942502],
        },
      },
      {
        regionId: 'Sonewadi Bk._Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.15715, 20.09744],
        },
      },
      {
        regionId: 'Benapur_Khanapur_Sangli_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.757298, 17.245646],
        },
      },
      {
        regionId: 'Lengre_Khanapur_Sangli_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.631809, 17.329731],
        },
      },
      {
        regionId: 'Lonar_Mangalvedhe_Solapur_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [75.377835, 17.244994],
        },
      },
      {
        regionId: 'Bolachikkalaki_Bijapur_Bijapur_Karnataka',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [75.501053, 16.561905],
        },
      },
      {
        regionId: 'Antarweli_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.969963, 20.204328],
        },
      },
      {
        regionId: 'Savarde_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.6872515, 17.0624211],
        },
      },
      {
        regionId: 'Nashik_Nashik_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.78980229999999, 19.9974533],
        },
      },
      {
        regionId: 'Tikota_Bijapur_Bijapur_Karnataka',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.710031, 16.8301708],
        },
      },
      {
        regionId: 'Ekhatapur_Sangole_Solapur_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.1394925, 17.4645926],
        },
      },
      {
        regionId: 'Ozar_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.92611, 20.08734],
        },
      },
      {
        regionId: 'Rajapur_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.888031, 20.22126],
        },
      },
      {
        regionId: 'Chinchani_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.63986, 17.070231],
        },
      },
      {
        regionId: 'Korhate_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.867451, 20.162221],
        },
      },
      {
        regionId: 'Jondhalkhindi_Khanapur_Sangli_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.618266, 17.32364],
        },
      },
      {
        regionId: 'Kundal_Palus_Sangli_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.411341, 17.11492],
        },
      },
      {
        regionId: 'Mauje Sukene_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.0138541, 20.0784069],
        },
      },
      {
        regionId: 'Bijote_Baglan_Nashik_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.199039, 20.731996],
        },
      },
      {
        regionId: 'Khanderajuri_Miraj_Sangli_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.773108, 16.891831],
        },
      },
      {
        regionId: 'Ghodewadi_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.878844, 20.247149],
        },
      },
      {
        regionId: 'Sindgi_Sindgi_Bijapur_Karnataka',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [76.252438, 16.927031],
        },
      },
      {
        regionId: 'Vita_Khanapur_Sangli_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.53571269999999, 17.2751726],
        },
      },
      {
        regionId: 'Ashta_Walwa_Sangli_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.425999, 16.945666],
        },
      },
      {
        regionId: 'Kumathe_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.64901, 16.963863],
        },
      },
      {
        regionId: 'Eklahare_Kalwan_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.025055, 20.493421],
        },
      },
      {
        regionId: 'Malgaon_Miraj_Sangli_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.7093812, 16.868783],
        },
      },
      {
        regionId: 'Tisgaon_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.398148, 20.52333],
        },
      },
      {
        regionId: 'Niphad_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.10931409999999, 20.0799646],
        },
      },
      {
        regionId: 'Jaikheda_Baglan_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.204758, 20.792035],
        },
      },
      {
        regionId: 'Bolwad_Miraj_Sangli_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.701699, 16.816175],
        },
      },
      {
        regionId: 'Talegaon Vani_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.938003, 20.278725],
        },
      },
      {
        regionId: 'Junoni_Sangole_Solapur_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.001784, 17.233414],
        },
      },
      {
        regionId: 'Kadawa Mhalungi_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.792171, 20.246876],
        },
      },
      {
        regionId: 'Sawatamalinagar_Sinnar_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.866716, 19.818527],
        },
      },
      {
        regionId: 'Vinchurgavali_Nashik_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.8846, 20.0246],
        },
      },
      {
        regionId: 'Waghale_Baglan_Nashik_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.246728, 20.777388],
        },
      },
      {
        regionId: 'Balvadi_Sangole_Solapur_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [75.023693, 17.383735],
        },
      },
      {
        regionId: 'Hanchinal_Basavana Bagevadi_Bijapur_Karnataka',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [76.003466, 16.523061],
        },
      },
      {
        regionId: 'Kasabe Sukene_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.0138541, 20.0784069],
        },
      },
      {
        regionId: 'Saptashrungagad_Kalwan_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.908977, 20.390267],
        },
      },
      {
        regionId: 'Vithalwadi_Palus_Sangli_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.47195, 17.051178],
        },
      },
      {
        regionId: 'Umarani_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [75.2362381, 16.9014483],
        },
      },
      {
        regionId: 'Pimpri Sayyad_Nashik_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.926071, 20.047016],
        },
      },
      {
        regionId: 'Pimpalnare_Chandvad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.2472779, 20.3271277],
        },
      },
      {
        regionId: 'Siddapur_Bijapur_Bijapur_Karnataka',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.549456, 16.87264],
        },
      },
      {
        regionId: 'Bhairvawadi_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.660353, 17.078992],
        },
      },
      {
        regionId: 'Motewadi_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [75.646609, 16.969631],
        },
      },
      {
        regionId: 'Pimpalgaon Baswant_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.9879323, 20.1654012],
        },
      },
      {
        regionId: 'Sangli-Miraj and Kupwad_Miraj_Sangli_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.5814773, 16.8523973],
        },
      },
      {
        regionId: 'Ankalkhop_Palus_Sangli_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.445651, 17.016482],
        },
      },
      {
        regionId: 'Dudhkhede_Chandvad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.692277, 21.423423],
        },
      },
      {
        regionId: 'Raulas_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.0649, 20.10161],
        },
      },
      {
        regionId: 'Anjani_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.7777832, 17.0841203],
        },
      },
      {
        regionId: 'Babanagar_Bijapur_Bijapur_Karnataka',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [75.4767099, 16.8858261],
        },
      },
      {
        regionId: 'Jaulakedindori_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.90126, 20.061645],
        },
      },
      {
        regionId: 'Bhose_Miraj_Sangli_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.744722, 16.965333],
        },
      },
      {
        regionId: 'Chinchkhed_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.9301037, 20.1704231],
        },
      },
      {
        regionId: 'Savalaj_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.76589179999999, 17.1106264],
        },
      },
      {
        regionId: 'Khadakjamb_Chandvad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.077194, 20.249008],
        },
      },
      {
        regionId: 'Pandhurli_Sinnar_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.8601, 19.829837],
        },
      },
      {
        regionId: 'Rasalpur_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.10931409999999, 20.0799646],
        },
      },
      {
        regionId: 'Nidoni_Bijapur_Bijapur_Karnataka',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.710031, 16.8301708],
        },
      },
      {
        regionId: 'Kavalapur_Miraj_Sangli_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.613874, 16.9239348],
        },
      },
      {
        regionId: 'Karibhanthnal_Basavana Bagevadi_Bijapur_Karnataka',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [76.043744, 16.600767],
        },
      },
      {
        regionId: 'Mukhed_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.977724, 20.201952],
        },
      },
      {
        regionId: 'Dahegaon_Nashik_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.82996, 20.29135],
        },
      },
      {
        regionId: 'Rajuri_Sangole_Solapur_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [75.09881, 17.307824],
        },
      },
      {
        regionId: 'Karanjgaon_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.062141, 20.007462],
        },
      },
      {
        regionId: 'Palashe_Nashik_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.878476, 19.924019],
        },
      },
      {
        regionId: 'Manegaon_Madha_Solapur_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [75.6513571, 17.9897455],
        },
      },
      {
        regionId: 'Behed_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.0017, 20.1565],
        },
      },
      {
        regionId: 'Honaganahalli_Bijapur_Bijapur_Karnataka',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [75.716474, 16.696828],
        },
      },
    ],
    cropId: 'grapes',
    type: 'disease',
    typeId: 'powdery_mildew',
  },
  {
    count: 10,
    regions: [
      {
        regionId: 'Mankuva_Bhuj_Kachchh_Gujarat',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [69.572115, 23.21201],
        },
      },
      {
        regionId: 'Bhuj_Bhuj_Kachchh_Gujarat',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [69.6667, 23.25],
        },
      },
      {
        regionId: 'Anand_Gujarat',
        regionType: 'district',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [72.928871, 22.5645175],
        },
      },
      {
        regionId: 'Sanosara_Bhuj_Kachchh_Gujarat',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [69.719357, 23.130993],
        },
      },
      {
        regionId: 'Saiyedpar_Bhuj_Kachchh_Gujarat',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [69.851737, 23.191129],
        },
      },
      {
        regionId: 'Bandhara Nana_Bhuj_Kachchh_Gujarat',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [69.75308, 23.096905],
        },
      },
      {
        regionId: 'Gandher_Bhuj_Kachchh_Gujarat',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [69.859927, 23.184744],
        },
      },
      {
        regionId: 'Sarli_Bhuj_Kachchh_Gujarat',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [69.479758, 23.089054],
        },
      },
      {
        regionId: 'Sapar Timbo_Bhuj_Kachchh_Gujarat',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [69.659063, 23.127809],
        },
      },
      {
        regionId: 'Loria_Bhuj_Kachchh_Gujarat',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [69.635406, 23.423681],
        },
      },
    ],
    cropId: 'banana',
    type: 'pest',
    typeId: 'scarring_beetle',
  },
  {
    count: 153,
    regions: [
      {
        regionId: 'Ashta_Walwa_Sangli_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.425999, 16.945666],
        },
      },
      {
        regionId: 'Kothure_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.07467369999999, 20.0507391],
        },
      },
      {
        regionId: 'Dubal_Kaithal_Kaithal_Haryana',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [76.4, 29.78],
        },
      },
      {
        regionId: 'Manegaon_Madha_Solapur_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [75.6513571, 17.9897455],
        },
      },
      {
        regionId: 'Vikhale_Khatav_Satara_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.618998, 17.490184],
        },
      },
      {
        regionId: 'Tirth Bk._Tuljapur_Osmanabad_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [76.138545, 17.952064],
        },
      },
      {
        regionId: 'Rahu_Daund_Pune_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.248379, 18.591133],
        },
      },
      {
        regionId: 'Balvadi_Khanapur_Sangli_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.723282, 17.288316],
        },
      },
      {
        regionId: 'Dhondgavhan_Chandvad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.0046727, 20.2203949],
        },
      },
      {
        regionId: 'Eklaspur_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [75.398962, 17.587668],
        },
      },
      {
        regionId: 'Pimplas_Rahta_Ahmadnagar_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.464103, 19.707567],
        },
      },
      {
        regionId: 'Khadak Sukene_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [73.907507, 20.173918],
        },
      },
      {
        regionId: 'Harsule_Sinnar_Nashik_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [73.939472, 19.808243],
        },
      },
      {
        regionId: 'Palashe_Nashik_Nashik_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [73.878476, 19.924019],
        },
      },
      {
        regionId: 'Sirsa_Haryana',
        regionType: 'district',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.0267312, 29.5374003],
        },
      },
      {
        regionId: 'Sawargaon_Barshi_Solapur_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [75.904659, 18.170242],
        },
      },
      {
        regionId: 'Kumathe_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.64901, 16.963863],
        },
      },
      {
        regionId: 'Ozar_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [73.92611, 20.08734],
        },
      },
      {
        regionId: 'Korty_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [75.311517, 17.632675],
        },
      },
      {
        regionId: 'Datyane_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [73.971166, 20.070074],
        },
      },
      {
        regionId: 'Manerajuri_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.695479, 17.014179],
        },
      },
      {
        regionId: 'Nehru Nagar_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.5487083, 17.0237024],
        },
      },
      {
        regionId: 'Tarhadi Tarf Tarhad_Shirpur_Dhule_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.7035279, 21.4154095],
        },
      },
      {
        regionId: 'Chale_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [75.436476, 17.687215],
        },
      },
      {
        regionId: 'Raulas_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.0649, 20.10161],
        },
      },
      {
        regionId: 'Lavangi_Mangalvedhe_Solapur_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [75.48927, 17.269415],
        },
      },
      {
        regionId: 'Khanapur_Khanapur_Sangli_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.71761210000001, 17.2636096],
        },
      },
      {
        regionId: 'Narayan Tembhi_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.019586, 20.142225],
        },
      },
      {
        regionId: 'Antroli_Solapur South_Solapur_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.86825689999999, 17.9624924],
        },
      },
      {
        regionId: 'Shivadi_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.127483, 20.119796],
        },
      },
      {
        regionId: 'Tungat_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.469146, 17.760851],
        },
      },
      {
        regionId: 'Maralgoi Kh._Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.277639, 20.110021],
        },
      },
      {
        regionId: 'Amrutwadi_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.261943, 17.03157],
        },
      },
      {
        regionId: 'Motewadi_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [75.646609, 16.969631],
        },
      },
      {
        regionId: 'Kaledhon_Khatav_Satara_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.64352, 17.45039],
        },
      },
      {
        regionId: 'Mangalvedhe_Mangalvedhe_Solapur_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [75.445943, 17.521905],
        },
      },
      {
        regionId: 'Kaldela_Thandla_Jhabua_Madhya Pradesh',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.578365, 23.098685],
        },
      },
      {
        regionId: 'Pachorewani_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.025422, 20.202973],
        },
      },
      {
        regionId: 'Takli_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [75.311517, 17.632675],
        },
      },
      {
        regionId: 'Ratagarh_Nepanagar_Burhanpur_Madhya Pradesh',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [76.35993, 21.437013],
        },
      },
      {
        regionId: 'Upale_Barshi_Solapur_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [75.885891, 18.125079],
        },
      },
      {
        regionId: 'Bhatambare_Barshi_Solapur_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.922916, 18.145576],
        },
      },
      {
        regionId: 'Gitakunj_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.083054, 20.106509],
        },
      },
      {
        regionId: 'Khadki_Tuljapur_Osmanabad_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [76.013862, 17.76305],
        },
      },
      {
        regionId: 'Devikhindi_Khanapur_Sangli_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.648277, 17.380994],
        },
      },
      {
        regionId: 'Bedag_Miraj_Sangli_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.750349, 16.79725],
        },
      },
      {
        regionId: 'Kasabe Sukene_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.0138541, 20.0784069],
        },
      },
      {
        regionId: 'Ugaon_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.127483, 20.126669],
        },
      },
      {
        regionId: 'Tumbagi_Muddebihal_Bijapur_Karnataka',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [76.286106, 16.579906],
        },
      },
      {
        regionId: 'Shelve_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [75.238608, 17.735375],
        },
      },
      {
        regionId: 'Guntur_Andhra Pradesh',
        regionType: 'district',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [80.4333, 16.3783],
        },
      },
      {
        regionId: 'Tadasalur_Parasgad_Belgaum_Karnataka',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.899135, 15.923653],
        },
      },
      {
        regionId: 'Nanegaon_Nashik_Nashik_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [73.862306, 19.888923],
        },
      },
      {
        regionId: 'Gavhan_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.767172, 17.062042],
        },
      },
      {
        regionId: 'Kundal_Palus_Sangli_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.411341, 17.11492],
        },
      },
      {
        regionId: 'Sangli-Miraj and Kupwad_Miraj_Sangli_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.5814773, 16.8523973],
        },
      },
      {
        regionId: 'Chinchkhed_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.9301037, 20.1704231],
        },
      },
      {
        regionId: 'Wavi_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.080553, 20.20566],
        },
      },
      {
        regionId: 'Pimpri_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.0649, 20.10161],
        },
      },
      {
        regionId: 'Vadali Najik_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.023035, 20.1273487],
        },
      },
      {
        regionId: 'Mauje Sukene_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.0138541, 20.0784069],
        },
      },
      {
        regionId: 'Alate_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.547976, 17.170122],
        },
      },
      {
        regionId: 'Gondegaon_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [73.972167, 20.215381],
        },
      },
      {
        regionId: 'Umarani_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [75.2362381, 16.9014483],
        },
      },
      {
        regionId: 'Mandave_Khatav_Satara_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.490111, 17.642897],
        },
      },
      {
        regionId: 'Kalvi West_Hadagalli_Bellary_Karnataka',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [75.968474, 15.135135],
        },
      },
      {
        regionId: 'Krishnagiri_Tamil Nadu',
        regionType: 'district',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [78.2317, 12.3933],
        },
      },
      {
        regionId: 'Lamantanda_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.4752537, 16.9591421],
        },
      },
      {
        regionId: 'Pimpri Sayyad_Nashik_Nashik_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [73.926071, 20.047016],
        },
      },
      {
        regionId: 'Shirsane_Chandvad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.2472779, 20.3271277],
        },
      },
      {
        regionId: 'Karkamb_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.280176, 17.869368],
        },
      },
      {
        regionId: 'Junoni_Sangole_Solapur_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.001784, 17.233414],
        },
      },
      {
        regionId: 'Rajuri_Sangole_Solapur_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [75.09881, 17.307824],
        },
      },
      {
        regionId: 'Mukhed_Yevla_Nashik_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.313104, 19.983271],
        },
      },
      {
        regionId: 'Bhandi Shegaon_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [75.233503, 17.703954],
        },
      },
      {
        regionId: 'Lokhandewadi_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [73.9058534, 20.1992494],
        },
      },
      {
        regionId: 'Darganhalli_Solapur South_Solapur_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.86825689999999, 17.9624924],
        },
      },
      {
        regionId: 'Wakav_Madha_Solapur_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [75.590436, 17.976299],
        },
      },
      {
        regionId: 'Mukhed_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [73.977724, 20.201952],
        },
      },
      {
        regionId: 'Vadalibhoi_Chandvad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.088941, 20.262397],
        },
      },
      {
        regionId: 'Harathale_Nanjangud_Mysore_Karnataka',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [76.604682, 12.078538],
        },
      },
      {
        regionId: 'Kasegaon_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.308966, 17.622019],
        },
      },
      {
        regionId: 'Jaulakedindori_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [73.90126, 20.061645],
        },
      },
      {
        regionId: 'Turchi_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.55291919999999, 17.0690749],
        },
      },
      {
        regionId: 'Arigevarigutta_Bagepalli_Chikkaballapura_Karnataka',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [78.03898, 13.797114],
        },
      },
      {
        regionId: 'Savarde_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.6872515, 17.0624211],
        },
      },
      {
        regionId: 'Pachwad_Khatav_Satara_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.647179, 17.482332],
        },
      },
      {
        regionId: 'Ahergaon_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.016555, 20.178866],
        },
      },
      {
        regionId: 'Khede_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.114269, 20.087111],
        },
      },
      {
        regionId: 'Konheri_Mohol_Solapur_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.519117, 17.822368],
        },
      },
      {
        regionId: 'Rampur_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [75.186993, 17.05429],
        },
      },
      {
        regionId: 'Benapur_Khanapur_Sangli_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.757298, 17.245646],
        },
      },
      {
        regionId: 'Kulali_Mudhol_Bagalkot_Karnataka',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [75.233106, 16.378378],
        },
      },
      {
        regionId: 'Ravalgundwadi_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [75.305029, 16.990991],
        },
      },
      {
        regionId: 'Morvanchi_Mohol_Solapur_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [75.766764, 17.829997],
        },
      },
      {
        regionId: 'Khandobachiwadi_Palus_Sangli_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.50334522659423, 16.997711184875463],
        },
      },
      {
        regionId: 'Walwa_Walwa_Sangli_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.359664, 17.030863],
        },
      },
      {
        regionId: 'Dabwali_Sirsa_Haryana',
        regionType: 'subDistrict',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.64535, 30.023036],
        },
      },
      {
        regionId: 'Bilur_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [75.185728, 16.942502],
        },
      },
      {
        regionId: 'Lonar_Mangalvedhe_Solapur_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [75.377835, 17.244994],
        },
      },
      {
        regionId: 'Karewadi_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.595979, 17.039006],
        },
      },
      {
        regionId: 'Santoshwadi_Miraj_Sangli_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.870388, 16.837687],
        },
      },
      {
        regionId: 'Karanje_Khanapur_Sangli_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.763149, 17.234952],
        },
      },
      {
        regionId: 'Jondhalkhindi_Khanapur_Sangli_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.618266, 17.32364],
        },
      },
      {
        regionId: 'Niphad_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.10931409999999, 20.0799646],
        },
      },
      {
        regionId: 'Jainwadi_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [75.144837, 17.665446],
        },
      },
      {
        regionId: 'Basarkod_Muddebihal_Bijapur_Karnataka',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [76.07399989999999, 16.3848126],
        },
      },
      {
        regionId: 'Bilaspur_Chhattisgarh',
        regionType: 'district',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [82.17, 22.09],
        },
      },
      {
        regionId: 'Bhairvawadi_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.660353, 17.078992],
        },
      },
      {
        regionId: 'Palus_Palus_Sangli_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.4496317, 17.097643],
        },
      },
      {
        regionId: 'Rasalpur_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.10931409999999, 20.0799646],
        },
      },
      {
        regionId: 'Arag_Miraj_Sangli_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.808491, 16.782249],
        },
      },
      {
        regionId: 'Malgaon_Miraj_Sangli_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.7093812, 16.868783],
        },
      },
      {
        regionId: 'Palashi_Khanapur_Sangli_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.81568659999999, 17.2201143],
        },
      },
      {
        regionId: 'Enkul_Khatav_Satara_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.579464, 17.573394],
        },
      },
      {
        regionId: 'Shirwade Wani_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.05228, 20.21573],
        },
      },
      {
        regionId: 'Bhose_Miraj_Sangli_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.744722, 16.965333],
        },
      },
      {
        regionId: 'Ambedindori_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [73.863408, 20.122448],
        },
      },
      {
        regionId: 'Savalaj_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.76589179999999, 17.1106264],
        },
      },
      {
        regionId: 'Manori Kh._Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.10931409999999, 20.0799646],
        },
      },
      {
        regionId: 'Dhamori_Kopargaon_Ahmadnagar_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.317871, 19.97031],
        },
      },
      {
        regionId: '1 Y_Ganganagar_Ganganagar_Rajasthan',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [73.896483, 29.960941],
        },
      },
      {
        regionId: 'Hatnoor_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.642249, 17.156003],
        },
      },
      {
        regionId: 'Bhasner_Khargone_West Nimar_Madhya Pradesh',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.599894, 21.769016],
        },
      },
      {
        regionId: 'Karanjgaon_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.062141, 20.007462],
        },
      },
      {
        regionId: 'Jambhulani_Man_Satara_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.755469, 17.568568],
        },
      },
      {
        regionId: 'Sonnenahalli_Bangalore North_Bangalore_Karnataka',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [77.5667, 12.97],
        },
      },
      {
        regionId: 'Kamasettihalli_Chikkaballapura_Chikkaballapura_Karnataka',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [77.756116, 13.467268],
        },
      },
      {
        regionId: 'Kumbhari_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [75.114219, 17.109476],
        },
      },
      {
        regionId: 'Mulikwadi_Khatav_Satara_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.650473, 17.451296],
        },
      },
      {
        regionId: 'Jarandi_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.847037, 17.174991],
        },
      },
      {
        regionId: 'Mangalvedha_Mangalvedhe_Solapur_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [75.432834, 17.524535],
        },
      },
      {
        regionId: 'Gheradi_Sangole_Solapur_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [75.28432, 17.25674],
        },
      },
      {
        regionId: 'Ranmasle_Solapur North_Solapur_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [75.779117, 17.83742],
        },
      },
      {
        regionId: 'Chinchale_Atpadi_Sangli_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.772354, 17.353145],
        },
      },
      {
        regionId: 'Chinchgaon_Madha_Solapur_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [75.476164, 18.114794],
        },
      },
      {
        regionId: 'Tikondi_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [75.578878, 17.039763],
        },
      },
      {
        regionId: 'Sawatamalinagar_Sinnar_Nashik_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [73.866716, 19.818527],
        },
      },
      {
        regionId: 'Deopur_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.079995, 20.125607],
        },
      },
      {
        regionId: 'Sangvi Mardi_Tuljapur_Osmanabad_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [76.024141, 17.946601],
        },
      },
      {
        regionId: 'Marachandiram_Krishnagiri_Krishnagiri_Tamil Nadu',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [78.140587, 12.644009],
        },
      },
      {
        regionId: 'Nashik_Nashik_Nashik_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [73.78980229999999, 19.9974533],
        },
      },
      {
        regionId: 'Khupsangi_Mangalvedhe_Solapur_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [75.356632, 17.415105],
        },
      },
      {
        regionId: 'Devnal_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [75.24103, 17.02297],
        },
      },
      {
        regionId: 'Kanthi_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [75.151802, 17.057597],
        },
      },
      {
        regionId: 'Mallal_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.198494, 17.013935],
        },
      },
      {
        regionId: 'Tasgaon_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.6078344, 17.0295253],
        },
      },
      {
        regionId: 'Hanmant Vadiye_Kadegaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.324837, 17.294014],
        },
      },
      {
        regionId: 'Mungsare_Nashik_Nashik_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [73.722436, 20.059675],
        },
      },
      {
        regionId: 'Pandharewadi_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.331197, 17.818607],
        },
      },
      {
        regionId: 'Sindgi_Sindgi_Bijapur_Karnataka',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [76.252438, 16.927031],
        },
      },
      {
        regionId: 'Wangi_Kadegaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.402913, 17.227324],
        },
      },
      {
        regionId: 'Hiranyapalli_Chintamani_Chikkaballapura_Karnataka',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [78.099243, 13.419624],
        },
      },
    ],
    cropId: 'tomato',
    type: 'pest',
    typeId: 'thrips',
  },
  {
    count: 14,
    regions: [
      {
        regionId: 'Ram Nagaria_Sirsa_Sirsa_Haryana',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.99712, 29.497551],
        },
      },
      {
        regionId: 'Teja Khera_Dabwali_Sirsa_Haryana',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.566283, 29.82958],
        },
      },
      {
        regionId: 'Daulatpur_Hisar_Hisar_Haryana',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [75.85975, 29.446465],
        },
      },
      {
        regionId: 'Sirsa_Haryana',
        regionType: 'district',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.0267312, 29.5374003],
        },
      },
      {
        regionId: 'Kalan Wali_Sirsa_Sirsa_Haryana',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.98462, 29.795018],
        },
      },
      {
        regionId: 'Jamalpur Shekhan_Tohana_Fatehabad_Haryana',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [75.83735, 29.7088],
        },
      },
      {
        regionId: 'Pabra_Hisar_Hisar_Haryana',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [75.815444, 29.457303],
        },
      },
      {
        regionId: 'Barwala_Hisar_Hisar_Haryana',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.910575, 29.3425],
        },
      },
      {
        regionId: 'Firozpur_Punjab',
        regionType: 'district',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.622, 30.933],
        },
      },
      {
        regionId: 'Dabwali_Sirsa_Haryana',
        regionType: 'subDistrict',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.64535, 30.023036],
        },
      },
      {
        regionId: 'Nuhiyan Wali_Dabwali_Sirsa_Haryana',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.867709, 29.719612],
        },
      },
      {
        regionId: 'Banwala_Dabwali_Sirsa_Haryana',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.849434, 29.680374],
        },
      },
      {
        regionId: 'Dangaheri_Indragarh_Bundi_Rajasthan',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [76.063667, 25.578067],
        },
      },
      {
        regionId: 'Dubal_Kaithal_Kaithal_Haryana',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [76.4, 29.78],
        },
      },
    ],
    cropId: 'cucumber',
    type: 'pest',
    typeId: 'aphids',
  },
  {
    count: 9,
    regions: [
      {
        regionId: 'Loria_Bhuj_Kachchh_Gujarat',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [69.635406, 23.423681],
        },
      },
      {
        regionId: 'Bhuj_Bhuj_Kachchh_Gujarat',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [69.6667, 23.25],
        },
      },
      {
        regionId: 'Mankuva_Bhuj_Kachchh_Gujarat',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [69.572115, 23.21201],
        },
      },
      {
        regionId: 'Bandhara Nana_Bhuj_Kachchh_Gujarat',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [69.75308, 23.096905],
        },
      },
      {
        regionId: 'Sapar Timbo_Bhuj_Kachchh_Gujarat',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [69.659063, 23.127809],
        },
      },
      {
        regionId: 'Gandher_Bhuj_Kachchh_Gujarat',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [69.859927, 23.184744],
        },
      },
      {
        regionId: 'Anand_Gujarat',
        regionType: 'district',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [72.928871, 22.5645175],
        },
      },
      {
        regionId: 'Sanosara_Bhuj_Kachchh_Gujarat',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [69.719357, 23.130993],
        },
      },
      {
        regionId: 'Sarli_Bhuj_Kachchh_Gujarat',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [69.479758, 23.089054],
        },
      },
    ],
    cropId: 'banana',
    type: 'disease',
    typeId: 'anthracnose',
  },
  {
    count: 5,
    regions: [
      {
        regionId: 'Patrewala_Fazilka_Firozpur_Punjab',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.079763, 30.195685],
        },
      },
      {
        regionId: '58 Np_Raisinghnagar_Ganganagar_Rajasthan',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [73.433657, 29.410873],
        },
      },
      {
        regionId: 'Jamalpur Shekhan_Tohana_Fatehabad_Haryana',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.83735, 29.7088],
        },
      },
      {
        regionId: 'Kalan Wali_Sirsa_Sirsa_Haryana',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.98462, 29.795018],
        },
      },
      {
        regionId: 'Himatpura_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.379222, 29.994402],
        },
      },
    ],
    cropId: 'cotton',
    type: 'pest',
    typeId: 'jassids',
  },
  {
    count: 1,
    regions: [
      {
        regionId: 'Dudgaon_Nashik_Nashik_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [73.659691, 19.974383],
        },
      },
    ],
    cropId: 'blueberry',
    type: 'pest',
    typeId: 'red_spider_mites',
  },
  {
    count: 1,
    regions: [
      {
        regionId: 'Himatpura_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.379222, 29.994402],
        },
      },
    ],
    cropId: 'kinnow',
    type: 'disease',
    typeId: 'citrus_scab',
  },
  {
    count: 1,
    regions: [
      {
        regionId: 'Hazaribagh_Jharkhand',
        regionType: 'district',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [85.3885, 24.0171],
        },
      },
    ],
    cropId: 'watermelon',
    type: 'disease',
    typeId: 'downy_mildew',
  },
  {
    count: 29,
    regions: [
      {
        regionId: 'Khatwan_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.17757499999999, 30.0092903],
        },
      },
      {
        regionId: 'Bhagsar_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.287855, 30.039395],
        },
      },
      {
        regionId: 'Sherewala_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.162714, 29.974211],
        },
      },
      {
        regionId: 'Rupnagar_Fazilka_Firozpur_Punjab',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.002566, 30.211329],
        },
      },
      {
        regionId: 'Ram Nagaria_Sirsa_Sirsa_Haryana',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.99712, 29.497551],
        },
      },
      {
        regionId: 'Jamalpur Shekhan_Tohana_Fatehabad_Haryana',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.83735, 29.7088],
        },
      },
      {
        regionId: '4 KSP_Tibi_Hanumangarh_Rajasthan',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.44818, 29.50403],
        },
      },
      {
        regionId: 'Roherianwali_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.208211, 30.201005],
        },
      },
      {
        regionId: 'Nuhiyan Wali_Dabwali_Sirsa_Haryana',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.867709, 29.719612],
        },
      },
      {
        regionId: 'Kalan Wali_Sirsa_Sirsa_Haryana',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.98462, 29.795018],
        },
      },
      {
        regionId: 'Mehna_Malout_Muktsar_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.6746, 30.0829],
        },
      },
      {
        regionId: 'Jhurar Khera_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.13493, 29.99351],
        },
      },
      {
        regionId: 'Paniwala Mahla_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [73.961514, 30.002457],
        },
      },
      {
        regionId: 'Bhanger Khera_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.993104, 30.008847],
        },
      },
      {
        regionId: 'Sukchain_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.3563646, 30.0400849],
        },
      },
      {
        regionId: 'Pabra_Hisar_Hisar_Haryana',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [75.815444, 29.457303],
        },
      },
      {
        regionId: 'Shergarh_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.061039, 30.004959],
        },
      },
      {
        regionId: 'Patti Amra Urf Patti Sadiq_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.1056435, 29.9919978],
        },
      },
      {
        regionId: 'Dubal_Kaithal_Kaithal_Haryana',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [76.4, 29.78],
        },
      },
      {
        regionId: 'Waryam Khera_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.070218, 30.012073],
        },
      },
      {
        regionId: 'Patrewala_Fazilka_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.079763, 30.195685],
        },
      },
      {
        regionId: '3 R_Karanpur_Ganganagar_Rajasthan',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.691329, 29.982239],
        },
      },
      {
        regionId: 'Barwala_Hisar_Hisar_Haryana',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [75.910575, 29.3425],
        },
      },
      {
        regionId: 'Daulatpur_Hisar_Hisar_Haryana',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [75.85975, 29.446465],
        },
      },
      {
        regionId: 'Himatpura_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.379222, 29.994402],
        },
      },
      {
        regionId: 'Dodewala_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.252963, 29.970826],
        },
      },
      {
        regionId: '58 Np_Raisinghnagar_Ganganagar_Rajasthan',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.433657, 29.410873],
        },
      },
      {
        regionId: 'Wahabwala_Abohar_Firozpur_Punjab',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.197204, 30.017152],
        },
      },
      {
        regionId: '14 Eea_Padampur_Ganganagar_Rajasthan',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.71924038983296, 29.68920239715808],
        },
      },
    ],
    cropId: 'cotton',
    type: 'pest',
    typeId: 'pink_bollworm',
  },
  {
    count: 176,
    regions: [
      {
        regionId: 'Sawargaon_Barshi_Solapur_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [75.904659, 18.170242],
        },
      },
      {
        regionId: 'Kaledhon_Khatav_Satara_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.64352, 17.45039],
        },
      },
      {
        regionId: 'Chinchale_Atpadi_Sangli_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.772354, 17.353145],
        },
      },
      {
        regionId: 'Maralgoi Kh._Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.277639, 20.110021],
        },
      },
      {
        regionId: 'Gavhan_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.767172, 17.062042],
        },
      },
      {
        regionId: 'Gondegaon_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [73.972167, 20.215381],
        },
      },
      {
        regionId: 'Raulas_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.0649, 20.10161],
        },
      },
      {
        regionId: 'Kachchh_Gujarat',
        regionType: 'district',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [69.8597406, 23.7337326],
        },
      },
      {
        regionId: 'Kumbhari_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [75.114219, 17.109476],
        },
      },
      {
        regionId: 'Vadali Najik_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.023035, 20.1273487],
        },
      },
      {
        regionId: 'Bhatambare_Barshi_Solapur_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.922916, 18.145576],
        },
      },
      {
        regionId: 'Khandobachiwadi_Palus_Sangli_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.50334522659423, 16.997711184875463],
        },
      },
      {
        regionId: 'Jondhalkhindi_Khanapur_Sangli_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.618266, 17.32364],
        },
      },
      {
        regionId: 'Chale_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [75.436476, 17.687215],
        },
      },
      {
        regionId: 'Jaulakedindori_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [73.90126, 20.061645],
        },
      },
      {
        regionId: 'Bhandi Shegaon_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.233503, 17.703954],
        },
      },
      {
        regionId: 'Karkamb_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.280176, 17.869368],
        },
      },
      {
        regionId: 'Hanmant Vadiye_Kadegaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.324837, 17.294014],
        },
      },
      {
        regionId: 'Pimpri_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.0649, 20.10161],
        },
      },
      {
        regionId: 'Niphad_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.10931409999999, 20.0799646],
        },
      },
      {
        regionId: 'Bhairvawadi_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.660353, 17.078992],
        },
      },
      {
        regionId: 'Tarhadi Tarf Tarhad_Shirpur_Dhule_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.7035279, 21.4154095],
        },
      },
      {
        regionId: 'Karewadi_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.595979, 17.039006],
        },
      },
      {
        regionId: 'Mulikwadi_Khatav_Satara_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.650473, 17.451296],
        },
      },
      {
        regionId: 'Jambhulani_Man_Satara_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.755469, 17.568568],
        },
      },
      {
        regionId: 'Sangli-Miraj and Kupwad_Miraj_Sangli_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.5814773, 16.8523973],
        },
      },
      {
        regionId: 'Rahu_Daund_Pune_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.248379, 18.591133],
        },
      },
      {
        regionId: 'Sarli_Bhuj_Kachchh_Gujarat',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [69.479758, 23.089054],
        },
      },
      {
        regionId: 'Khadki_Tuljapur_Osmanabad_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [76.013862, 17.76305],
        },
      },
      {
        regionId: 'Vadalibhoi_Chandvad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.088941, 20.262397],
        },
      },
      {
        regionId: 'Manerajuri_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.695479, 17.014179],
        },
      },
      {
        regionId: 'Sapar Timbo_Bhuj_Kachchh_Gujarat',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [69.659063, 23.127809],
        },
      },
      {
        regionId: 'Lokhandewadi_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [73.9058534, 20.1992494],
        },
      },
      {
        regionId: 'Santoshwadi_Miraj_Sangli_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.870388, 16.837687],
        },
      },
      {
        regionId: 'Gitakunj_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.083054, 20.106509],
        },
      },
      {
        regionId: 'Rasalpur_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.10931409999999, 20.0799646],
        },
      },
      {
        regionId: 'Manori Kh._Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.10931409999999, 20.0799646],
        },
      },
      {
        regionId: 'Motewadi_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [75.646609, 16.969631],
        },
      },
      {
        regionId: 'Kasabe Sukene_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.0138541, 20.0784069],
        },
      },
      {
        regionId: 'Pandharewadi_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.331197, 17.818607],
        },
      },
      {
        regionId: 'Dhondgavhan_Chandvad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.0046727, 20.2203949],
        },
      },
      {
        regionId: 'Sawatawadi_Malegaon_Nashik_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.5139188, 20.5650788],
        },
      },
      {
        regionId: 'Alate_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.547976, 17.170122],
        },
      },
      {
        regionId: 'Chinchgaon_Madha_Solapur_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [75.476164, 18.114794],
        },
      },
      {
        regionId: 'Vikhale_Khatav_Satara_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.618998, 17.490184],
        },
      },
      {
        regionId: 'Loria_Bhuj_Kachchh_Gujarat',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [69.635406, 23.423681],
        },
      },
      {
        regionId: 'Karanje_Khanapur_Sangli_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.763149, 17.234952],
        },
      },
      {
        regionId: 'Wavi_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.080553, 20.20566],
        },
      },
      {
        regionId: 'Narayan Tembhi_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.019586, 20.142225],
        },
      },
      {
        regionId: 'Ahergaon_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.016555, 20.178866],
        },
      },
      {
        regionId: 'Khodu_Wadhwan_Surendranagar_Gujarat',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [71.474275, 22.805605],
        },
      },
      {
        regionId: 'Pimplas_Rahta_Ahmadnagar_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.464103, 19.707567],
        },
      },
      {
        regionId: 'Malgaon_Miraj_Sangli_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.7093812, 16.868783],
        },
      },
      {
        regionId: 'Antroli_Solapur South_Solapur_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.86825689999999, 17.9624924],
        },
      },
      {
        regionId: 'Hatnoor_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.642249, 17.156003],
        },
      },
      {
        regionId: 'Morvanchi_Mohol_Solapur_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [75.766764, 17.829997],
        },
      },
      {
        regionId: 'Surendranagar_Gujarat',
        regionType: 'district',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [71.62, 22.73],
        },
      },
      {
        regionId: 'Lonar_Mangalvedhe_Solapur_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [75.377835, 17.244994],
        },
      },
      {
        regionId: 'Nandagaon_Athni_Belgaum_Karnataka',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [75.134947, 16.690283],
        },
      },
      {
        regionId: 'Mukhed_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [73.977724, 20.201952],
        },
      },
      {
        regionId: 'Gheradi_Sangole_Solapur_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [75.28432, 17.25674],
        },
      },
      {
        regionId: 'Kasegaon_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.308966, 17.622019],
        },
      },
      {
        regionId: 'Kuntalpur_Muli_Surendranagar_Gujarat',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [71.319832, 22.786744],
        },
      },
      {
        regionId: 'Manegaon_Madha_Solapur_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [75.6513571, 17.9897455],
        },
      },
      {
        regionId: 'Wangi_Kadegaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.402913, 17.227324],
        },
      },
      {
        regionId: 'Shelve_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [75.238608, 17.735375],
        },
      },
      {
        regionId: 'Umarani_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [75.2362381, 16.9014483],
        },
      },
      {
        regionId: 'Anand_Gujarat',
        regionType: 'district',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [72.928871, 22.5645175],
        },
      },
      {
        regionId: 'Tikondi_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [75.578878, 17.039763],
        },
      },
      {
        regionId: 'Mauje Sukene_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.0138541, 20.0784069],
        },
      },
      {
        regionId: 'Wakav_Madha_Solapur_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [75.590436, 17.976299],
        },
      },
      {
        regionId: 'Harsule_Sinnar_Nashik_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [73.939472, 19.808243],
        },
      },
      {
        regionId: 'Ratagarh_Nepanagar_Burhanpur_Madhya Pradesh',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [76.35993, 21.437013],
        },
      },
      {
        regionId: 'Rampur_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [75.186993, 17.05429],
        },
      },
      {
        regionId: 'Kodaganoor_Athni_Belgaum_Karnataka',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [75.149729, 16.671649],
        },
      },
      {
        regionId: 'Eklaspur_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [75.398962, 17.587668],
        },
      },
      {
        regionId: 'Kundal_Palus_Sangli_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.411341, 17.11492],
        },
      },
      {
        regionId: 'Mangasuli_Athni_Belgaum_Karnataka',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.8837889, 16.7559441],
        },
      },
      {
        regionId: 'Khede_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.114269, 20.087111],
        },
      },
      {
        regionId: 'Rajuri_Sangole_Solapur_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [75.09881, 17.307824],
        },
      },
      {
        regionId: 'Khanapur_Khanapur_Sangli_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.71761210000001, 17.2636096],
        },
      },
      {
        regionId: 'Tirth Bk._Tuljapur_Osmanabad_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [76.138545, 17.952064],
        },
      },
      {
        regionId: 'Nashik_Nashik_Nashik_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [73.78980229999999, 19.9974533],
        },
      },
      {
        regionId: 'Sindgi_Sindgi_Bijapur_Karnataka',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [76.252438, 16.927031],
        },
      },
      {
        regionId: 'Lamantanda_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.4752537, 16.9591421],
        },
      },
      {
        regionId: 'Kanthi_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [75.151802, 17.057597],
        },
      },
      {
        regionId: 'Mallal_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.198494, 17.013935],
        },
      },
      {
        regionId: 'Sawatamalinagar_Sinnar_Nashik_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [73.866716, 19.818527],
        },
      },
      {
        regionId: 'Balvadi_Khanapur_Sangli_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.723282, 17.288316],
        },
      },
      {
        regionId: 'Nehru Nagar_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.5487083, 17.0237024],
        },
      },
      {
        regionId: 'Shirsane_Chandvad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.2472779, 20.3271277],
        },
      },
      {
        regionId: 'Palashi_Khanapur_Sangli_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.81568659999999, 17.2201143],
        },
      },
      {
        regionId: 'Pimpri Sayyad_Nashik_Nashik_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [73.926071, 20.047016],
        },
      },
      {
        regionId: 'Upale_Barshi_Solapur_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [75.885891, 18.125079],
        },
      },
      {
        regionId: 'Khupsangi_Mangalvedhe_Solapur_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [75.356632, 17.415105],
        },
      },
      {
        regionId: 'Khadak Sukene_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [73.907507, 20.173918],
        },
      },
      {
        regionId: 'Thasra_Thasra_Kheda_Gujarat',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [73.22, 22.8],
        },
      },
      {
        regionId: 'Sanosara_Bhuj_Kachchh_Gujarat',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [69.719357, 23.130993],
        },
      },
      {
        regionId: 'Basarkod_Muddebihal_Bijapur_Karnataka',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [76.07399989999999, 16.3848126],
        },
      },
      {
        regionId: 'Kumathe_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.64901, 16.963863],
        },
      },
      {
        regionId: 'Ashta_Walwa_Sangli_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.425999, 16.945666],
        },
      },
      {
        regionId: 'Sonnenahalli_Bangalore North_Bangalore_Karnataka',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [77.5667, 12.97],
        },
      },
      {
        regionId: 'Lavangi_Mangalvedhe_Solapur_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [75.48927, 17.269415],
        },
      },
      {
        regionId: 'Bhose_Miraj_Sangli_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.744722, 16.965333],
        },
      },
      {
        regionId: 'Palus_Palus_Sangli_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.4496317, 17.097643],
        },
      },
      {
        regionId: 'Benapur_Khanapur_Sangli_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.757298, 17.245646],
        },
      },
      {
        regionId: 'Gandher_Bhuj_Kachchh_Gujarat',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [69.859927, 23.184744],
        },
      },
      {
        regionId: 'Ravalgundwadi_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [75.305029, 16.990991],
        },
      },
      {
        regionId: 'Junoni_Sangole_Solapur_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.001784, 17.233414],
        },
      },
      {
        regionId: 'Pachwad_Khatav_Satara_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.647179, 17.482332],
        },
      },
      {
        regionId: 'Kothure_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.07467369999999, 20.0507391],
        },
      },
      {
        regionId: 'Pachorewani_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.025422, 20.202973],
        },
      },
      {
        regionId: 'Takli_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [75.311517, 17.632675],
        },
      },
      {
        regionId: 'Bhasner_Khargone_West Nimar_Madhya Pradesh',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.599894, 21.769016],
        },
      },
      {
        regionId: 'Mangalvedha_Mangalvedhe_Solapur_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [75.432834, 17.524535],
        },
      },
      {
        regionId: 'Ambedindori_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [73.863408, 20.122448],
        },
      },
      {
        regionId: 'Lunasar_Wankaner_Rajkot_Gujarat',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [71.128826, 22.662951],
        },
      },
      {
        regionId: 'Tungat_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.469146, 17.760851],
        },
      },
      {
        regionId: 'Ratdi_Porbandar_Porbandar_Gujarat',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [69.502103, 21.731675],
        },
      },
      {
        regionId: 'Halvad_Halvad_Surendranagar_Gujarat',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [71.1823868, 23.013705],
        },
      },
      {
        regionId: 'Ugaon_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.127483, 20.126669],
        },
      },
      {
        regionId: 'Kaldela_Thandla_Jhabua_Madhya Pradesh',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.578365, 23.098685],
        },
      },
      {
        regionId: 'Guntur_Andhra Pradesh',
        regionType: 'district',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [80.4333, 16.3783],
        },
      },
      {
        regionId: 'Harathale_Nanjangud_Mysore_Karnataka',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [76.604682, 12.078538],
        },
      },
      {
        regionId: 'Mukhed_Yevla_Nashik_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.313104, 19.983271],
        },
      },
      {
        regionId: 'Deopur_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.079995, 20.125607],
        },
      },
      {
        regionId: 'Sangvi Mardi_Tuljapur_Osmanabad_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [76.024141, 17.946601],
        },
      },
      {
        regionId: 'Jugul_Athni_Belgaum_Karnataka',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.714312, 16.629335],
        },
      },
      {
        regionId: 'Kulali_Mudhol_Bagalkot_Karnataka',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [75.233106, 16.378378],
        },
      },
      {
        regionId: 'Bedag_Miraj_Sangli_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.750349, 16.79725],
        },
      },
      {
        regionId: 'Bilaspur_Chhattisgarh',
        regionType: 'district',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [82.17, 22.09],
        },
      },
      {
        regionId: 'Darganhalli_Solapur South_Solapur_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.86825689999999, 17.9624924],
        },
      },
      {
        regionId: 'Jainwadi_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [75.144837, 17.665446],
        },
      },
      {
        regionId: 'Mungsare_Nashik_Nashik_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [73.722436, 20.059675],
        },
      },
      {
        regionId: 'Arigevarigutta_Bagepalli_Chikkaballapura_Karnataka',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [78.03898, 13.797114],
        },
      },
      {
        regionId: 'Kamasettihalli_Chikkaballapura_Chikkaballapura_Karnataka',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [77.756116, 13.467268],
        },
      },
      {
        regionId: 'Arag_Miraj_Sangli_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.808491, 16.782249],
        },
      },
      {
        regionId: 'Amrutwadi_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.261943, 17.03157],
        },
      },
      {
        regionId: 'Chinchkhed_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.9301037, 20.1704231],
        },
      },
      {
        regionId: 'Mangalvedhe_Mangalvedhe_Solapur_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [75.445943, 17.521905],
        },
      },
      {
        regionId: 'Shirwade Wani_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.05228, 20.21573],
        },
      },
      {
        regionId: 'Dabwali_Sirsa_Haryana',
        regionType: 'subDistrict',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.64535, 30.023036],
        },
      },
      {
        regionId: 'Turchi_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.55291919999999, 17.0690749],
        },
      },
      {
        regionId: 'Krishnagiri_Tamil Nadu',
        regionType: 'district',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [78.2317, 12.3933],
        },
      },
      {
        regionId: 'Kannal_Athni_Belgaum_Karnataka',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [75.334382, 16.828829],
        },
      },
      {
        regionId: 'Konheri_Mohol_Solapur_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.519117, 17.822368],
        },
      },
      {
        regionId: 'Shiraguppi_Athni_Belgaum_Karnataka',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.139031, 16.658009],
        },
      },
      {
        regionId: 'Kalvi West_Hadagalli_Bellary_Karnataka',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [75.968474, 15.135135],
        },
      },
      {
        regionId: 'Kakamari_Athni_Belgaum_Karnataka',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.311076, 16.864865],
        },
      },
      {
        regionId: 'Enkul_Khatav_Satara_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.579464, 17.573394],
        },
      },
      {
        regionId: 'Bilur_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [75.185728, 16.942502],
        },
      },
      {
        regionId: 'Datyane_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [73.971166, 20.070074],
        },
      },
      {
        regionId: 'Mandave_Khatav_Satara_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.490111, 17.642897],
        },
      },
      {
        regionId: 'Savarde_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.6872515, 17.0624211],
        },
      },
      {
        regionId: 'Devnal_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [75.24103, 17.02297],
        },
      },
      {
        regionId: 'Devikhindi_Khanapur_Sangli_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.648277, 17.380994],
        },
      },
      {
        regionId: 'Korty_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [75.311517, 17.632675],
        },
      },
      {
        regionId: 'Sirsa_Haryana',
        regionType: 'district',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.0267312, 29.5374003],
        },
      },
      {
        regionId: 'Kheda_Gujarat',
        regionType: 'district',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [72.88, 22.73],
        },
      },
      {
        regionId: 'Palashe_Nashik_Nashik_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [73.878476, 19.924019],
        },
      },
      {
        regionId: 'Savalaj_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.76589179999999, 17.1106264],
        },
      },
      {
        regionId: 'Nanegaon_Nashik_Nashik_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [73.862306, 19.888923],
        },
      },
      {
        regionId: 'Shivadi_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.127483, 20.119796],
        },
      },
      {
        regionId: 'Dhamori_Kopargaon_Ahmadnagar_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.317871, 19.97031],
        },
      },
      {
        regionId: 'Tumbagi_Muddebihal_Bijapur_Karnataka',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [76.286106, 16.579906],
        },
      },
      {
        regionId: 'Karanjgaon_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.062141, 20.007462],
        },
      },
      {
        regionId: 'Kottalgi_Athni_Belgaum_Karnataka',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.32103, 16.936937],
        },
      },
      {
        regionId: 'Hiranyapalli_Chintamani_Chikkaballapura_Karnataka',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [78.099243, 13.419624],
        },
      },
      {
        regionId: 'Vadiya_Nasvadi_Vadodara_Gujarat',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.785433, 22.039731],
        },
      },
      {
        regionId: 'Jarandi_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.847037, 17.174991],
        },
      },
      {
        regionId: 'Tasgaon_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.6078344, 17.0295253],
        },
      },
      {
        regionId: 'Tadasalur_Parasgad_Belgaum_Karnataka',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.899135, 15.923653],
        },
      },
      {
        regionId: 'Ozar_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [73.92611, 20.08734],
        },
      },
      {
        regionId: 'Bandhara Nana_Bhuj_Kachchh_Gujarat',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [69.75308, 23.096905],
        },
      },
      {
        regionId: 'Walwa_Walwa_Sangli_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.359664, 17.030863],
        },
      },
      {
        regionId: 'Mankuva_Bhuj_Kachchh_Gujarat',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [69.572115, 23.21201],
        },
      },
    ],
    cropId: 'greenchilli',
    type: 'pest',
    typeId: 'thrips',
  },
  {
    count: 237,
    regions: [
      {
        regionId: 'Belanki_Miraj_Sangli_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.872127, 16.860279],
        },
      },
      {
        regionId: 'Antarweli_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.969963, 20.204328],
        },
      },
      {
        regionId: 'Jarandi_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.847037, 17.174991],
        },
      },
      {
        regionId: 'Kasar Amboli_Mulshi_Pune_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [73.670877, 18.510285],
        },
      },
      {
        regionId: 'Walwa_Walwa_Sangli_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.359664, 17.030863],
        },
      },
      {
        regionId: 'Ahergaon_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.016555, 20.178866],
        },
      },
      {
        regionId: 'Kurnoli_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.916693, 20.152362],
        },
      },
      {
        regionId: 'Nashik_Nashik_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.78980229999999, 19.9974533],
        },
      },
      {
        regionId: 'Gavhana_Burhanpur_Burhanpur_Madhya Pradesh',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [76.169585, 21.266493],
        },
      },
      {
        regionId: 'Mangalvedha_Mangalvedhe_Solapur_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.432834, 17.524535],
        },
      },
      {
        regionId: 'Ratagarh_Nepanagar_Burhanpur_Madhya Pradesh',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [76.35993, 21.437013],
        },
      },
      {
        regionId: 'Gavhan_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.767172, 17.062042],
        },
      },
      {
        regionId: 'Yeoti_Mohol_Solapur_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [75.470339, 17.789793],
        },
      },
      {
        regionId: 'Mukhed_Yevla_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.313104, 19.983271],
        },
      },
      {
        regionId: 'Gitakunj_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.083054, 20.106509],
        },
      },
      {
        regionId: 'Khadakjamb_Chandvad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.077194, 20.249008],
        },
      },
      {
        regionId: 'Bedag_Miraj_Sangli_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.750349, 16.79725],
        },
      },
      {
        regionId: 'Mandave_Khatav_Satara_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.490111, 17.642897],
        },
      },
      {
        regionId: 'Manegaon_Madha_Solapur_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.6513571, 17.9897455],
        },
      },
      {
        regionId: 'Wangi_Kadegaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.402913, 17.227324],
        },
      },
      {
        regionId: 'Nampur_Baglan_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.3109045, 20.7264993],
        },
      },
      {
        regionId: 'Maralgoi Kh._Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.277639, 20.110021],
        },
      },
      {
        regionId: 'Dindori_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.8272029, 20.2041657],
        },
      },
      {
        regionId: 'Datyane_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [73.971166, 20.070074],
        },
      },
      {
        regionId: 'Sangvi Mardi_Tuljapur_Osmanabad_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [76.024141, 17.946601],
        },
      },
      {
        regionId: 'Kumathe_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.64901, 16.963863],
        },
      },
      {
        regionId: 'Kulali_Mudhol_Bagalkot_Karnataka',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [75.233106, 16.378378],
        },
      },
      {
        regionId: 'Marachandiram_Krishnagiri_Krishnagiri_Tamil Nadu',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [78.140587, 12.644009],
        },
      },
      {
        regionId: 'Mungsare_Nashik_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.722436, 20.059675],
        },
      },
      {
        regionId: 'Garalewadi_Khatav_Satara_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.644729, 17.41073],
        },
      },
      {
        regionId: 'Mamurdi_Jaoli_Satara_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [73.813785, 17.812211],
        },
      },
      {
        regionId: 'Agalambe_Haveli_Pune_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [73.72579, 18.427702],
        },
      },
      {
        regionId: 'Narayangaon_Junnar_Pune_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [73.987594, 19.117159],
        },
      },
      {
        regionId: 'Bijote_Baglan_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.199039, 20.731996],
        },
      },
      {
        regionId: 'Malgaon_Miraj_Sangli_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.7093812, 16.868783],
        },
      },
      {
        regionId: 'Shindwad_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.987961, 20.247229],
        },
      },
      {
        regionId: 'Ugaon_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.127483, 20.126669],
        },
      },
      {
        regionId: 'Junoni_Sangole_Solapur_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [75.001784, 17.233414],
        },
      },
      {
        regionId: 'Khamni_Burhanpur_Burhanpur_Madhya Pradesh',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [76.265834, 21.213971],
        },
      },
      {
        regionId: '1 Y_Ganganagar_Ganganagar_Rajasthan',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [73.896483, 29.960941],
        },
      },
      {
        regionId: 'Nandurdi_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.1027069, 20.1350622],
        },
      },
      {
        regionId: 'Palashe_Nashik_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.878476, 19.924019],
        },
      },
      {
        regionId: 'Khede_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.114269, 20.087111],
        },
      },
      {
        regionId: 'Kasabe Sukene_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.0138541, 20.0784069],
        },
      },
      {
        regionId: 'Dhamanwadi_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.897218, 20.201876],
        },
      },
      {
        regionId: 'Mohadi_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.90126, 20.143693],
        },
      },
      {
        regionId: 'Devergaon_Chandvad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.172071, 20.2127173],
        },
      },
      {
        regionId: 'Bramhanpade_Baglan_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.245627, 20.783443],
        },
      },
      {
        regionId: 'Savalaj_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.76589179999999, 17.1106264],
        },
      },
      {
        regionId: 'Khadki_Tuljapur_Osmanabad_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [76.013862, 17.76305],
        },
      },
      {
        regionId: 'Rajuri_Sangole_Solapur_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [75.09881, 17.307824],
        },
      },
      {
        regionId: 'Sarola_Nepanagar_Burhanpur_Madhya Pradesh',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [76.309583, 21.330737],
        },
      },
      {
        regionId: 'Mukhed_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.977724, 20.201952],
        },
      },
      {
        regionId: 'Mangalvedhe_Mangalvedhe_Solapur_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.445943, 17.521905],
        },
      },
      {
        regionId: 'Vita_Khanapur_Sangli_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.53571269999999, 17.2751726],
        },
      },
      {
        regionId: 'Sawatamalinagar_Sinnar_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.866716, 19.818527],
        },
      },
      {
        regionId: 'Khadak Malegaon_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.16730079999999, 20.1757318],
        },
      },
      {
        regionId: 'Talegaon Vani_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.938003, 20.278725],
        },
      },
      {
        regionId: 'Tarhadi Tarf Tarhad_Shirpur_Dhule_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.7035279, 21.4154095],
        },
      },
      {
        regionId: 'Khupsangi_Mangalvedhe_Solapur_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.356632, 17.415105],
        },
      },
      {
        regionId: 'Tadasalur_Parasgad_Belgaum_Karnataka',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.899135, 15.923653],
        },
      },
      {
        regionId: 'Ozar_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.92611, 20.08734],
        },
      },
      {
        regionId: 'Pandhurli_Sinnar_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.8601, 19.829837],
        },
      },
      {
        regionId: 'Bhagwatipur_Rahta_Ahmadnagar_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.508791, 19.558047],
        },
      },
      {
        regionId: 'Umarani_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [75.2362381, 16.9014483],
        },
      },
      {
        regionId: 'Chale_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [75.436476, 17.687215],
        },
      },
      {
        regionId: 'Kasbe Vani_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.886929, 20.328891],
        },
      },
      {
        regionId: 'Pachorewani_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.025422, 20.202973],
        },
      },
      {
        regionId: 'Amrutwadi_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.261943, 17.03157],
        },
      },
      {
        regionId: 'Pandharewadi_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [75.331197, 17.818607],
        },
      },
      {
        regionId: 'Bori_Indapur_Pune_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.736084, 18.124874],
        },
      },
      {
        regionId: 'Hatnore_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.759737, 20.215202],
        },
      },
      {
        regionId: 'Santoshwadi_Miraj_Sangli_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.870388, 16.837687],
        },
      },
      {
        regionId: 'Rajapur_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.888031, 20.22126],
        },
      },
      {
        regionId: 'Ashta_Walwa_Sangli_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.425999, 16.945666],
        },
      },
      {
        regionId: 'Jambhulani_Man_Satara_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.755469, 17.568568],
        },
      },
      {
        regionId: 'Khanapur_Khanapur_Sangli_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.71761210000001, 17.2636096],
        },
      },
      {
        regionId: 'Tasgaon_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.6078344, 17.0295253],
        },
      },
      {
        regionId: 'Devikhindi_Khanapur_Sangli_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.648277, 17.380994],
        },
      },
      {
        regionId: 'Lokhandewadi_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.9058534, 20.1992494],
        },
      },
      {
        regionId: 'Telangwadi_Mohol_Solapur_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [75.451858, 17.884624],
        },
      },
      {
        regionId: 'Khadak Sukene_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.907507, 20.173918],
        },
      },
      {
        regionId: 'Akolekati_Solapur North_Solapur_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.851259, 17.785157],
        },
      },
      {
        regionId: 'Sawatawadi_Malegaon_Nashik_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.5139188, 20.5650788],
        },
      },
      {
        regionId: 'Dabwali_Sirsa_Haryana',
        regionType: 'subDistrict',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.64535, 30.023036],
        },
      },
      {
        regionId: 'Korty_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.311517, 17.632675],
        },
      },
      {
        regionId: 'Lengre_Khanapur_Sangli_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.631809, 17.329731],
        },
      },
      {
        regionId: 'Morvanchi_Mohol_Solapur_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [75.766764, 17.829997],
        },
      },
      {
        regionId: 'Bhasner_Khargone_West Nimar_Madhya Pradesh',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.599894, 21.769016],
        },
      },
      {
        regionId: 'Dugaon_Nashik_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.68636289999999, 20.073488],
        },
      },
      {
        regionId: 'Karkamb_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.280176, 17.869368],
        },
      },
      {
        regionId: 'Niphad_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.10931409999999, 20.0799646],
        },
      },
      {
        regionId: 'Kothure_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.07467369999999, 20.0507391],
        },
      },
      {
        regionId: 'Bhushangad_Khatav_Satara_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.431862, 17.459165],
        },
      },
      {
        regionId: 'Fopnar Kalan_Burhanpur_Burhanpur_Madhya Pradesh',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [76.301829, 21.244531],
        },
      },
      {
        regionId: 'Sangli-Miraj and Kupwad_Miraj_Sangli_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.5814773, 16.8523973],
        },
      },
      {
        regionId: 'Karanjad_Baglan_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.1434477, 20.7356497],
        },
      },
      {
        regionId: 'Jaloli_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [75.25538, 17.872738],
        },
      },
      {
        regionId: 'Gondegaon_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.972167, 20.215381],
        },
      },
      {
        regionId: 'Palus_Palus_Sangli_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.4496317, 17.097643],
        },
      },
      {
        regionId: 'Pimpri Anchala_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.822975, 20.400579],
        },
      },
      {
        regionId: 'Ghodewadi_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.878844, 20.247149],
        },
      },
      {
        regionId: 'Konheri_Mohol_Solapur_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.519117, 17.822368],
        },
      },
      {
        regionId: 'Chinchani_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.63986, 17.070231],
        },
      },
      {
        regionId: 'Chinchkhed_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.9301037, 20.1704231],
        },
      },
      {
        regionId: 'Dhamori_Kopargaon_Ahmadnagar_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.317871, 19.97031],
        },
      },
      {
        regionId: 'Arigevarigutta_Bagepalli_Chikkaballapura_Karnataka',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [78.03898, 13.797114],
        },
      },
      {
        regionId: 'Pimpri_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.0649, 20.10161],
        },
      },
      {
        regionId: 'Palkhed_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.059938, 20.175788],
        },
      },
      {
        regionId: 'Alate_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.547976, 17.170122],
        },
      },
      {
        regionId: 'Jaulakedindori_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.90126, 20.061645],
        },
      },
      {
        regionId: 'Gardi_Khanapur_Sangli_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.545047, 17.285561],
        },
      },
      {
        regionId: 'Vinchurgavali_Nashik_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.8846, 20.0246],
        },
      },
      {
        regionId: 'Loni Kh._Rahta_Ahmadnagar_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.473151, 19.605292],
        },
      },
      {
        regionId: 'Benapur_Khanapur_Sangli_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.757298, 17.245646],
        },
      },
      {
        regionId: 'Nimsod_Khatav_Satara_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.466667, 17.460499],
        },
      },
      {
        regionId: 'Bahaduri_Chandvad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.9738201, 20.2855097],
        },
      },
      {
        regionId: 'Dudhkhede_Chandvad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.692277, 21.423423],
        },
      },
      {
        regionId: 'Dariyapur Kalan_Burhanpur_Burhanpur_Madhya Pradesh',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [76.304566, 21.285024],
        },
      },
      {
        regionId: 'Amanapur_Palus_Sangli_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.454211, 17.05153],
        },
      },
      {
        regionId: 'Dudgaon_Nashik_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.659691, 19.974383],
        },
      },
      {
        regionId: 'Pingalwade_Baglan_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.124867, 20.727529],
        },
      },
      {
        regionId: 'Shenavadi_Velhe_Pune_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [73.605489, 18.238999],
        },
      },
      {
        regionId: 'Behed_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.0017, 20.1565],
        },
      },
      {
        regionId: 'Manerajuri_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.695479, 17.014179],
        },
      },
      {
        regionId: 'Sakuri_Rahta_Ahmadnagar_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.477291, 19.729724],
        },
      },
      {
        regionId: 'Bhairvawadi_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.660353, 17.078992],
        },
      },
      {
        regionId: 'Dhondgavhan_Chandvad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.0046727, 20.2203949],
        },
      },
      {
        regionId: 'Khedgaon_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.9565551, 20.2394181],
        },
      },
      {
        regionId: 'Khandobachiwadi_Palus_Sangli_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.50334522659423, 16.997711184875463],
        },
      },
      {
        regionId: 'Gondilwadi_Palus_Sangli_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.449082, 17.078759],
        },
      },
      {
        regionId: 'Korhate_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.867451, 20.162221],
        },
      },
      {
        regionId: 'Dahegaon_Nashik_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.82996, 20.29135],
        },
      },
      {
        regionId: 'Karsul_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.031719, 20.144937],
        },
      },
      {
        regionId: 'Bhuyane_Baglan_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.150863, 20.732837],
        },
      },
      {
        regionId: 'Bopegaon_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.938447, 20.218671],
        },
      },
      {
        regionId: 'Karanjgaon_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.062141, 20.007462],
        },
      },
      {
        regionId: 'Wavi_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.080553, 20.20566],
        },
      },
      {
        regionId: 'Undargaon_Madha_Solapur_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.573477, 18.003468],
        },
      },
      {
        regionId: 'Pimplas_Rahta_Ahmadnagar_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.464103, 19.707567],
        },
      },
      {
        regionId: 'Balsogra_Dadi_Hazaribagh_Jharkhand',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [85.431538, 23.766782],
        },
      },
      {
        regionId: 'Shirwade Wani_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.05228, 20.21573],
        },
      },
      {
        regionId: 'Hatnoor_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.642249, 17.156003],
        },
      },
      {
        regionId: 'Kadawa Mhalungi_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [73.792171, 20.246876],
        },
      },
      {
        regionId: 'Dari_Nashik_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.73221, 20.081959],
        },
      },
      {
        regionId: 'Palkhed_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.8713099, 20.1880642],
        },
      },
      {
        regionId: 'Thengode_Baglan_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.193489, 20.530791],
        },
      },
      {
        regionId: 'Ladud_Baglan_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.186746, 20.7732155],
        },
      },
      {
        regionId: 'Mavadi_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.930388, 20.312127],
        },
      },
      {
        regionId: 'Vishnu Nagar_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.208211, 20.077255],
        },
      },
      {
        regionId: 'Mauje Sukene_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.0138541, 20.0784069],
        },
      },
      {
        regionId: 'Mauje Vadgaon_Hatkanangle_Kolhapur_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.315671, 16.767585],
        },
      },
      {
        regionId: 'Nrusinhawadi_Shirol_Kolhapur_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.602527, 16.710402],
        },
      },
      {
        regionId: 'Narayan Tembhi_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.019586, 20.142225],
        },
      },
      {
        regionId: 'Vadalibhoi_Chandvad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.088941, 20.262397],
        },
      },
      {
        regionId: 'Tungat_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.469146, 17.760851],
        },
      },
      {
        regionId: 'Palashi_Khanapur_Sangli_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.81568659999999, 17.2201143],
        },
      },
      {
        regionId: 'Jaikheda_Baglan_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.204758, 20.792035],
        },
      },
      {
        regionId: 'Ekhatapur_Sangole_Solapur_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [75.1394925, 17.4645926],
        },
      },
      {
        regionId: 'Arag_Miraj_Sangli_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.808491, 16.782249],
        },
      },
      {
        regionId: 'Nagthane_Palus_Sangli_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.406975, 17.02055],
        },
      },
      {
        regionId: 'Savarde_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.6872515, 17.0624211],
        },
      },
      {
        regionId: 'Pimpalgaon Baswant_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.9879323, 20.1654012],
        },
      },
      {
        regionId: 'Matkunki_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.667672, 17.0199466],
        },
      },
      {
        regionId: 'Ranwad_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.120656, 20.167138],
        },
      },
      {
        regionId: 'Kalwan Bk._Kalwan_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.042314, 20.492507],
        },
      },
      {
        regionId: 'Redgaon_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.086739, 20.208289],
        },
      },
      {
        regionId: 'Gandasi_Arsikere_Hassan_Karnataka',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [76.301671, 13.165906],
        },
      },
      {
        regionId: 'Manori Kh._Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.10931409999999, 20.0799646],
        },
      },
      {
        regionId: 'Eklaspur_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.398962, 17.587668],
        },
      },
      {
        regionId: 'Guntur_Andhra Pradesh',
        regionType: 'district',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [80.4333, 16.3783],
        },
      },
      {
        regionId: 'Shivare_Chandvad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.2472779, 20.3271277],
        },
      },
      {
        regionId: 'Takali_Miraj_Sangli_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.686392, 16.824227],
        },
      },
      {
        regionId: 'Anjani_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.7777832, 17.0841203],
        },
      },
      {
        regionId: 'Bolwad_Miraj_Sangli_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.701699, 16.816175],
        },
      },
      {
        regionId: 'Sindgi_Sindgi_Bijapur_Karnataka',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [76.252438, 16.927031],
        },
      },
      {
        regionId: 'Kaldela_Thandla_Jhabua_Madhya Pradesh',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.578365, 23.098685],
        },
      },
      {
        regionId: 'Nagapur_Nevasa_Ahmadnagar_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.998132, 19.464593],
        },
      },
      {
        regionId: 'Walan Kh._Mahad_Raigarh_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [73.5319, 18.198],
        },
      },
      {
        regionId: 'Karanje_Khanapur_Sangli_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.763149, 17.234952],
        },
      },
      {
        regionId: 'Waghale_Baglan_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.246728, 20.777388],
        },
      },
      {
        regionId: 'Pimpri Sayyad_Nashik_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.926071, 20.047016],
        },
      },
      {
        regionId: 'Rahta Pimplas_Rahta_Ahmadnagar_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.48132, 19.709448],
        },
      },
      {
        regionId: 'Wakav_Madha_Solapur_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [75.590436, 17.976299],
        },
      },
      {
        regionId: 'Kurli_Khanapur_Sangli_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.575803, 17.233716],
        },
      },
      {
        regionId: 'Jamuniya_Ratlam_Ratlam_Madhya Pradesh',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.1514, 23.1961],
        },
      },
      {
        regionId: 'Dubal_Kaithal_Kaithal_Haryana',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [76.4, 29.78],
        },
      },
      {
        regionId: 'Jondhalkhindi_Khanapur_Sangli_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.618266, 17.32364],
        },
      },
      {
        regionId: 'Basarkod_Muddebihal_Bijapur_Karnataka',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [76.07399989999999, 16.3848126],
        },
      },
      {
        regionId: 'Bilaspur_Chhattisgarh',
        regionType: 'district',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [82.17, 22.09],
        },
      },
      {
        regionId: 'Pimpalnare_Chandvad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.2472779, 20.3271277],
        },
      },
      {
        regionId: 'Ambedindori_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.863408, 20.122448],
        },
      },
      {
        regionId: 'Kalas_Indapur_Pune_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.7778944, 18.133315],
        },
      },
      {
        regionId: 'Rampur_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [75.186993, 17.05429],
        },
      },
      {
        regionId: 'Lonwadi_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.0289106, 20.1618864],
        },
      },
      {
        regionId: 'Nagda_Nagda_Ujjain_Madhya Pradesh',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [75.407677, 23.442412],
        },
      },
      {
        regionId: 'Sihol_Palwal_Palwal_Haryana',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [77.425731, 28.130272],
        },
      },
      {
        regionId: 'Hangarwadi_Indapur_Pune_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.850896, 18.075286],
        },
      },
      {
        regionId: 'Sirsa_Haryana',
        regionType: 'district',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [75.0267312, 29.5374003],
        },
      },
      {
        regionId: 'Davachwadi_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.0549812, 20.1429594],
        },
      },
      {
        regionId: 'Vadner Bhairao_Chandvad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.031395, 20.260168],
        },
      },
      {
        regionId: 'Eklahare_Kalwan_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.025055, 20.493421],
        },
      },
      {
        regionId: 'Darganhalli_Solapur South_Solapur_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.86825689999999, 17.9624924],
        },
      },
      {
        regionId: 'Khanderajuri_Miraj_Sangli_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.773108, 16.891831],
        },
      },
      {
        regionId: 'Bhose_Miraj_Sangli_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.744722, 16.965333],
        },
      },
      {
        regionId: 'Rajmachi_Karad_Satara_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.246173, 17.318209],
        },
      },
      {
        regionId: 'Kundal_Palus_Sangli_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.411341, 17.11492],
        },
      },
      {
        regionId: 'Lakhamapur_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.831052, 20.286803],
        },
      },
      {
        regionId: 'Raulas_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.0649, 20.10161],
        },
      },
      {
        regionId: 'Shirsane_Chandvad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.2472779, 20.3271277],
        },
      },
      {
        regionId: 'Nanegaon_Nashik_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.862306, 19.888923],
        },
      },
      {
        regionId: 'Sarole Thadi_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.206743, 20.008015],
        },
      },
      {
        regionId: 'Nandur Madhyameshwar_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.148035, 20.021114],
        },
      },
      {
        regionId: 'Upale_Barshi_Solapur_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [75.885891, 18.125079],
        },
      },
      {
        regionId: 'Saptashrungagad_Kalwan_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [73.908977, 20.390267],
        },
      },
      {
        regionId: 'Vadali Najik_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.023035, 20.1273487],
        },
      },
      {
        regionId: 'Harsule_Sinnar_Nashik_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [73.939472, 19.808243],
        },
      },
      {
        regionId: 'Tirth Bk._Tuljapur_Osmanabad_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [76.138545, 17.952064],
        },
      },
      {
        regionId: 'Rasalpur_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.10931409999999, 20.0799646],
        },
      },
      {
        regionId: 'Sonewadi Bk._Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.15715, 20.09744],
        },
      },
      {
        regionId: 'Lonar_Mangalvedhe_Solapur_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [75.377835, 17.244994],
        },
      },
      {
        regionId: 'Siddhewadi_Tasgaon_Sangli_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.777411, 17.136483],
        },
      },
      {
        regionId: 'Kumbhari_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [75.114219, 17.109476],
        },
      },
      {
        regionId: 'Dhamari_Shirur_Pune_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.095082, 18.792116],
        },
      },
      {
        regionId: 'Tisgaon_Dindori_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.398148, 20.52333],
        },
      },
      {
        regionId: 'Shivadi_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.127483, 20.119796],
        },
      },
      {
        regionId: 'Kikwari Bk._Baglan_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.072421, 20.672307],
        },
      },
      {
        regionId: 'Bhandi Shegaon_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [75.233503, 17.703954],
        },
      },
      {
        regionId: 'Rahu_Daund_Pune_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.248379, 18.591133],
        },
      },
      {
        regionId: 'Kavalapur_Miraj_Sangli_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.613874, 16.9239348],
        },
      },
      {
        regionId: 'Deopur_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.079995, 20.125607],
        },
      },
      {
        regionId: 'Loni_Burhanpur_Burhanpur_Madhya Pradesh',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [76.163701, 21.284294],
        },
      },
      {
        regionId: 'Chinchale_Atpadi_Sangli_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.772354, 17.353145],
        },
      },
      {
        regionId: 'Bramhangaon Vinchur_Niphad_Nashik_Maharashtra',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [74.2526, 20.1343],
        },
      },
      {
        regionId: 'Kaledhon_Khatav_Satara_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.64352, 17.45039],
        },
      },
      {
        regionId: 'Chinchgaon_Madha_Solapur_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [75.476164, 18.114794],
        },
      },
      {
        regionId: 'Vithalwadi_Palus_Sangli_Maharashtra',
        regionType: 'village',
        highs: 14,
        regionLocation: {
          type: 'Point',
          coordinates: [74.47195, 17.051178],
        },
      },
    ],
    cropId: 'tomato',
    type: 'disease',
    typeId: 'early_blight',
  },
  {
    count: 1,
    regions: [
      {
        regionId: 'Jamalpur Shekhan_Tohana_Fatehabad_Haryana',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.83735, 29.7088],
        },
      },
    ],
    cropId: 'bitterGourd',
    type: 'disease',
    typeId: 'powdery_mildew',
  },
  {
    count: 27,
    regions: [
      {
        regionId: 'Kurli_Khanapur_Sangli_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.575803, 17.233716],
        },
      },
      {
        regionId: 'Wakav_Madha_Solapur_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [75.590436, 17.976299],
        },
      },
      {
        regionId: 'Antroli_Solapur South_Solapur_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.86825689999999, 17.9624924],
        },
      },
      {
        regionId: 'Bramhanpade_Baglan_Nashik_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.245627, 20.783443],
        },
      },
      {
        regionId: 'Chinchgaon_Madha_Solapur_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [75.476164, 18.114794],
        },
      },
      {
        regionId: 'Bijote_Baglan_Nashik_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.199039, 20.731996],
        },
      },
      {
        regionId: 'Tungat_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [75.469146, 17.760851],
        },
      },
      {
        regionId: 'Akolekati_Solapur North_Solapur_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.851259, 17.785157],
        },
      },
      {
        regionId: 'Bhuyane_Baglan_Nashik_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [74.150863, 20.732837],
        },
      },
      {
        regionId: 'Gheradi_Sangole_Solapur_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [75.28432, 17.25674],
        },
      },
      {
        regionId: 'Khupsangi_Mangalvedhe_Solapur_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [75.356632, 17.415105],
        },
      },
      {
        regionId: 'Karewadi_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [75.595979, 17.039006],
        },
      },
      {
        regionId: 'Yelmar Mangewadi_Sangole_Solapur_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [75.106008, 17.400261],
        },
      },
      {
        regionId: 'Kamalapur_Sangole_Solapur_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [75.129545, 17.400066],
        },
      },
      {
        regionId: 'Chale_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [75.436476, 17.687215],
        },
      },
      {
        regionId: 'Sawargaon_Barshi_Solapur_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [75.904659, 18.170242],
        },
      },
      {
        regionId: 'Nagthane_Palus_Sangli_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [74.406975, 17.02055],
        },
      },
      {
        regionId: 'Yamaji Patalachi Wadi_Atpadi_Sangli_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.948094, 17.413234],
        },
      },
      {
        regionId: 'Darganhalli_Solapur South_Solapur_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [74.86825689999999, 17.9624924],
        },
      },
      {
        regionId: 'Pandharewadi_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [75.331197, 17.818607],
        },
      },
      {
        regionId: 'Devnal_Jat_Sangli_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [75.24103, 17.02297],
        },
      },
      {
        regionId: 'Kasegaon_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [75.308966, 17.622019],
        },
      },
      {
        regionId: 'Belanki_Miraj_Sangli_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [74.872127, 16.860279],
        },
      },
      {
        regionId: 'Bardi_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 10,
        regionLocation: {
          type: 'Point',
          coordinates: [75.3414, 17.864163],
        },
      },
      {
        regionId: 'Undargaon_Madha_Solapur_Maharashtra',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.573477, 18.003468],
        },
      },
      {
        regionId: 'Telangwadi_Mohol_Solapur_Maharashtra',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [75.451858, 17.884624],
        },
      },
      {
        regionId: 'Eklaspur_Pandharpur_Solapur_Maharashtra',
        regionType: 'village',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [75.398962, 17.587668],
        },
      },
    ],
    cropId: 'brinjal',
    type: 'pest',
    typeId: 'red_spider_mites',
  },
  {
    count: 3,
    regions: [
      {
        regionId: 'Anand_Gujarat',
        regionType: 'district',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [72.928871, 22.5645175],
        },
      },
      {
        regionId: 'Krishnagiri_Tamil Nadu',
        regionType: 'district',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [78.2317, 12.3933],
        },
      },
      {
        regionId: 'Bilaspur_Chhattisgarh',
        regionType: 'district',
        highs: 11,
        regionLocation: {
          type: 'Point',
          coordinates: [82.17, 22.09],
        },
      },
    ],
    cropId: 'capsicum',
    type: 'pest',
    typeId: 'thrips',
  },
  {
    count: 13,
    regions: [
      {
        regionId: 'Gandher_Bhuj_Kachchh_Gujarat',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [69.859927, 23.184744],
        },
      },
      {
        regionId: 'Sarli_Bhuj_Kachchh_Gujarat',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [69.479758, 23.089054],
        },
      },
      {
        regionId: 'Khamni_Burhanpur_Burhanpur_Madhya Pradesh',
        regionType: 'village',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [76.265834, 21.213971],
        },
      },
      {
        regionId: 'Burhanpur_Madhya Pradesh',
        regionType: 'district',
        highs: 13,
        regionLocation: {
          type: 'Point',
          coordinates: [76.163701, 21.284294],
        },
      },
      {
        regionId: 'Bhuj_Bhuj_Kachchh_Gujarat',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [69.6667, 23.25],
        },
      },
      {
        regionId: 'Jamalpur Shekhan_Tohana_Fatehabad_Haryana',
        regionType: 'village',
        highs: 12,
        regionLocation: {
          type: 'Point',
          coordinates: [75.83735, 29.7088],
        },
      },
      {
        regionId: 'Saiyedpar_Bhuj_Kachchh_Gujarat',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [69.851737, 23.191129],
        },
      },
      {
        regionId: 'Sanosara_Bhuj_Kachchh_Gujarat',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [69.719357, 23.130993],
        },
      },
      {
        regionId: 'Sapar Timbo_Bhuj_Kachchh_Gujarat',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [69.659063, 23.127809],
        },
      },
      {
        regionId: 'Mankuva_Bhuj_Kachchh_Gujarat',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [69.572115, 23.21201],
        },
      },
      {
        regionId: 'Anand_Gujarat',
        regionType: 'district',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [72.928871, 22.5645175],
        },
      },
      {
        regionId: 'Bandhara Nana_Bhuj_Kachchh_Gujarat',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [69.75308, 23.096905],
        },
      },
      {
        regionId: 'Loria_Bhuj_Kachchh_Gujarat',
        regionType: 'village',
        highs: 15,
        regionLocation: {
          type: 'Point',
          coordinates: [69.635406, 23.423681],
        },
      },
    ],
    cropId: 'banana',
    type: 'pest',
    typeId: 'pseudostem_weevil',
  },
];

describe('InformationCard', () => {
  it('shold render "Loading..." when API is pending', async () => {
    jest.spyOn(InformationCard.prototype, 'fetchHotspots').mockResolvedValue([]);

    const informationCard = new InformationCard();
    informationCard.connectedCallback();
    expect(informationCard.isLoading).toBe(true);

    const result = informationCard.render();
    expect(result['$attrs$'].id).toEqual('loading-text');
    jest.resetAllMocks();
  });

  it('should render "No Results" when API response is empty', async () => {
    jest.spyOn(InformationCard.prototype, 'fetchHotspots').mockResolvedValue([]);

    const informationCard = new InformationCard();
    informationCard.connectedCallback();

    const page = await newSpecPage({
      components: [InformationCard],
      html: `<information-card></information-card>`,
    });
    await page.waitForChanges();

    const result = informationCard.render();
    expect(result['$attrs$'].id).toEqual('no-result');
    jest.resetAllMocks();
  });

  it('should group objects by cropId correctly', async () => {
    const informationCard = new InformationCard();
    const result = await informationCard.groupObjectsByCropId(inputArray);
    expect(result).toHaveLength(16);
  });
});
