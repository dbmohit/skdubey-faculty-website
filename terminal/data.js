/* =====================================================================
   WEBSITE CONTENT  —  EDIT THIS FILE TO UPDATE THE WEBSITE
   ---------------------------------------------------------------------
   Every piece of text on the site lives here. You never need to touch
   index.html or script.js to change details.

   How to edit:
     • Change the text between the quotes "  ".
     • To ADD an item, copy an existing line (including its comma) and
       paste it below, then change the text.
     • To REMOVE an item, delete its whole line.
     • You may use simple HTML inside text, e.g. <b>bold</b>, <i>italic</i>.
     • Save the file and refresh the browser.
   ===================================================================== */

const SITE = {

  /* ---------- 1. BASIC PROFILE (top banner + intro) ---------- */
  profile: {
    name:        "Dr. Sarvesh Kumar Dubey",
    designation: "Associate Professor",
    department:  "Centre for Atmospheric Sciences",
    institute:   "Indian Institute of Technology Delhi",
    photo:       "images/profile-photo.jpeg",
  },

  /* ---------- 2. ABOUT (one string per paragraph) ---------- */
  about: [
    "Sarvesh Kumar Dubey is an Associate Professor at the Centre for Atmospheric Sciences, IIT Delhi (from June 2026). He joined CAS as an Assistant Professor in June 2019. His research primarily focuses on advancing atmospheric modeling through numerical and data-driven frameworks, with particular emphasis on understanding multi-scale interactions in the tropical atmosphere. His work integrates theoretical modeling, numerical experimentation, and observational analysis to explore the energy budget and nonlinear scale interactions across phenomena such as intraseasonal oscillations, the Indian summer monsoon, ENSO, synoptic systems, and organized convection.",
    "During his doctoral and postdoctoral research, he contributed to the development of advanced global modeling frameworks aimed at improving the representation of atmospheric dynamics in Earth System Models. At IIT Delhi, his group continues to bridge large-scale modeling and data-driven diagnostics to address fundamental questions in tropical meteorology and climate variability.",
  ],

  /* ---------- 3. RESEARCH GROUP BOX ---------- */
  group: {
    name: "TropX Research Group",
    text: "For more details on our ongoing projects, publications, and team members, please visit our research group webpage.",
    url:  "https://tropx.iitd.ac.in",
    logo: "images/tropx-logo.jpg",
  },

  /* ---------- 4. PROFILE LINKS (buttons under the photo) ---------- */
  links: [
    { label: "Google Scholar", url: "https://scholar.google.co.in/citations?user=Z5Tkv24AAAAJ&hl=en&oi=sra", icon: "images/google-scholar.png" },
    { label: "ORCID",          url: "https://orcid.org/0000-0003-3454-6864",                               icon: "images/orcid.png" },
    { label: "ResearchGate",   url: "https://www.researchgate.net/profile/Sarvesh_Dubey2",                 icon: "" },
  ],

  /* ---------- 5. RESEARCH INTERESTS ---------- */
  interests: [
    "Atmospheric Model Development",
    "Numerical Weather Prediction",
    "Observational Analysis",
    "Tropical Meteorology",
  ],

  /* ---------- 6. POSITIONS HELD (newest first) ---------- */
  positions: [
    { period: "June 2026 – present",   role: "Associate Professor",      place: "Centre for Atmospheric Sciences, IIT Delhi, New Delhi, India" },
    { period: "June 2019 – June 2026", role: "Assistant Professor",      place: "Centre for Atmospheric Sciences, IIT Delhi, New Delhi, India" },
    { period: "Aug 2018 – June 2019",  role: "DST INSPIRE Faculty",      place: "Earth and Climate Science, IISER Pune, India" },
    { period: "Apr 2014 – July 2018",  role: "Post-Doctoral Fellow",     place: "EOAS, Florida State University, Tallahassee, Florida, USA" },
    { period: "Nov 2013 – Jan 2014",   role: "Research Associate",       place: "Centre for Atmospheric Sciences, IIT Delhi" },
    { period: "Aug 2010 – Oct 2013",   role: "Senior Research Fellow",   place: "Centre for Atmospheric Sciences, IIT Delhi" },
    { period: "Jan 2008 – July 2010",  role: "Junior Research Fellow",   place: "Department of Mathematics, IIT Delhi" },
  ],

  /* ---------- 7. EDUCATION ---------- */
  education: [
    { year: "2014", degree: "Ph.D. in Mathematics",                place: "IIT Delhi, New Delhi, India" },
    { year: "2006", degree: "M.Sc. in Mathematics",                place: "Deen Dayal Upadhyaya Gorakhpur University, Uttar Pradesh, India" },
    { year: "2004", degree: "B.Sc. in Mathematics and Physics",    place: "Deen Dayal Upadhyaya Gorakhpur University, Uttar Pradesh, India" },
  ],

  /* ---------- 8. JOURNAL PUBLICATIONS (newest first) ----------
     Put the full reference in "text". Add a "link" (DOI / URL) to make
     a "View paper" button appear; leave it "" if there is none.        */
  journals: [
    { text: "M. Chandragiri, <b>S. Dubey</b>, S. Roy, and J. George, 2026: Formulation of background error covariance matrix in data assimilation and its impact on prediction of very heavy rainfall over Indian region during South West monsoon season. <i>Meteorol. Atmos. Phys.</i>, 138, 21.", link: "https://doi.org/10.1007/s00703-026-01124-z" },
    { text: "G. Suresh, <b>S. Dubey</b>, and N. Karmakar, 2025: Understanding rapid intensification of tropical cyclones in the Bay of Bengal through energetics perspective. <i>J. Geophys. Res. Atmos.</i>, 130, e2025JD044489.", link: "https://doi.org/10.1029/2025JD044489" },
    { text: "D. Paul, <b>S. Dubey</b>, and W. Cui, 2025: Mesoscale convective systems over South Asia: Unraveling climatology, land-ocean differences and environmental drivers. <i>Clim. Dyn.</i>, 63, 419.", link: "https://doi.org/10.1007/s00382-025-07844-z" },
    { text: "R. Dhishana, <b>S. Dubey</b>, R. Singh and S. Das, 2025: Characteristics of spectral energetics during contrasting rainfall years in Central India. <i>Theor. Appl. Climatol.</i>, 156, 48.", link: "https://doi.org/10.1007/s00704-024-05235-8" },
    { text: "D. Paul and <b>S. Dubey</b>, 2025: Characterizing the South Asian summer monsoon in the Model for Prediction Across Scales through quasi-uniform and variable resolution. <i>Meteorol. Atmos. Phys.</i>, 137, 40.", link: "https://doi.org/10.1007/s00703-025-01086-8" },
    { text: "M. Chandragiri, <b>S. Dubey</b>, S. Roy, and J. George, 2024: Optimization of hybrid data assimilation for cases of very heavy rainfall events over the Indian region. <i>Bulletin of Atmospheric Science and Technology</i>, 5.", link: "https://doi.org/10.1007/s42865-024-00087-6" },
    { text: "S. Bhalachandran, D. R. Chavas, F. D. Marks Jr., <b>S. Dubey</b>, A. Shreevastava, and T. N. Krishnamurti, 2020: Characterizing the energetics of vortex-scale and sub-vortex-scale asymmetries during tropical cyclone rapid intensity changes. <i>J. Atmos. Sci.</i>, 77, 315–336.", link: "https://doi.org/10.1175/JAS-D-19-0067.1" },
    { text: "<b>S. Dubey</b> and V. Misra, 2019: Understanding the interannual variations of the zonal mean Indian summer monsoon seasonal rainfall. <i>Clim. Dyn.</i>, 53, 5547–5559.", link: "https://doi.org/10.1007/s00382-019-04881-3" },
    { text: "<b>S. Dubey</b>, T. N. Krishnamurti and V. Kumar, 2018: On scale interactions between the MJO and synoptic scale. <i>Q. J. R. Meteorol. Soc.</i>, 144, 2727–2747.", link: "https://doi.org/10.1002/qj.3400" },
    { text: "T. N. Krishnamurti, <b>S. Dubey</b>, V. Kumar, R. Deepa and A. Bhardwaj, 2017: Scale interaction during an extreme rain event over southeast India. <i>Q. J. R. Meteorol. Soc.</i>, 143, 1442–1458.", link: "https://doi.org/10.1002/qj.3016" },
    { text: "T. N. Krishnamurti, D. K. Sahu, V. Kumar, R. Krishnamurti, T. Ghosh, A. Simon, A. Thomas and <b>S. Dubey</b>, 2017: Extreme orographic rains from streams of moist marine layer wind systems with a possible geoengineering application. <i>Int. J. Hydro.</i>, 7, 1–15.", link: "https://doi.org/10.15406/ijh.2017.01.00039" },
    { text: "<b>S. Dubey</b>, T. Dubos, F. Hourdin and H. Upadhyaya, 2015: On the inter-comparison of two tracer transport schemes on icosahedral grids. <i>Appl. Math. Model.</i>, 39, 4828–4847.", link: "https://doi.org/10.1016/j.apm.2015.04.015" },
    { text: "T. Dubos, <b>S. Dubey</b>, M. Tort, R. Mittal, Y. Meurdesoif and F. Hourdin, 2015: DYNAMICO-1.0, an icosahedral hydrostatic dynamical core designed for consistency and versatility. <i>Geosci. Model Dev.</i>, 8, 3131–3150.", link: "https://doi.org/10.5194/gmd-8-3131-2015" },
    { text: "<b>S. Dubey</b>, R. Mittal and P. Lauritzen, 2014: A flux-form conservative semi-Lagrangian multitracer transport scheme (FF-CSLAM) for icosahedral-hexagonal grids. <i>J. Adv. Model. Earth Syst.</i>, 6, 332–356.", link: "https://doi.org/10.1002/2013MS000259" },
    { text: "P. Lauritzen, P. Ullrich, C. Jablonowski, P. Bosler, D. Calhoun, A. Conley, T. Enomoto, L. Dong, <b>S. Dubey</b>, O. Guba, A. Hansen, E. Kaas, J. Kent, M. Prather, D. Reinert, V. Shashkin, W. Skamarock, B. Sørensen, M. Taylor and M. Tolstykh, 2014: A standard test case suite for two-dimensional linear transport on the sphere: Results from a collection of state-of-the-art schemes. <i>Geosci. Model Dev.</i>, 7, 105–145.", link: "https://doi.org/10.5194/gmd-7-105-2014" },
  ],

  /* ---------- 9. CONFERENCE PUBLICATIONS (newest first) ---------- */
  conferences: [
    { text: "<b>S. Dubey</b> and T. N. Krishnamurti, 2018: On the maintenance of large anomaly fields during a record-breaking monsoon drought via scale interactions. <i>33rd Conference on Hurricanes and Tropical Meteorology</i>, Ponte Vedra, Florida, USA." },
    { text: "S. Bhalachandran, T. N. Krishnamurti, and <b>S. Dubey</b>, 2018: Investigation of the rapid intensity changes of landfalling Hurricanes Harvey and Irma (2017) through the formalism of scale interactions. <i>33rd Conference on Hurricanes and Tropical Meteorology</i>, Ponte Vedra, Florida, USA." },
    { text: "T. Dubos and <b>S. Dubey</b>, 2017: Hamiltonian approaches to spatial and temporal discretization of fully compressible equations. <i>EGU General Assembly</i>, Vienna, Austria." },
    { text: "<b>S. Dubey</b> and T. N. Krishnamurti, 2016: On the nonlinear kinetic energy transfer between MJO and synoptic scales. <i>Fourth Symposium on Prediction of the Madden-Julian Oscillation: Processes, Prediction and Impact</i>, New Orleans, USA." },
    { text: "<b>S. Dubey</b>, T. N. Krishnamurti, A. Bhardwaj, and A. Thomas, 2015: Using multipliers that statistically tag errors arising from individual terms of model physics and dynamics in a forecast model for reduction of systematic errors. <i>95th Annual Meeting, American Meteorological Society</i>, Phoenix, Arizona, USA." },
    { text: "<b>S. Dubey</b>, T. Dubos and F. Hourdin, 2012: Slope-limited transport schemes using icosahedral hexagonal grid. <i>Solution of Partial Differential Equations on the Sphere</i>, Isaac Newton Institute for Mathematical Sciences, Cambridge, UK." },
    { text: "<b>S. Dubey</b>, T. Dubos and F. Hourdin, 2011: Positive advection schemes for icosahedral-hexagonal grids. <i>NCAR Workshop on Transport Schemes on the Sphere</i>, Boulder, USA." },
  ],

  /* ---------- 10. SPONSORED PROJECTS ----------
     Any detail you leave as "" is simply not shown.                     */
  projectsOngoing: [
    { title: "Understanding the energetics of Tropical Cyclones in the Bay of Bengal to predict rapid intensity changes and provide future projections in the warming climate scenario", pi: "Sarvesh Kumar Dubey", agency: "Ministry of Earth Sciences (MoES)", budget: "", duration: "" },
    { title: "Developing an ML-driven Super Ensemble for NCMRWF's Ensemble Prediction System", pi: "Sarvesh Kumar Dubey", agency: "Ministry of Earth Sciences (MoES)", budget: "", duration: "" },
  ],
  projectsCompleted: [
    { title: "Geophysical Flow Simulations with Geodesic Hexagonal Meshes", pi: "Sarvesh Kumar Dubey", agency: "Department of Science and Technology (DST)", budget: "Rs. 35.0 lakhs", duration: "2018–2023" },
    { title: "Low Pressure Systems (LPSs) and their nonlinear interaction with other scales in atmosphere through the lens of Scale Energetics", pi: "Sarvesh Kumar Dubey", agency: "ISRO through IITD-STC", budget: "Rs. 18.70 lakhs", duration: "2021–2023" },
    { title: "Extension of spectral scale energetics to study nonlinear scale interactions in nonhydrostatic regime", pi: "Sarvesh Kumar Dubey", agency: "Science and Engineering Research Board (SERB)", budget: "Rs. 15.0 lakhs", duration: "2020–2022" },
    { title: "Application of Numerical Weather Prediction Models to Identify Probable Sites Suitable for Accumulation of Locust Swarms and Determine their Flying Path", pi: "", agency: "FIRP scheme of IRD, IIT Delhi", budget: "", duration: "" },
    { title: "Climate model development with an emphasis on tropics using superparametrization, scale energetics and dynamical core “DYNAMICO”", pi: "", agency: "Seed Grant, IRD, IIT Delhi", budget: "", duration: "" },
    { title: "Equipment Matching Grant to Main Project No. MI02058", pi: "", agency: "IRD, IIT Delhi", budget: "", duration: "" },
  ],

  /* ---------- 11. STUDENTS ---------- */
  phdStudents: [
    "Dhishana P. R. (joined July 2020)",
    "Murali Krishna (joined January 2021; jointly with Dr. Somnath Baidya Roy, CAS and Dr. John P. George, NCMRWF)",
    "Debjit Paul (joined July 2021)",
    "Alice Jeeva P. J. (joined January 2023; joint supervision with Prof. Sandeep Sukumaran)",
    "Debanjan Paul (joined 2024; joint supervision with Prof. Ravi K. Kunchala)",
    "Digvijay Kumar Singh (joined 2025; joint supervision with Prof. Ravi K. Kunchala)",
    "Avijnan Das (joined 2025)",
    "Pramod Kumar (joined 2025)",
  ],
  mtechStudents: [
    { year: "2023–2024", name: "Alakh Niranjan Chaturvedi",       thesis: "Evaluating the Dynamical Core of DYNAMICO model" },
    { year: "2023–2024", name: "Gokul Suresh (IISER Tirupati)",    thesis: "Comparative Study of Energy Budget Analysis Between Rapidly Intensified and non Rapidly Intensified Tropical Cyclones over Bay of Bengal Region" },
    { year: "2022–2023", name: "Shabeena Shahnawaz",               thesis: "Forecasting Intensity of Thunderstorm using Lightning Detection System Data with AI/ML Techniques" },
    { year: "2022–2023", name: "Bharath Krishnan U (IISER Pune)",  thesis: "Investigation of in-scale and mean flow interactions of MRG waves using spectral energetics framework" },
    { year: "2020–2021", name: "Abhinav Sharma",                   thesis: "An investigation of the multi-scale interactions in the Indian summer monsoon" },
  ],
  projectStaff: [
    "Siva Prasad Vanum",
    "Shasikanta Maurya",
    "Navyasree Nalluri",
  ],

  /* ---------- 12. COURSES TAUGHT (newest first) ---------- */
  courses: [
    { year: "2023–2024", list: ["Mathematical and Computational Methods for Atmosphere and Oceanic Sciences (ASL732)", "Advanced Data Analysis for Weather and Climate (ASP820)"] },
    { year: "2022–2023", list: ["Advanced Data Analysis for Weather and Climate (ASP820)", "Earth System Modeling (ASL761)"] },
    { year: "2021–2022", list: ["Advanced Data Analysis for Weather and Climate (ASP820)", "Earth System Modeling (ASL761)"] },
    { year: "2020–2021", list: ["Advanced Data Analysis for Weather and Climate (ASP820)", "Earth System Modeling (ASL761)"] },
    { year: "2019–2020", list: ["Earth System Modeling (ASL761)"] },
  ],

  /* ---------- 13. CONTACT ---------- */
  contact: {
    address: [
      "Centre for Atmospheric Sciences",
      "Indian Institute of Technology Delhi",
      "Hauz Khas, New Delhi 110 016, India",
    ],
    email: "skdubey@cas.iitd.ac.in",
    phone: "+91-11-2654-8417",
  },

  /* ---------- 14. FOOTER ---------- */
  lastUpdated: "November 2026",
};
