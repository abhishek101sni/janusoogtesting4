const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");
const path = require("path");
const axios = require("axios");

const apidata1 = "https://janus-alive.onrender.com/api/products";
const apidata2 = "https://janus-alive.onrender.com/api/products";
const apidata3 = "https://janus-alive.onrender.com/api/blog";

// List of your static routes
const routes = [
  { url: "/", changefreq: "weekly", priority: 1.0 },
  { url: "/about-us/", changefreq: "weekly", priority: 0.9 },
  { url: "/our-service/", changefreq: "weekly", priority: 0.9 },
  { url: "/blogs/", changefreq: "weekly", priority: 0.9 },
  { url: "/contact-us/", changefreq: "weekly", priority: 0.9 },
  { url: "/metro-advertising-agency/", changefreq: "weekly", priority: 0.9 },
  { url: "/all-outdoor/", changefreq: "weekly", priority: 0.9 },
  { url: "/outdoor-advertising-agency/", changefreq: "weekly", priority: 0.9 },
  {
    url: "/airport-branding-advertising-agency/",
    changefreq: "weekly",
    priority: 0.9,
  },
  {
    url: "/mall-branding-advertising-agency/",
    changefreq: "weekly",
    priority: 0.9,
  },
  {
    url: "/inflight-branding-advertising-agency/",
    changefreq: "weekly",
    priority: 0.9,
  },
  {
    url: "/transit-media-advertising-agency/",
    changefreq: "weekly",
    priority: 0.9,
  },
  {
    url: "/outdoor-hoarding-advertising/",
    changefreq: "weekly",
    priority: 0.9,
  },
  { url: "/digital/", changefreq: "weekly", priority: 0.9 },
  { url: "/unipole/", changefreq: "weekly", priority: 0.9 },
  { url: "/billboard/", changefreq: "weekly", priority: 0.9 },
  { url: "/digital-billboard/", changefreq: "weekly", priority: 0.9 },
  { url: "/ooh/", changefreq: "weekly", priority: 0.9 },
  { url: "/bus-advertising/", changefreq: "weekly", priority: 0.9 },
];

const fetchRoutesFromAPI = async (apiUrl, transformFn) => {
  try {
    const response = await axios.get(apiUrl);
    return transformFn(response.data);
  } catch (error) {
    console.error(`Error fetching data from ${apiUrl}:`, error);
    return [];
  }
};
const BlogsUrl = (response) => {
  return response.map((item) => ({
    url: `/hello-${item?.data.title.toLowerCase().replaceAll(" ", "-")}`,
    changefreq: "weekly",
    priority: 0.9,
  }));
};

// blogs url

const CategoryUrl = (products) => {
  return products.map((product) => ({
    url: `/outdoor-advertising-agency/${product.url}/`,
    changefreq: "weekly",
    priority: 0.9,
  }));
};

// STATES------------------------------------------------
// outdoor advertising states
const OutdoorAdvertisingStates = (states) => {
  const stateUrls = states.map((state) => ({
    url: `/outdoor-advertising-agency-in-${state
      .toLowerCase()
      .replaceAll(" ", "-")}`,
    changefreq: "weekly",
    priority: 0.9,
  }));

  return stateUrls;
};

// metro advertising states
const MetroAdvertisingStates = (states) => {
  const stateUrls = states.map((state) => ({
    url: `metro-advertising-agency-in-${state
      .toLowerCase()
      .replaceAll(" ", "-")}`,
    changefreq: "weekly",
    priority: 0.9,
  }));

  return stateUrls;
};

// airport branding states
const AirportBrandingStates = (states) => {
  const stateUrls = states.map((state) => ({
    url: `airport-branding-advertising-agency-in-${state
      .toLowerCase()
      .replaceAll(" ", "-")}`,
    changefreq: "weekly",
    priority: 0.9,
  }));

  return stateUrls;
};

// mall branding states
const MallBrandingStates = (states) => {
  const stateUrls = states.map((state) => ({
    url: `mall-branding-advertising-agency-in-${state
      .toLowerCase()
      .replaceAll(" ", "-")}`,
    changefreq: "weekly",
    priority: 0.9,
  }));

  return stateUrls;
};

// Inflight branding states
const InflightBrandingStates = (states) => {
  const stateUrls = states.map((state) => ({
    url: `inflight-branding-advertising-agency-in-${state
      .toLowerCase()
      .replaceAll(" ", "-")}`,
    changefreq: "weekly",
    priority: 0.9,
  }));

  return stateUrls;
};

// Transit Media states
const TransitMediaStates = (states) => {
  const stateUrls = states.map((state) => ({
    url: `transit-media-advertising-agency-in-${state
      .toLowerCase()
      .replaceAll(" ", "-")}`,
    changefreq: "weekly",
    priority: 0.9,
  }));

  return stateUrls;
};

// Statesnames- outdoor-advertising-ageny
const updateReverseStateUrls = (states) => {
  const stateUrls = states.map((state) => ({
    url: `${state
      .toLowerCase()
      .replaceAll(" ", "-")}-outdoor-hoarding-advertising-agencies`,
    changefreq: "weekly",
    priority: 0.9,
  }));

  return stateUrls;
};

// CITIES-----------------------

// outdoorCity urls
const OutdoorCityUrls = (cities) => {
  const cityUrls = cities.map((city) => ({
    url: `/outdoor-advertising-agency-in-${city
      .toLowerCase()
      .replaceAll(" ", "-")}`,
    changefreq: "weekly",
    priority: 0.9,
  }));
  return cityUrls;
};
// metroCity urls
const MetroCitiesUrls = (cities) => {
  const cityUrls = cities.map((city) => ({
    url: `/metro-advertising-agency-in-${city
      .toLowerCase()
      .replaceAll(" ", "-")}`,
    changefreq: "weekly",
    priority: 0.9,
  }));

  return cityUrls;
};

// airportCity urls
const AirportCitiesUrls = (cities) => {
  const cityUrls = cities.map((city) => ({
    url: `/airport-advertising-agency-in-${city
      .toLowerCase()
      .replaceAll(" ", "-")}`,
    changefreq: "weekly",
    priority: 0.9,
  }));

  return cityUrls;
};

// mallCity urls
const MallCitiesUrls = (cities) => {
  const cityUrls = cities.map((city) => ({
    url: `/mall-advertising-agency-in-${city
      .toLowerCase()
      .replaceAll(" ", "-")}`,
    changefreq: "weekly",
    priority: 0.9,
  }));

  return cityUrls;
};

// inflightCity urls
const InflightCitiesUrls = (cities) => {
  const cityUrls = cities.map((city) => ({
    url: `/inflight-advertising-agency-in-${city
      .toLowerCase()
      .replaceAll(" ", "-")}`,
    changefreq: "weekly",
    priority: 0.9,
  }));

  return cityUrls;
};

// Transit Media urls
const TransitMediaUrls = (cities) => {
  const cityUrls = cities.map((city) => ({
    url: `/transit-media-advertising-agency-in-${city
      .toLowerCase()
      .replaceAll(" ", "-")}`,
    changefreq: "weekly",
    priority: 0.9,
  }));

  return cityUrls;
};

// States
const states = [
  "Andra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadar and Nagar Haveli",
  "Daman and Diu",
  "Delhi",
  "Lakshadweep",
  "Pondicherry",
];

// city
const cities = [
  "Anantapur",
  "Chittoor",
  "East Godavari",
  "Anjaw",
  "Changlang",
  "Dibang Valley",
  "Baksa",
  "Barpeta",
  "Biswanath",
  "Araria",
  "Arwal",
  "Aurangabad",
  "Balod",
  "Baloda Bazar",
  "Balrampur",
  "Bastar",
  "Bemetara",
  "Bijapur",
  "Bilaspur",
  "Dantewada",
  "Dhamtari",
  "Durg",
  "Gariaband",
  "Janjgir-Champa",
  "Jashpur",
  "Kabirdham",
  "Kanker",
  "Kondagaon",
  "Korba",
  "Koriya",
  "Mahasamund",
  "Mungeli",
  "Narayanpur",
  "Raigarh",
  "Raipur",
  "Rajnandgaon",
  "Sukma",
  "Surajpur",
  "Surguja",
  "Chandigarh",
  "Dadra and Nagar Haveli",
  "Daman",
  "Diu",
  "Central Delhi",
  "East Delhi",
  "New Delhi",
  "North Delhi",
  "North East Delhi",
  "North West Delhi",
  "Shahdara",
  "South Delhi",
  "South East Delhi",
  "South West Delhi",
  "West Delhi",
  "North Goa",
  "South Goa",
  "Ahmedabad",
  "Amreli",
  "Anand",
  "Aravalli",
  "Banaskantha",
  "Bharuch",
  "Bhavnagar",
  "Botad",
  "Chhota Udaipur",
  "Dahod",
  "Dang",
  "Devbhoomi Dwarka",
  "Gandhinagar",
  "Gir Somnath",
  "Jamnagar",
  "Junagadh",
  "Kheda",
  "Kutch",
  "Mahisagar",
  "Mehsana",
  "Morbi",
  "Narmada",
  "Navsari",
  "Panchmahal",
  "Patan",
  "Porbandar",
  "Rajkot",
  "Sabarkantha",
  "Surat",
  "Surendranagar",
  "Tapi",
  "Vadodara",
  "Valsad",
  "Ambala",
  "Bhiwani",
  "Charkhi Dadri",
  "Faridabad",
  "Fatehabad",
  "Gurugram",
  "Hisar",
  "Jhajjar",
  "Jind",
  "Kaithal",
  "Karnal",
  "Kurukshetra",
  "Mahendragarh",
  "Nuh",
  "Palwal",
  "Panchkula",
  "Panipat",
  "Rewari",
  "Rohtak",
  "Sirsa",
  "Sonipat",
  "Yamunanagar",
  "Bilaspur",
  "Chamba",
  "Hamirpur",
  "Kangra",
  "Kinnaur",
  "Kullu",
  "Lahaul and Spiti",
  "Mandi",
  "Shimla",
  "Sirmaur",
  "Solan",
  "Una",
  "Jammu",
  "Samba",
  "Kathua",
  "Udhampur",
  "Rajouri",
  "Poonch",
  "Anantnag",
  "Kulgam",
  "Pulwama",
  "Shopian",
  "Srinagar",
  "Budgam",
  "Ganderbal",
  "Bokaro",
  "Chatra",
  "Deoghar",
  "Dhanbad",
  "Dumka",
  "East Singhbhum",
  "Garhwa",
  "Giridih",
  "Godda",
  "Gumla",
  "Hazaribagh",
  "Jamtara",
  "Khunti",
  "Koderma",
  "Latehar",
  "Lohardaga",
  "Pakur",
  "Palamu",
  "Ramgarh",
  "Ranchi",
  "Sahebganj",
  "Seraikela Kharsawan",
  "Simdega",
  "West Singhbhum",
  "Bagalkot",
  "Ballari",
  "Belagavi",
  "Bengaluru Rural",
  "Bengaluru Urban",
  "Bidar",
  "Chamarajanagar",
  "Chikballapur",
  "Chikkamagaluru",
  "Chitradurga",
  "Dakshina Kannada",
  "Davanagere",
  "Dharwad",
  "Gadag",
  "Hassan",
  "Haveri",
  "Kalaburagi",
  "Kodagu",
  "Kolar",
  "Koppal",
  "Mandya",
  "Mysuru",
  "Raichur",
  "Ramanagara",
  "Shivamogga",
  "Tumakuru",
  "Udupi",
  "Uttara Kannada",
  "Vijayapura",
  "Yadgir",
  "Alappuzha",
  "Ernakulam",
  "Idukki",
  "Kannur",
  "Kasaragod",
  "Kollam",
  "Kottayam",
  "Kozhikode",
  "Malappuram",
  "Palakkad",
  "Pathanamthitta",
  "Thiruvananthapuram",
  "Thrissur",
  "Wayanad",
  "Agar Malwa",
  "Alirajpur",
  "Anuppur",
  "Ashoknagar",
  "Balaghat",
  "Barwani",
  "Betul",
  "Bhind",
  "Bhopal",
  "Burhanpur",
  "Chhatarpur",
  "Chhindwara",
  "Damoh",
  "Datia",
  "Dewas",
  "Dhar",
  "Dindori",
  "Guna",
  "Gwalior",
  "Harda",
  "Hoshangabad",
  "Indore",
  "Jabalpur",
  "Jhabua",
  "Katni",
  "Khandwa",
  "Khargone",
  "Mandla",
  "Mandsaur",
  "Morena",
  "Narsinghpur",
  "Neemuch",
  "Panna",
  "Raisen",
  "Rajgarh",
  "Ratlam",
  "Rewa",
  "Sagar",
  "Satna",
  "Sehore",
  "Seoni",
  "Shahdol",
  "Shajapur",
  "Sheopur",
  "Shivpuri",
  "Sidhi",
  "Singrauli",
  "Tikamgarh",
  "Ujjain",
  "Umaria",
  "Vidisha",
  "Ahmednagar",
  "Akola",
  "Amravati",
  "Aurangabad",
  "Beed",
  "Bhandara",
  "Buldhana",
  "Chandrapur",
  "Dhule",
  "Gadchiroli",
  "Gondia",
  "Hingoli",
  "Jalgaon",
  "Jalna",
  "Kolhapur",
  "Latur",
  "Mumbai City",
  "Mumbai Suburban",
  "Nagpur",
  "Nanded",
  "Nandurbar",
  "Nashik",
  "Osmanabad",
  "Palghar",
  "Parbhani",
  "Pune",
  "Raigad",
  "Ratnagiri",
  "Sangli",
  "Satara",
  "Sindhudurg",
  "Solapur",
  "Thane",
  "Wardha",
  "Washim",
  "Yavatmal",
  "Bishnupur",
  "Chandel",
  "Churachandpur",
  "Imphal East",
  "Imphal West",
  "Jiribam",
  "Kakching",
  "Kamjong",
  "Kangpokpi",
  "Noney",
  "Pherzawl",
  "Senapati",
  "Tamenglong",
  "Tengnoupal",
  "Thoubal",
  "Ukhrul",
  "East Garo Hills",
  "East Jaintia Hills",
  "East Khasi Hills",
  "North Garo Hills",
  "Ri Bhoi",
  "South Garo Hills",
  "South West Garo Hills",
  "South West Khasi Hills",
  "West Garo Hills",
  "West Jaintia Hills",
  "West Khasi Hills",
  "Aizawl",
  "Champhai",
  "Hnahthial",
  "Khawzawl",
  "Kolasib",
  "Lawngtlai",
  "Lunglei",
  "Mamit",
  "Saiha",
  "Serchhip",
  "Dimapur",
  "Kiphire",
  "Kohima",
  "Longleng",
  "Mokokchung",
  "Mon",
  "Peren",
  "Phek",
  "Tuensang",
  "Wokha",
  "Zunheboto",
  "Angul",
  "Balangir",
  "Balasore",
  "Bargarh",
  "Bhadrak",
  "Boudh",
  "Cuttack",
  "Deogarh",
  "Dhenkanal",
  "Gajapati",
  "Ganjam",
  "Jagatsinghpur",
  "Jajpur",
  "Jharsuguda",
  "Kalahandi",
  "Kandhamal",
  "Kendrapara",
  "Kendujhar",
  "Khordha",
  "Koraput",
  "Malkangiri",
  "Mayurbhanj",
  "Nabarangpur",
  "Nayagarh",
  "Nuapada",
  "Puri",
  "Rayagada",
  "Sambalpur",
  "Subarnapur",
  "Sundargarh",
  "Amritsar",
  "Barnala",
  "Bathinda",
  "Faridkot",
  "Fatehgarh Sahib",
  "Fazilka",
  "Ferozepur",
  "Gurdaspur",
  "Hoshiarpur",
  "Jalandhar",
  "Kapurthala",
  "Ludhiana",
  "Mansa",
  "Moga",
  "Muktsar",
  "Pathankot",
  "Patiala",
  "Rupnagar",
  "Sangrur",
  "Shaheed Bhagat Singh Nagar",
  "Sri Muktsar Sahib",
  "Tarn Taran",
  "Ajmer",
  "Alwar",
  "Banswara",
  "Baran",
  "Barmer",
  "Bharatpur",
  "Bhilwara",
  "Bikaner",
  "Bundi",
  "Chittorgarh",
  "Churu",
  "Dausa",
  "Dholpur",
  "Dungarpur",
  "Hanumangarh",
  "Jaipur",
  "Jaisalmer",
  "Jalore",
  "Jhalawar",
  "Jhunjhunu",
  "Jodhpur",
  "Karauli",
  "Kota",
  "Nagaur",
  "Pali",
  "Pratapgarh",
  "Rajsamand",
  "Sawai Madhopur",
  "Sikar",
  "Sirohi",
  "Sri Ganganagar",
  "Tonk",
  "Udaipur",
  "Ariyalur",
  "Chengalpattu",
  "Chennai",
  "Coimbatore",
  "Cuddalore",
  "Dharmapuri",
  "Dindigul",
  "Erode",
  "Kallakurichi",
  "Kancheepuram",
  "Kanyakumari",
  "Karur",
  "Krishnagiri",
  "Madurai",
  "Mayiladuthurai",
  "Nagapattinam",
  "Namakkal",
  "Nilgiris",
  "Perambalur",
  "Pudukkottai",
  "Ramanathapuram",
  "Ranipet",
  "Salem",
  "Sivaganga",
  "Tenkasi",
  "Thanjavur",
  "Theni",
  "Thoothukudi",
  "Tiruchirappalli",
  "Tirunelveli",
  "Tirupathur",
  "Tiruppur",
  "Tiruvallur",
  "Tiruvannamalai",
  "Tiruvarur",
  "Vellore",
  "Viluppuram",
  "Virudhunagar",
  "Adilabad",
  "Bhadradri Kothagudem",
  "Hyderabad",
  "Jagtial",
  "Jangaon",
  "Jayashankar Bhupalpally",
  "Jogulamba Gadwal",
  "Kamareddy",
  "Karimnagar",
  "Khammam",
  "Komaram Bheem",
  "Mahabubabad",
  "Mahabubnagar",
  "Mancherial",
  "Medak",
  "Medchal Malkajgiri",
  "Nagarkurnool",
  "Nalgonda",
  "Nirmal",
  "Nizamabad",
  "Peddapalli",
  "Rajanna Sircilla",
  "Rangareddy",
  "Sangareddy",
  "Siddipet",
  "Suryapet",
  "Vikarabad",
  "Wanaparthy",
  "Warangal Rural",
  "Warangal Urban",
  "Yadadri Bhuvanagiri",
  "Dhalai",
  "Gomati",
  "Khowai",
  "North Tripura",
  "Sepahijala",
  "South Tripura",
  "Unakoti",
  "West Tripura",
  "Agra",
  "Aligarh",
  "Ambedkar Nagar",
  "Amethi",
  "Amroha",
  "Auraiya",
  "Ayodhya",
  "Azamgarh",
  "Baghpat",
  "Bahraich",
  "Ballia",
  "Balrampur",
  "Banda",
  "Barabanki",
  "Bareilly",
  "Basti",
  "Bhadohi",
  "Bijnor",
  "Budaun",
  "Bulandshahr",
  "Chandauli",
  "Chitrakoot",
  "Deoria",
  "Etah",
  "Etawah",
  "Farrukhabad",
  "Fatehpur",
  "Firozabad",
  "Gautam Buddh Nagar",
  "Ghaziabad",
  "Ghazipur",
  "Gonda",
  "Gorakhpur",
  "Hamirpur",
  "Hapur",
  "Hardoi",
  "Hathras",
  "Jalaun",
  "Jaunpur",
  "Jhansi",
  "Kannauj",
  "Kanpur Dehat",
  "Kanpur Nagar",
  "Kasganj",
  "Kaushambi",
  "Kushinagar",
  "Lakhimpur Kheri",
  "Lalitpur",
  "Lucknow",
  "Maharajganj",
  "Mahoba",
  "Mainpuri",
  "Mathura",
  "Mau",
  "Meerut",
  "Mirzapur",
  "Moradabad",
  "Muzaffarnagar",
  "Pilibhit",
  "Pratapgarh",
  "Prayagraj",
  "Raebareli",
  "Rampur",
  "Saharanpur",
  "Sambhal",
  "Sant Kabir Nagar",
  "Shahjahanpur",
  "Shamli",
  "Shrawasti",
  "Siddharthnagar",
  "Sitapur",
  "Sonbhadra",
  "Sultanpur",
  "Unnao",
  "Varanasi",
  "Almora",
  "Bageshwar",
  "Chamoli",
  "Champawat",
  "Dehradun",
  "Haridwar",
  "Nainital",
  "Pauri Garhwal",
  "Pithoragarh",
  "Rudraprayag",
  "Tehri Garhwal",
  "Udham Singh Nagar",
  "Uttarkashi",
  "Alipurduar",
  "Bankura",
  "Birbhum",
  "Cooch Behar",
  "Dakshin Dinajpur",
  "Darjeeling",
  "Hooghly",
  "Howrah",
  "Jalpaiguri",
  "Jhargram",
  "Kalimpong",
  "Kolkata",
  "Malda",
  "Murshidabad",
  "Nadia",
  "North 24 Parganas",
  "Paschim Bardhaman",
  "Paschim Medinipur",
  "Purba Bardhaman",
  "Purba Medinipur",
  "Purulia",
  "South 24 Parganas",
  "Uttar Dinajpur",
  "Nicobar",
  "North and Middle Andaman",
  "South Andaman",
  "Lakshadweep",
  "Karaikal",
  "Mahe",
  "Puducherry",
  "Yanam",
];

const generateSitemap = async () => {
  const sitemapStream = new SitemapStream({
    hostname: "https://www.janusooh.com",
  });
  const writeStream = createWriteStream(
    path.join(__dirname, "public", "sitemap.xml")
  );

  sitemapStream.pipe(writeStream);

  // Write static routes to the sitemap
  routes.forEach((route) => {
    sitemapStream.write(route);
  });

  // Fetch and write dynamic routes from multiple APIs

  // const productRoutes1 = await fetchRoutesFromAPI(apidata1, StateUrl);
  // const productRoutes2 = await fetchRoutesFromAPI(apidata2, CityUrl);
  const productRoutes3 = await fetchRoutesFromAPI(apidata1, CategoryUrl);
  const productRoutes4 = await fetchRoutesFromAPI(apidata3, BlogsUrl);

  // static
  // STATES URLS
  const OutdoorRoutes = OutdoorAdvertisingStates(states);
  const MetroRoutes = MetroAdvertisingStates(states);
  const AirportRoutes = AirportBrandingStates(states);
  const MallRoutes = MallBrandingStates(states);
  const InflightRoutes = InflightBrandingStates(states);
  const TransitMediaRoutes = TransitMediaStates(states);
  const reversestateRoutes = updateReverseStateUrls(states);
  // CITIES URLS
  const OutdoorCitiesRoutes = OutdoorCityUrls(cities);
  const MetroCityRoutes = MetroCitiesUrls(cities);
  const AirportCityRoutes = AirportCitiesUrls(cities);
  const MallCityRoutes = MallCitiesUrls(cities);
  const InflightCityRoutes = InflightCitiesUrls(cities);
  const TransitMediaCityRoutes = TransitMediaUrls(cities);

  const allProductRoutes = [
    // ...productRoutes1,
    // ...productRoutes2,

    // STATES
    ...OutdoorRoutes,
    ...MetroRoutes,
    ...AirportRoutes,
    ...MallRoutes,
    ...InflightRoutes,
    ...TransitMediaRoutes,
    ...reversestateRoutes,
    // CITIES
    ...OutdoorCitiesRoutes,
    ...MetroCityRoutes,
    ...AirportCityRoutes,
    ...MallCityRoutes,
    ...InflightCityRoutes,
    ...TransitMediaCityRoutes,
    ...productRoutes3,
    ...productRoutes4,
  ];

  allProductRoutes.forEach((route) => {
    sitemapStream.write(route);
  });

  sitemapStream.end();

  await streamToPromise(sitemapStream).then((sm) => sm.toString());
};

generateSitemap()
  .then(() => {
    console.log("Sitemap generated successfully!");
  })
  .catch((err) => {
    console.error("Error generating sitemap:", err);
  });
