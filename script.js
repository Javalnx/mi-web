const script = document.createElement("script");
script.src = "https://cdn.jsdelivr.net/npm/chart.js";
document.head.appendChild(script);
document.addEventListener("DOMContentLoaded", () => {
    const onboardingList = document.getElementById("onboardingList");
    const generatePlanBtn = document.getElementById("generatePlan");
    const showAllBtn = document.getElementById("showAll");

    // Datos de onboarding
   const onboardingData = [
    {
        category: "Initial Onboarding (first 90 days)",
        subcategories: [
            {
                name: "Admin, IT, Basic equipment",
                activities: [
        { topic: "Computer", activity: "Identify and procure prior to first day", notes: "", done: false },
        { topic: "Computer operating system", activity: "IT load onto computer if applicable", notes: "", done: false },
        { topic: "Adobe Professional", activity: "IT load onto computer if applicable", notes: "", done: false },
        { topic: "Visio", activity: "IT load onto computer if applicable", notes: "", done: false },
        { topic: "CAD (Primarily for AE). Readers for other positions", activity: "IT load onto computer if applicable", notes: "", done: false },
        { topic: "VPN", activity: "IT setup. Test on first day", notes: "", done: false },
        { topic: "Email setup & Test", activity: "IT load onto computer if applicable", notes: "", done: false },
        { topic: "Access to folders, shortcuts & links to critical sites and databases", activity: "Corporate and Myswagelok websites. ServiceNow", notes: "", done: false },
        { topic: "Shortcuts to critical SSC folders", activity: "Local databases, job logs", notes: "", done: false },
        { topic: "Load and add ERP software", activity: "SAP, or other", notes: "", done: false },
        { topic: "Load ticketing/opportunity management/CRM systems", activity: "Zendesk, Pipedrive, Salesforce, etc", notes: "", done: false },
        { topic: "Work Space", activity: "Identify and create workspace prior to first day", notes: "", done: false },
        { topic: "Home office equipment (If applicable)", activity: "Duplicate in-office setup if possible", notes: "", done: false },
        { topic: "Solidworks", activity: "IT load onto computer if applicable", notes: "", done: false },
        { topic: "Desk/Mobile Phone", activity: "Setup per SSC policy. Communicate expectations", notes: "", done: false },
        { topic: "Personal protective equipment (Coveralls, safety glasses, hard hat, safety shoes, etc…)", activity: "Applicable per specialization and region", notes: "", done: false },
        { topic: "H2S monitor", activity: "Applicable per specialization and region", notes: "", done: false },
        { topic: "Site Access Requirements (TWIC, Site training, Certifications, Identification)", activity: "Applicable per specialization and region", notes: "", done: false },
        { topic: "Passport (if applicable)", activity: "Applicable per specialization and region", notes: "", done: false },
        { topic: "Global Entry (if applicable)", activity: "Applicable per specialization and region", notes: "", done: false }
   ]
            },
            {
                name: "HR",
                activities: [        { topic: "Handbooks & policies (CS policy. Manager to identify all applicable SSC and Corporate policies)", activity: "Consolidated list with links selected from linked document in next column", notes: "https://swagelok.sharepoint.com/sites/SSC/Manage/Forms/AllItems.aspx?id=%2Fsites%2FSSC%2FManage%2FDistributor%20Policy%20overview%5FRev%200ct%202024%2Epdf&parent=%2Fsites%2FSSC%2FManage", done: false },
        { topic: "Review Swagelok Distributor Policies", activity: "", notes: "", done: false },
        { topic: "Review Role Responsibilities", activity: "As responsibilities increase, add them to your original job description", notes: "", done: false },
        { topic: "FE/AE/TS Onboarding Document review", activity: "", notes: "", done: false },
        { topic: "30-60-90 day meeting", activity: "Meet with manager at these important onboarding milestones", notes: "", done: false },
        { topic: "Goal setting", activity: "Establish goals and align with manager during weekly 1:1s", notes: "", done: false },
        { topic: "Engineering Licensure rules/regulation", activity: "Establish if licensure is within goal of individual and matches SSC strategy", notes: "", done: false },
        { topic: "Personality Test that others at SSC go through", activity: "PRINT, Myers & Briggs survey to better understand your deeper motivations and how it impacts your working style", notes: "", done: false },
        { topic: "Visual Acuity Test", activity: "", notes: "", done: false },
        { topic: "Set call with Career Coach", activity: "", notes: "", done: false },
        { topic: "Work instructions", activity: "In an ongoing fashion, create work instructions for each of your responsibilities", notes: "", done: false },
        { topic: "Strengthsfinder", activity: "", notes: "", done: false },
        { topic: "Watterson Assessment", activity: "", notes: "", done: false }
    ]
            },
            {
                name: "Introduction to Swagelok",
                activities: [{ topic: "Who is Swagelok?", activity: "See the Welcome Presentation to learn more about Swagelok and the customers we serve at GPST", notes: "S:\\Management\\Marketing & Communication Plan\\Marketing Communications\\Welcome to Swagelok for", done: false },
    { topic: "Swagelok History and values PDF (BELGN packet)", activity: "", notes: "", done: false },
    { topic: "Our Core Values Drive Us YouTube video", activity: "See this video to understand more about Swagelok and the values that drive us", notes: "https://www.youtube.com/watch?v=G8LYe3EMOIY", done: false },
    { topic: "Current corporate and SSC strategy documents", activity: "powerpoint, pdf, etc...", notes: "", done: false },
    { topic: "Knowing and Living the Swagelok Brand presentation", activity: "This presentation demonstrates the ways in which each associate contributes to the Swagelok brand", notes: "http://iswagelok/sites/DistributorCenter/GCN/_layouts/PowerPoint.aspx?PowerPointView=EditView&PresentationId=", done: false },
    { topic: "Brand Guidelines", activity: "See the guidelines that will enable you to develop properly branded materials and content", notes: "http://iswagelok/sites/SwagelokCompany/Documents/BrandGuidelines.pdf", done: false },
    { topic: "Brand templates", activity: "See list of brand approved templates for print and digital content", notes: "http://iswagelok/sites/SwagelokCompany/Pages/Templates.aspx", done: false },
    { topic: "Email signature", activity: "Create your email signature from the branded template and add it to your Outlook signature", notes: "S:\\Sales and Marketing\\Marcom", done: false },
    { topic: "Tour Swagelok SSC Local Mini-site", activity: "Your SSC’s website", notes: "", done: false },
    { topic: "Read Swagelok Strategies", activity: "Swagelok’s Strategic Plan", notes: "", done: false },
    { topic: "Swagelok Market Plans", activity: "Review each market plan and info", notes: "", done: false },
    { topic: "General Markets", activity: "Review General Market Plan and Info", notes: "", done: false },
    { topic: "Review Swagelok’s Leadership Team and How They are Structured", activity: "Swagelok Exec Team Bios", notes: "", done: false },
    { topic: "Review Current corporate org structure", activity: "", notes: "", done: false },
    { topic: "Tour Sales and Service Resource Center (SSRC)", activity: "", notes: "", done: false },
    { topic: "Swagelok History Presentation", activity: "", notes: "", done: false },
    { topic: "ES Intro videos. Old FE interviews", activity: "", notes: "", done: false }
]
            },
            {
                name: "Intro to SSC",
                activities: [ { topic: "SSC Values, Mission Statement, etc", activity: "", notes: "", done: false },
                            { topic: "Local SSC powerpoint sales, CS, general presentations", activity: "", notes: "", done: false },
                            { topic: "1/4 turn demo", activity: "", notes: "", done: false },
                            { topic: "Have associate present 1/4 turn demo (or other presentation/demo) back to team", activity: "", notes: "", done: false },
                            { topic: "Service Area and Rules Conversation", activity: "", notes: "", done: false },
                            { topic: "Meet all departments (leader, and key individuals)", activity: "", notes: "", done: false },
                            { topic: "In-Person Product Training", activity: "", notes: "", done: false },
                            { topic: "Fitting Part Number Structure", activity: "", notes: "", done: false },
                            { topic: "Identify fitting part numbers by looking at them", activity: "", notes: "", done: false },
                            { topic: "Thread ID Kit", activity: "", notes: "", done: false },
                            { topic: "Swagelok Installation Training with internal certified trainer", activity: "", notes: "", done: false },
                            { topic: "Tube Fitting Certification", activity: "", notes: "", done: false },
                            { topic: "Pull up competitor fittings", activity: "", notes: "", done: false },
                            { topic: "Tube Fitting Re-installation Cert", activity: "", notes: "", done: false },
                            { topic: "Threaded Connection Training", activity: "", notes: "", done: false },
                            { topic: "Basic Swagelok U (TBD by SSC)", activity: "", notes: "", done: false },
                            { topic: "SSC-Specific videos (welcome videos, training videos, etc…)", activity: "", notes: "", done: false },
                            { topic: "SAP Training", activity: "", notes: "", done: false },
                            { topic: "Ride Along with each Salesman", activity: "", notes: "", done: false }
]
            },
            {
                name: "Meetings & Communities to Join",
                activities: [ { topic: "Swagelok Market Mtg - Oil, Gas & Chemical Meeting", activity: "Sign-up on SSC Resource Center (if applicable)", notes: "", done: false },
    { topic: "Swagelok Market Mtg - General Markets", activity: "Sign-up on SSC Resource Center (if applicable)", notes: "", done: false },
    { topic: "Swagelok Market Mtg - Clean Energy", activity: "Sign-up on SSC Resource Center (if applicable)", notes: "", done: false },
    { topic: "FE/AE/TS Viva Engage channels", activity: "", notes: "", done: false },
    { topic: "Specialization communities on Teams", activity: "Pin most relevant Teams", notes: "", done: false },
    { topic: "Informal Whatsapp, Groupme, Teams chats", activity: "", notes: "", done: false },
    { topic: "Application Teams Channels", activity: "", notes: "", done: false },
    { topic: "Engineering Services Quarterly Webinar", activity: "", notes: "", done: false },
    { topic: "Set up initial and recurring 1:1 meetings with immediate department, supervisor", activity: "This should be very often in the first 90 days", notes: "", done: false },
    { topic: "Set up initial and recurring 1:1 with key associates/leaders at SSC", activity: "Adjust recurrence according to criticality", notes: "", done: false },
    { topic: "Set up intro meetings to key Corporate and other SSC members", activity: "", notes: "", done: false },
    { topic: "Acquire contact list of all key personnel (SSC, Corporate, & Other)", activity: "", notes: "", done: false }
]
            }
        ]
    },
    {
        category: "Rotation to Departments",
        subcategories: [
            {
                name: "Sales",
                activities: [    { topic: "Ride along with each salesman", activity: "", notes: "", done: false },
                            { topic: "Review Sales process", activity: "", notes: "", done: false },
                            { topic: "Review Customer Relationship Management (CRM) processes & expectations", activity: "", notes: "", done: false }
]
            },
            {
                name: "Marketing",
                activities: [{ topic: "Global Communicators Network (GCN)", activity: "Join the GCN by adding yourself to the contact list, setting up alerts, and posting an intro message to the discussion board", notes: "http://iswagelok/sites/DistributorCenter/GCN/Pages/home.aspx", done: false },
                            { topic: "GCN onboarding webinar", activity: "Once you've posted an intro message, the GCN community manager will reach out to schedule an onboarding meeting", notes: "", done: false },
                            { topic: "Distributor Marketing Engine (DME)", activity: "Use the DME to access approved marketing materials and content. Request access through Flowan.", notes: "https://swagelok.screendragon.com/", done: false },
                            { topic: "Current Corporate Marketing Campaign", activity: "Verify which campaign is most currently activated. Pressure Takes Shape campaign focuses on the perception shift journey (August 2019). Complete the SwagelokU course to gain access to the materials on the DME.", notes: "Pressure Takes Shape: Sales and Service Center Toolkit Training SBUS-245", done: false },
                            { topic: "Current Corporate Marketing Campaign Toolkit", activity: "See the Pressure Takes Shape materials (August 2019)", notes: "http://iswagelok/sites/DistributorCenter/GCN/Pages/Perception-Shift-Resources.aspx", done: false }
]
            },
            {
                name: "Customer Service",
                activities: [    { topic: "General customer service training? Learn bed side manners", activity: "Learn and apply skills used by Customer Service to quickly build rapport and establish a positive tone in customer interactions", notes: "", done: false },
                            { topic: "Explain process flows at a high level (rfq, order, part entry)", activity: "", notes: "", done: false },
                            { topic: "Join customer inbound call", activity: "", notes: "", done: false },
                            { topic: "Tech Service Desk (if applicable)", activity: "", notes: "", done: false },
                            { topic: "Will Call desk (if applicable)", activity: "", notes: "", done: false }]
            },
            {
                name: "Accounting",
                activities: [    { topic: "What is accounting? Shadow", activity: "", notes: "", done: false },
                            { topic: "Cash flow and how Engineering Services/CS affects it", activity: "", notes: "", done: false },
                            { topic: "Margin", activity: "", notes: "", done: false },
                            { topic: "Standard and non-standard payment terms", activity: "", notes: "", done: false },
                            { topic: "Receivable vs Payable", activity: "", notes: "", done: false }]
            },
            {
                name: "Purchasing",
                activities: [    { topic: "What is purchasing, procurement, and a buyer?", activity: "May give insight into this customer persona", notes: "", done: false },
                            { topic: "Proper SSC procedures on RFQ and purchasing of Swagelok, 3PP, and capital equipment", activity: "", notes: "", done: false }
]
            },
            {
                name: "Warehouse",
                activities: [    { topic: "Checkout-Checkin process for parts", activity: "", notes: "", done: false },
                            { topic: "Picking", activity: "", notes: "", done: false },
                            { topic: "Safety", activity: "", notes: "General safety when a forklift is in operation in proximity and heavy loads", done: false },
                            { topic: "Capital equipment", activity: "", notes: "", done: false },
                            { topic: "Rental equipment", activity: "", notes: "", done: false }]
            },
            {
                name: "Shop",
                activities: [    { topic: "Safety", activity: "", notes: "", done: false },
                            { topic: "Appropriate PPE in all areas", activity: "", notes: "", done: false },
                            { topic: "Starting a project - Setup, rigging, design interpretation, mounting components on panel", activity: "", notes: "", done: false },
                            { topic: "Design Change/Deviation process", activity: "", notes: "", done: false },
                            { topic: "Cut, debur, face tubing", activity: "", notes: "", done: false },
                            { topic: "High production", activity: "", notes: "", done: false },
                            { topic: "Clean Room", activity: "", notes: "", done: false },
                            { topic: "Testing", activity: "", notes: "", done: false },
                            { topic: "Use other common tools", activity: "", notes: "", done: false }]
            }
        ]
    },
    {
        category: "Professional Training",
        subcategories: [
            {
                name: "Sales Skills",
                activities: [    { topic: "Sales Engagement Program", activity: "", notes: "", done: false },
                            { topic: "Mr Smith -", activity: "", notes: "", done: false },
                            { topic: "A2S Workshop", activity: "", notes: "", done: false },
                            { topic: "Sales Training consistent with sales team (Sandler, Common Sense, etc)", activity: "", notes: "", done: false },
                            { topic: "Custom Solutions Presentation Practice", activity: "Present to manager, internal teams for internal learning, then small external customer group", notes: "", done: false },
                            { topic: "Grab Sampling Presentation Practice", activity: "Present to manager, internal teams for internal learning, then small external customer group", notes: "", done: false },
                            { topic: "SSV Presentation Practice", activity: "Present to manager, internal teams for internal learning, then small external customer group", notes: "", done: false },
                            { topic: "Regulator Presentation Practice", activity: "Present to manager, internal teams for internal learning, then small external customer group", notes: "", done: false },
                            { topic: "Relief Valve Presentation Practice", activity: "Present to manager, internal teams for internal learning, then small external customer group", notes: "", done: false },
                            { topic: "Seal Support Presentation Practice", activity: "Present to manager, internal teams for internal learning, then small external customer group", notes: "", done: false },
                            { topic: "SSC-Specific Solutions Presentation Practice", activity: "Present to manager, internal teams for internal learning, then small external customer group", notes: "", done: false },
                            { topic: "The New Solution Selling Book", activity: "", notes: "", done: false },
                            { topic: "Profiting from Services Book", activity: "", notes: "", done: false }]
            },
            {
                name: "Soft Skills",
                activities: [    { topic: "Read Culture Map", activity: "", notes: "", done: false },
                            { topic: "7 Habits training", activity: "", notes: "", done: false },
                            { topic: "DISC profile", activity: "", notes: "", done: false },
                            { topic: "ARISE Report", activity: "", notes: "", done: false },
                            { topic: "Professional coaching", activity: "BetterUp, Waterson, etc", notes: "", done: false },
                            { topic: "Networking", activity: "", notes: "", done: false },
                            { topic: "Influence Without Authority", activity: "", notes: "", done: false },
                            { topic: "Maslow’s Hierarchy of Needs", activity: "", notes: "", done: false },
                            { topic: "The Four Agreements", activity: "", notes: "", done: false },
                            { topic: "Toastmasters", activity: "", notes: "", done: false },
                            { topic: "Difficult Conversations", activity: "", notes: "", done: false }]
            },
            {
                name: "Business Accumen",
                activities: [    { topic: "Global Knowledge Center (GKC)", activity: "Find important updates, materials, and join applicable groups and discussion boards", notes: "http://iswagelok/sites/DistributorCenter/Pages/default.aspx", done: false },
                            { topic: "American Productivity & Quality Center (APQC) membership", activity: "Use your Swagelok email to gain access to thousands of templates and standardized processes", notes: "https://www.apqc.org/", done: false },
                            { topic: "Networking and org membership", activity: "Seek local and corporate level memberships available through Swagelok", notes: "", done: false },
                            { topic: "Daily Oil Bulletin (Market Specific News Feed signup)", activity: "Stay informed of the top industry that we serve. Oil & Gas", notes: "https://www.dailyoilbulletin.com/", done: false },
                            { topic: "EIC Asset Map", activity: "", notes: "https://eicdata.eic.com/", done: false },
                            { topic: "Customer Personas", activity: "What are they? Which ones are relevant to focus customers", notes: "Teams - Technical Advisor Channel - 05 - About the Customer Personas", done: false },
                            { topic: "Key Product Line Key Messaging", activity: "Product Selling Points", notes: "Teams - Technical Advisor Channel - 06 - Key Product Messaging Resource", done: false },
                            { topic: "SSC Competitive Resources", activity: "Variety of Competitor Overviews", notes: "https://iswagelok/sites/DistributorCenter/GKN/Pages/Perception-Shift-Resources.aspx", done: false },
                            { topic: "Customer Value Proposition and Brand Pillars", activity: "Corporate’s Customer Value Prop", notes: "Teams - Technical Advisor Channel - 03 - Customer Value Proposition and Brand Pillars (CVP)", done: false },
                            { topic: "Porter’s 5 Forces Model", activity: "Characterizes a market before while exploring", notes: "", done: false },
                            { topic: "Meet with Global Construction team who covers local market", activity: "", notes: "", done: false }
]
            }
        ]
    },
    {
        category: "Technical Training",
        subcategories: [
            {
                name: "Advanced Product Training",
                activities: [    { topic: "Observe presentations with demo kits and learn to present to customers", activity: "", notes: "", done: false },
    { topic: "Regulator Swagelok U Courses", activity: "", notes: "", done: false },
    { topic: "Regulator General Tour of offering", activity: "", notes: "", done: false },
    { topic: "Regulator Powerpoint", activity: "", notes: "", done: false },
    { topic: "Regulator Level 1", activity: "", notes: "", done: false },
    { topic: "Regulator Level 2", activity: "", notes: "", done: false },
    { topic: "Regulator Level 3", activity: "", notes: "", done: false },
    { topic: "Orifice Sizing", activity: "", notes: "", done: false },
    { topic: "Orbital Weld Training (or learn how to operate and setup formal CP or informally)", activity: "", notes: "", done: false },
    { topic: "SSV (or other focus products)", activity: "", notes: "", done: false },
    { topic: "Relief Valves, flow curves", activity: "", notes: "", done: false },
    { topic: "HLT Training", activity: "", notes: "", done: false },
    { topic: "Silcoek", activity: "", notes: "", done: false }]
            },
            {
                name: "Calculation Tools",
                activities: [    { topic: "Regulator Flow Curve Generator", activity: "", notes: "", done: false },
    { topic: "RHP S Liquid Spreadsheet", activity: "", notes: "", done: false },
    { topic: "EDTR Regulator Flow Curves Technical Bulletin", activity: "", notes: "", done: false },
    { topic: "B31.3 Pipe Wall Thickness/Max pressure", activity: "", notes: "", done: false },
    { topic: "Volume of a Tube Spreadsheet", activity: "", notes: "", done: false },
    { topic: "Flow Rate/Volume Conversion - Composition, Temp, & Pressure Spreadsheet", activity: "", notes: "", done: false },
    { topic: "Probe Harmonics Calculator", activity: "", notes: "", done: false },
    { topic: "Stock lists for critical items at SSC (Probes, Regulators, Flowmeters, Gauges, etc…)", activity: "", notes: "", done: false },
    { topic: "AI Evaluation App", activity: "", notes: "", done: false },
    { topic: "Joule Thomson App", activity: "", notes: "", done: false },
    { topic: "Phase Diagram Tool - Composition", activity: "", notes: "", done: false },
    { topic: "Cv Calculator (Swagelok & Website)", activity: "", notes: "", done: false },
    { topic: "Combine Cv’s, Learn how to use spreadsheet or make their own", activity: "", notes: "", done: false },
    { topic: "Heat Exchanger Spreadsheet", activity: "", notes: "", done: false },
    { topic: "Thermal Loop", activity: "", notes: "", done: false },
    { topic: "Pressure loss/100ft tubing–Tube filters Manual Appendix", activity: "", notes: "", done: false }
]
            },
            {
                name: "Application Training",
                activities: [    { "topic": "Local regulations (CRN, ASME, API, PED, ATEX, Area Classification)", "activity": "", "notes": "", "done": false },
                            { "topic": "Pressure Points Presentations from Matt Dixon", "activity": "", "notes": "", "done": false },
                            { "topic": "Grab Sample Intro", "activity": "", "notes": "", "done": false },
                            { "topic": "Seal Support Intro", "activity": "", "notes": "", "done": false },
                            { "topic": "MP/HP Intro", "activity": "", "notes": "", "done": false },
                            { "topic": "Gas Distribution Intro", "activity": "", "notes": "", "done": false },
                            { "topic": "DTR/Actuation Intro", "activity": "", "notes": "", "done": false },
                            { "topic": "Swagelok Proportional valves", "activity": "Learn terminology: Blowdown, Overpressure, Cracking Pressure, Set pressure tolerances", "notes": "", "done": false },
                            { "topic": "Intro to PSV/PRV (non-Swagelok)", "activity": "Learn basics of ASME/ISO/API system design around PRV/PSVs (Vent line, minimum diameter for tee, etc…)", "notes": "", "done": false },
                            { "topic": "Capstone", "activity": "", "notes": "", "done": false },
                            { "topic": "Grab Sample CP", "activity": "", "notes": "", "done": false },
                            { "topic": "MEP CP", "activity": "", "notes": "", "done": false },
                            { "topic": "GDP CP", "activity": "", "notes": "", "done": false },
                            { "topic": "MP/HP CP", "activity": "", "notes": "", "done": false },
                            { "topic": "Thermal Loop", "activity": "", "notes": "", "done": false },
                            { "topic": "ASME SECTION IX TRAINING", "activity": "", "notes": "", "done": false },
                            { "topic": "ASME Boiler Pressure Vessel Code, Section VIII", "activity": "", "notes": "", "done": false },
                            { "topic": "ASME B31.3 Training", "activity": "", "notes": "", "done": false },
                            { "topic": "ASME B31.4 Training", "activity": "", "notes": "", "done": false },
                            { "topic": "API 620 (Sizing and installation of pressure relief valves)", "activity": "", "notes": "", "done": false },
                            { "topic": "FE PASS I", "activity": "", "notes": "", "done": false },
                            { "topic": "FE PASS II", "activity": "", "notes": "", "done": false },
                            { "topic": "FE PASS III", "activity": "", "notes": "", "done": false },
                            { "topic": "FE Seal Support Training", "activity": "", "notes": "", "done": false },
                            { "topic": "FE GDP Training", "activity": "", "notes": "", "done": false },
                            { "topic": "FE GC Training", "activity": "ACE471 from Analyzer Consulting Engineers LLC, tony@analyzerschool.com", "notes": "", "done": false },
                            { "topic": "FE Grab Sample Training", "activity": "", "notes": "", "done": false },
                            { "topic": "FE MP/HP Certification", "activity": "", "notes": "", "done": false },
                            { "topic": "Hydrogen Systems", "activity": "", "notes": "", "done": false },
                            { "topic": "Oxygen Systems", "activity": "", "notes": "", "done": false },
                            { "topic": "Customer-Specific Grab Sample, MEP, Probe, GDP, DBB, or Custom offerings. Unique to SSC", "activity": "", "notes": "", "done": false }
]
            },
            {
                name: "Market Specialization",
                activities: [    { "topic": "Market-Specific regulations", "activity": "", "notes": "", "done": false },
                            { "topic": "100 Level", "activity": "", "notes": "https://swagelok.sharepoint.com/sites/SSC/SitePages/Engagement%20Catalog.aspx?xsdata=VD8MDJBf0I4NDI0IGM3ZjJhNDO4ZTlhM2AyM", "done": false },
                            { "topic": "200 Level", "activity": "", "notes": "", "done": false },
                            { "topic": "300 Level", "activity": "", "notes": "", "done": false },
                            { "topic": "400 Level", "activity": "", "notes": "", "done": false },
                            { "topic": "General Industrial - Market specific playbook", "activity": "", "notes": "", "done": false },
                            { "topic": "5 Visits to accounts critical to specific market", "activity": "", "notes": "", "done": false },
                            { "topic": "PGC training (OGC only-Tony Waters)", "activity": "", "notes": "", "done": false },
                            { "topic": "Join local Market-specific community and contribute with content", "activity": "", "notes": "", "done": false },
                            { "topic": "Join Market Communities (Viva Engage)", "activity": "", "notes": "", "done": false },
                            { "topic": "Join Market Community recurring calls", "activity": "", "notes": "", "done": false },
                            { "topic": "Attendance at Expos", "activity": "", "notes": "", "done": false },
                            { "topic": "Attendance at applicable Swagelok Regional Meetings", "activity": "", "notes": "", "done": false }
]
            }
        ]
    },
    {
        category: `"What's next?"-Advanced Experiences`,
        subcategories: [
            {
                name: "Advanced Networking",
                activities: [    { "topic": "GHQ Tour", "activity": "", "notes": "", "done": false },
                            { "topic": "Raw Materials Tour", "activity": "", "notes": "", "done": false },
                            { "topic": "Impaction tour", "activity": "", "notes": "", "done": false },
                            { "topic": "HPF tour", "activity": "", "notes": "", "done": false },
                            { "topic": "Snow Metals tour", "activity": "", "notes": "", "done": false },
                            { "topic": "Highland tour", "activity": "", "notes": "", "done": false },
                            { "topic": "Hose Group tour", "activity": "", "notes": "", "done": false },
                            { "topic": "OFC tour", "activity": "", "notes": "", "done": false },
                            { "topic": "Product Investigations Lab tour", "activity": "", "notes": "", "done": false },
                            { "topic": "New product development Lab tour", "activity": "", "notes": "", "done": false },
                            { "topic": "(4) SSC visits", "activity": "", "notes": "", "done": false },
                            { "topic": "Custom Solutions", "activity": "", "notes": "", "done": false },
                            { "topic": "Regional Event", "activity": "", "notes": "", "done": false },
                            { "topic": "Global Functional Event", "activity": "", "notes": "", "done": false }]
            },
            {
                name: "Advanced SSC Engagement",
                activities: [    { "topic": "Assist in 4 opportunities with other SSCs (find those with shared owner customers)", "activity": "", "notes": "", "done": false },
                            { "topic": "Include 4 different SSCs in own opportunities", "activity": "", "notes": "", "done": false },
                            { "topic": "Assist with 4 services outside of territory", "activity": "", "notes": "", "done": false },
                            { "topic": "Lead Service in own territory", "activity": "", "notes": "", "done": false },
                            { "topic": "Lead Service outside of territory", "activity": "", "notes": "", "done": false }
]
            },
            {
                name: "Stretch Assignments",
                activities: [    { "topic": "Assist GTM plan at SSC", "activity": "", "notes": "", "done": false },
                            { "topic": "Swagelok Lean Boot Camp", "activity": "", "notes": "", "done": false },
                            { "topic": "Lean Tools for SSCs", "activity": "", "notes": "Lean Tools for SSCs: 5S", "done": false },
                            { "topic": "Housekeeping Visual Guide for SSCs", "activity": "", "notes": "5S and Housekeeping Visual Guide for SSCs", "done": false },
                            { "topic": "Assist w 2 corporate projects (product development, application solution development, program rollout)", "activity": "", "notes": "", "done": false },
                            { "topic": "Project manage internal SSC projects", "activity": "", "notes": "", "done": false },
                            { "topic": "Onboard and supervise interns", "activity": "", "notes": "", "done": false },
                            { "topic": "Onboard and supervise new Engineering Services Employees", "activity": "", "notes": "", "done": false },
                            { "topic": "Join Corporate mentorship program as a mentor", "activity": "", "notes": "", "done": false },
                            { "topic": "Assist with interview and hiring process at SSC", "activity": "", "notes": "", "done": false },
                            { "topic": "Become PASS or Capstone instructor", "activity": "", "notes": "", "done": false }
]
            },
            {
                name: "Leadership",
                activities: [    { "topic": "SSC Leadership Development program", "activity": "", "notes": "", "done": false },
                            { "topic": "Talent Management & Development", "activity": "", "notes": "", "done": false },
                            { "topic": "Change Management", "activity": "", "notes": "", "done": false },
                            { "topic": "GLP", "activity": "", "notes": "", "done": false },
                            { "topic": "Financial Literacy", "activity": "", "notes": "", "done": false },
                            { "topic": "Corporate ES Leadership Engagement Program", "activity": "", "notes": "", "done": false },
                            { "topic": "Strategy", "activity": "Stratonomics (Vikas), local university", "notes": "", "done": false },
                            { "topic": "Executive Professional Coaching (2nd level from Softskills section)", "activity":                                     "BetterUp, Watterson, etc", "notes": "", "done": false },
                            { "topic": "\"Radical Candor\"", "activity": "", "notes": "", "done": false },
                            { "topic": "\"Outliers\"", "activity": "", "notes": "", "done": false }]
            }
        ]
    }
];
    // Crear un contenedor para la gráfica
    const chartContainer = document.createElement("div");
    chartContainer.innerHTML = `<canvas id="progressChart"></canvas>`;
    document.body.appendChild(chartContainer);
    let progressChart;

    // Variable global para almacenar la instancia del gráfico
    let chartInstance = null;

    function updateChart() {
        let totalToDo = 0;
        let totalDone = 0;

        document.querySelectorAll("table").forEach(table => {
            table.querySelectorAll("tr").forEach((row, index) => {
                if (index === 0 || row.style.display === "none") return; // Omitir encabezados y filas ocultas

                const doneCheckbox = row.querySelector(".doneCheckbox");
                if (doneCheckbox && doneCheckbox.checked) {
                    totalDone++;
                } else {
                    totalToDo++;
                }
            });
        });

        if (chartInstance) {
            chartInstance.destroy(); // Destruir el gráfico anterior para actualizarlo
        }
        const canvas = document.getElementById("progressChart");
        canvas.style.width = "300px";
        canvas.style.height = "300px";
        const ctx = document.getElementById("chart").getContext("2d");
        chartInstance = new Chart(ctx, {
            type: "pie",
            data: {
                labels: ["To Do", "Done"],
                datasets: [{
                    data: [totalToDo, totalDone],
                    backgroundColor: ["#007bff", "#28a745"]
                }]
            }
        });
        
    }
// Mostrar todas las actividades al cargar la página
    function showAllActivities() {
        onboardingList.innerHTML = "";

        onboardingData.forEach(section => {
            let categoryContainer = document.createElement("div");
            let categoryHeader = document.createElement("h2");
            categoryHeader.textContent = section.category;
            categoryContainer.appendChild(categoryHeader);

            let hasContent = false;

            section.subcategories.forEach(subcategory => {
                let subcategoryContainer = document.createElement("div");
                let subcategoryHeader = document.createElement("h3");
                subcategoryHeader.textContent = subcategory.name;
                subcategoryContainer.appendChild(subcategoryHeader);

                if (subcategory.activities.length > 0) {
                    let table = document.createElement("table");
                    table.innerHTML = `
                        <tr>
                            <th style="width: 20%;">Topic</th>
                            <th style="width: 30%;">Activity</th>
                            <th style="width: 40%;">Notes</th>
                            <th class="todo-column" style="width: 10%;">To Do</th>
                            <th class="done-column" style="display: none;">Done</th>
                            <th class="date-column" style="display: none;">Date</th>
                        </tr>
                    `;

                    let subcategoryHasContent = false;

                    subcategory.activities.forEach(activity => {
                        let row = document.createElement("tr");

                        row.innerHTML = `
                            <td>${activity.topic}</td>
                            <td>${activity.activity}</td>
                            <td>${activity.notes ? `<a href="${activity.notes}" target="_blank">🔗 Link</a>` : ""}</td>
                            <td class="todo-column"><input type="checkbox" class="todoCheckbox"></td>
                            <td class="done-column" style="display: none;">
                                <input type="checkbox" class="doneCheckbox">
                            </td>
                            <td class="date-column" style="display: none;">
                                <input type="date" class="dateInput">
                            </td>
                        `;

                        // Recuperar el estado de "Done" y fecha si ya fueron seleccionados
                        const doneCheckbox = row.querySelector(".doneCheckbox");
                        const dateInput = row.querySelector(".dateInput");

                        const savedDate = localStorage.getItem(`date-${activity.topic}`);
                        if (savedDate) {
                            dateInput.value = savedDate;
                        }

                        doneCheckbox.addEventListener("change", () => {
                            if (doneCheckbox.checked) {
                                const today = new Date().toISOString().split("T")[0];
                                dateInput.value = today;
                                localStorage.setItem(`date-${activity.topic}`, today);
                            } else {
                                dateInput.value = "";
                                localStorage.removeItem(`date-${activity.topic}`);
                            }
                            updateChart(); // Actualiza la gráfica al cambiar "Done"
                        });

                        table.appendChild(row);
                        subcategoryHasContent = true;
                    });

                    if (subcategoryHasContent) {
                        subcategoryContainer.appendChild(table);
                        categoryContainer.appendChild(subcategoryContainer);
                        hasContent = true;
                    }
                }
            });

            if (hasContent) {
                onboardingList.appendChild(categoryContainer);
            }
        });
    }
    showAllActivities();
    updateChart();
    // Filtrar actividades al hacer clic en "Generate Plan"
    function generatePlan() {
        const allCategories = document.querySelectorAll("h2");
        const allSubcategories = document.querySelectorAll("h3");
        const allTables = document.querySelectorAll("table");

        let categoryHasContent = new Map();

        allTables.forEach((table, tableIndex) => {
            const rows = table.querySelectorAll("tr");
            let hasSelected = false;

            rows.forEach((row, index) => {
                if (index === 0) return; // Saltar encabezados
                const checkbox = row.querySelector(".todoCheckbox");
                if (checkbox && !checkbox.checked) {
                    row.style.display = "none";
                } else {
                    hasSelected = true;
                }
            });

            if (!hasSelected) {
                table.style.display = "none";
                allSubcategories[tableIndex].style.display = "none";
            } else {
                categoryHasContent.set(allCategories[Math.floor(tableIndex / allSubcategories.length)], true);
            }
        });
        generatePlanBtn.addEventListener("click", () => {
            generatePlan();
            updateChart();
        });
        // Ocultar categorías sin contenido
        allCategories.forEach((category, categoryIndex) => {
            if (!categoryHasContent.has(category)) {
                category.style.display = "none";
            }
        });

        // Mostrar columnas de "Done" y "Date" y ocultar "To Do"
        document.querySelectorAll(".done-column, .date-column").forEach(column => {
            column.style.display = "table-cell";
        });
        document.querySelectorAll(".todo-column").forEach(column => {
            column.style.display = "none";
        });
    }

    // Mostrar todas las actividades al hacer clic en "Show All"
    function resetView() {
        const checkedToDo = new Set();
        const checkedDone = new Set();
        const savedDates = new Map();

        document.querySelectorAll(".todoCheckbox").forEach((checkbox, index) => {
            if (checkbox.checked) {
                checkedToDo.add(index);
            }
        });

        document.querySelectorAll(".doneCheckbox").forEach((checkbox, index) => {
            if (checkbox.checked) {
                checkedDone.add(index);
            }
        });

        document.querySelectorAll(".dateInput").forEach((input, index) => {
            if (input.value) {
                savedDates.set(index, input.value);
            }
        });

        showAllActivities();

        document.querySelectorAll(".todoCheckbox").forEach((checkbox, index) => {
            if (checkedToDo.has(index)) {
                checkbox.checked = true;
            }
        });

        document.querySelectorAll(".doneCheckbox").forEach((checkbox, index) => {
            if (checkedDone.has(index)) {
                checkbox.checked = true;
            }
        });

        document.querySelectorAll(".dateInput").forEach((input, index) => {
            if (savedDates.has(index)) {
                input.value = savedDates.get(index);
            }
        });
    }

    // Eventos
    generatePlanBtn.addEventListener("click", generatePlan);
    showAllBtn.addEventListener("click", resetView);

    // Cargar todas las actividades al inicio
    showAllActivities();
});
