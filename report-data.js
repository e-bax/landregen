window.reportData = {
  business: {
    name: "Central Victorian Regeneration Co.",
    positioning: "Keyline land regeneration, ripping and revegetation across Central Victoria."
  },
  client: {
    name: "Muckleford North Pastoral"
  },
  property: {
    name: "Muckleford North Demonstration Property",
    location: "Muckleford, Central Victoria",
    area: "64.8 ha"
  },
  report: {
    title: "Property Regeneration Plan",
    type: "Implementation-ready plan",
    date: "June 2026",
    footerText: "Property Regeneration Plan"
  },
  maps: [
    {
      id: "overview",
      title: "Map 1.",
      caption: "Existing site map showing current property layout, landscape features and assessment context.",
      src: "assets/maps/existing_site_map.png",
      alt: "Existing site map",
      size: "portrait-map",
      legend: [
        { label: "Assessment boundary", color: "#2f3427" },
        { label: "Existing tracks", color: "#b98253" },
        { label: "Paddock units", color: "#d6c790" }
      ]
    },
    {
      id: "landform",
      title: "Map 2.",
      caption: "Indicative landform and contour interpretation used to locate water-spreading opportunities.",
      src: "assets/maps/landform-contours.svg",
      alt: "Placeholder landform and contour map",
      legend: [
        { label: "High ridges", color: "#9b7052" },
        { label: "Contours", color: "#6f5b49" },
        { label: "Valley floor", color: "#d2b36d" }
      ]
    },
    {
      id: "water",
      title: "Map 3.",
      caption: "Observed and inferred water movement, concentration points and erosion risk areas.",
      src: "assets/maps/water-movement.svg",
      alt: "Placeholder water movement map",
      legend: [
        { label: "Flow paths", color: "#4f8190" },
        { label: "Soak lines", color: "#88aeb2" },
        { label: "Erosion risk", color: "#ad6248" }
      ]
    },
    {
      id: "vegetation",
      title: "Map 4.",
      caption: "Existing site condition map used to locate vegetation assets, open pasture and priority planting context.",
      src: "assets/maps/existing_site_map.png",
      alt: "Existing site condition map",
      size: "portrait-map",
      legend: [
        { label: "Existing canopy", color: "#576b46" },
        { label: "Recruitment zone", color: "#8c9a66" },
        { label: "Open pasture", color: "#d7c886" }
      ]
    },
    {
      id: "concept",
      title: "Map 5.",
      caption: "Proposed works map showing priority ripping, revegetation corridors and water slowing works.",
      src: "assets/maps/proposed_works_map.png",
      alt: "Proposed works map",
      size: "portrait-map",
      legend: [
        { label: "Keyline ripping", color: "#a86d4d" },
        { label: "Revegetation corridor", color: "#526b3d" },
        { label: "Water-spreading works", color: "#527f8a" }
      ]
    }
  ],
  sections: {
    executiveSummary: {
      intro: "This plan converts the landscape assessment into a practical works program: what to do, where to do it, why it matters, the approximate scale, preferred timing and next implementation steps.",
      recommendation: "Begin with a contractor-marked ripping and planting package across the central moisture spine, then extend works into lower-slope shelter and drainage-line protection zones once stock control and establishment systems are in place.",
      stats: [
        { label: "Plan area", value: "64.8 ha", note: "Mapped from supplied title boundary" },
        { label: "Priority ripping", value: "19.7 ha", note: "Rip Zones A-C" },
        { label: "Planting works", value: "3.4 ha / 1.8 km", note: "Corridors, shelter and wet margins" },
        { label: "Indicative program", value: "$46k-$104k", note: "Depending on scope and landholder input" }
      ],
      findings: [
        { title: "Primary job", body: "Slow and spread runoff from upper slopes before it concentrates in the central and eastern drainage lines." },
        { title: "Contractor focus", body: "Peg ripping lines, correct track runoff, fence wet margins and install plantings in defined zones." },
        { title: "Vegetation focus", body: "Rebuild Box-Ironbark / grassy woodland structure using local canopy, mid-storey and ground-layer species." },
        { title: "Layout balance", body: "Also rebalance the layout so maps remain large and central. Aim for roughly 50-60% visual content and 40-50% text/tables. Do not let the added implementation detail make the report text-heavy. Use maps, annotated photos, summary cards and compact tables rather than long paragraphs." }
      ]
    },
    propertyOverview: {
      intro: "The property is treated as a working rural landscape. The plan keeps paddock function intact while adding water-retention, shelter, erosion-control and habitat works in the places most likely to return value.",
      stats: [
        { label: "Land use", value: "Grazing", note: "Sheep and low-density cattle rotation" },
        { label: "Soils", value: "Duplex", note: "Sandy loam over clay subsoil" },
        { label: "Slope pattern", value: "Rolling", note: "Low ridges draining south-east" },
        { label: "Access", value: "Good", note: "All-weather entry and internal tracks" }
      ],
      notes: [
        "Maps are placeholders in this prototype and should be replaced with GIS exports, marked-up aerial imagery or contractor layout plans before issue.",
        "Final set-out should confirm services, access widths, machinery turning areas, rocky constraints, existing drains, water points, stock movement and landholder priorities."
      ]
    },
    condition: {
      intro: "The property has enough ground cover and canopy assets to justify practical regeneration works now. The limiting factors are runoff concentration, compaction, fragmented vegetation and seasonal establishment risk.",
      rating: "Moderate condition with high improvement potential. Works should be staged so soil response, pasture recovery and plant survival can be checked before scaling.",
      items: [
        { title: "Soil and pasture condition", body: "Open rises show surface sealing and annual grass dominance. Lower slopes hold more moisture and respond best to rest after disturbance." },
        { title: "Hydrology condition", body: "Runoff concentrates along vehicle lines, gateways and two natural drainage paths. Small corrections here protect larger works downstream." },
        { title: "Vegetation condition", body: "Scattered mature trees and patchy recruitment are present, but understorey and corridor continuity are weak." },
        { title: "Delivery constraints", body: "Ripping must be timed to soil moisture, and planting must be protected from stock, rabbits, hares and dry first summers." }
      ]
    },
    photos: {
      intro: "The photo page is structured for field use: Photo -> observed condition -> interpretation -> recommended response. Replace placeholders with site photographs before issuing the paid PDF.",
      items: [
        {
          title: "Photo A: upper-slope pasture and runoff source",
          src: "assets/photos/upper-slope-runoff-generated.png",
          alt: "Generated field photo of upper slope runoff source",
          labels: { observed: "Observed condition:", interpretation: "Interpretation:", response: "Recommended response:" },
          observed: "Short pasture, exposed soil between plants and evidence of fast runoff after storms.",
          interpretation: "Water is moving off the ridge before infiltrating, reducing pasture resilience and loading drainage lines.",
          response: "Peg Rip Zone B lines on slight fall, rip under suitable moisture and rest from grazing until cover recovers."
        },
        {
          title: "Photo B: central drainage line",
          src: "assets/photos/central-drainage-line-generated.png",
          alt: "Generated field photo of central drainage line",
          labels: { observed: "Observed condition:", interpretation: "Interpretation:", response: "Recommended response:" },
          observed: "Moist lower ground with pugging risk, weed pressure and limited understorey recruitment.",
          interpretation: "This is the main moisture spine and should become a protected vegetation corridor.",
          response: "Fence P1 corridor, plant mixed canopy and mid-storey, and maintain controlled grazing exclusion."
        },
        {
          title: "Photo C: scattered paddock trees",
          src: "assets/photos/scattered-paddock-trees-generated.png",
          alt: "Generated field photo of scattered paddock trees",
          labels: { observed: "Observed condition:", interpretation: "Interpretation:", response: "Recommended response:" },
          observed: "Mature eucalypts are present but isolated, with compacted root zones and limited regeneration.",
          interpretation: "Existing trees are high-value anchor points for shelter and habitat corridors.",
          response: "Buffer tree groups, link them with P2 shelter planting and avoid ripping inside structural root zones."
        }
      ]
    },
    vegetationCondition: {
      intro: "Vegetation works should strengthen existing assets first, then add new structure where moisture, shelter value and paddock function align.",
      evcNote: "Likely reference vegetation should be checked against current Victorian EVC mapping and site evidence. For this Central Victorian setting, planning assumptions may include Box-Ironbark Forest, Heathy Dry Forest, Plains Grassy Woodland or Creekline Grassy Woodland influences depending on slope position, soils and drainage.",
      items: [
        { title: "Observed canopy", body: "Scattered eucalypts remain across paddocks, with stronger canopy on lower slopes and near drainage lines." },
        { title: "Observed mid-storey", body: "Shrub layer is sparse and discontinuous. This limits habitat value and reduces wind-filtering function." },
        { title: "Ground layer", body: "Pasture remains productive but native ground-layer diversity is likely low outside protected or lightly grazed areas." },
        { title: "Reference target", body: "Aim for open woodland structure: retained grazing areas, connected canopy, patchy mid-storey and protected wet margins." }
      ]
    },
    water: {
      intro: "Water movement remains the organising layer for the plan. Ripping, fencing and planting are positioned to slow, spread and soak rainfall before it enters erosion-prone drainage lines.",
      items: [
        { title: "Ripping logic", body: "Ripping zones sit on broad slopes where machinery can work safely and where water can be spread without concentrating flow." },
        { title: "Flow corrections", body: "Track and gateway runoff should be corrected before major ripping so new works are not undercut by existing concentration points." },
        { title: "Wet margins", body: "Lower-slope wet areas should be fenced and planted rather than treated as failed pasture." },
        { title: "Timing", body: "Ripping is best when the soil fractures cleanly. Planting is best aligned with autumn to early winter moisture." }
      ]
    },
    ripping: {
      intro: "Ripping zones are indicative and require field set-out before machine work. Line spacing, depth and fall should be confirmed by the contractor against soil moisture, slope and turning access.",
      rows: [
        { zone: "Rip Zone A", area: "8.4 ha", purpose: "Create main water-spreading band through the central paddock above proposed regeneration corridors.", priority: "High", timing: "Late autumn after opening rains", notes: "Rip on contour or slight fall; coordinate with grazing rest and avoid existing tree root zones." },
        { zone: "Rip Zone B", area: "6.2 ha", purpose: "Increase infiltration on lower western slopes and slow runoff before it reaches the central drainage line.", priority: "High", timing: "Autumn to early winter", notes: "Confirm safe machinery access near dam and drainage-line margins." },
        { zone: "Rip Zone C", area: "5.1 ha", purpose: "Treat upper western runoff source and reduce flow concentration entering Zone A.", priority: "Medium", timing: "Year 2, after Zone A/B review", notes: "Check rocky rises and access before set-out; adjust line spacing if soil depth is shallow." }
      ]
    },
    planting: {
      intro: "Planting zones are functional rather than decorative. Each zone has a specific job: water protection, shelter, habitat connection or paddock-tree recruitment.",
      rows: [
        { zone: "P1 Central moisture corridor", treatment: "Fenced mixed woodland and riparian-edge planting", scale: "1.6 ha / 620 m", purpose: "Protect wet ground, stabilise drainage line and create core habitat spine.", notes: "2-3 rows plus wider nodes; guard plants; manage weeds before planting." },
        { zone: "P2 Western shelter belt", treatment: "Narrow shelter and habitat belt", scale: "780 m", purpose: "Reduce wind exposure and connect existing paddock trees.", notes: "Staggered rows, 2.5-3 m spacing, maintain machinery access on both sides." },
        { zone: "P3 Eastern gully head", treatment: "Dense erosion-control planting", scale: "0.7 ha", purpose: "Slow runoff and stabilise active erosion risk.", notes: "Exclude stock, use hardy shrubs and sedges near flow line." },
        { zone: "P4 Paddock tree buffers", treatment: "Cluster planting around mature trees", scale: "1.1 ha across 5 nodes", purpose: "Protect root zones and support natural recruitment.", notes: "Temporary electric fencing acceptable if maintained for establishment period." }
      ]
    },
    species: {
      intro: "The species palette below is suitable for concept costing and nursery conversations. It should be refined after EVC confirmation, soil checks and landholder preference.",
      note: "Final species selection should be confirmed against site conditions, EVC context, landholder goals and nursery availability.",
      rows: [
        { zone: "P1 Central moisture corridor", canopy: "Eucalyptus camaldulensis, Eucalyptus melliodora, Eucalyptus ovata", mid: "Acacia melanoxylon, Bursaria spinosa, Leptospermum continentale", ground: "Carex appressa, Juncus flavidus, Poa labillardierei near wetter margins." },
        { zone: "P2 Western shelter belt", canopy: "Eucalyptus microcarpa, Eucalyptus melliodora, Allocasuarina verticillata", mid: "Acacia paradoxa, Dodonaea viscosa, Cassinia arcuata", ground: "Themeda triandra and Wallaby Grass where seed or tubestock is available." },
        { zone: "P3 Eastern gully head", canopy: "Eucalyptus camaldulensis, Eucalyptus leucoxylon where suitable", mid: "Melaleuca decussata, Acacia dealbata, Bursaria spinosa", ground: "Dense sedge/rush planting in flow path; avoid blocking necessary drainage." },
        { zone: "P4 Paddock tree buffers", canopy: "Local eucalypt provenance matched to existing trees", mid: "Acacia pycnantha, Acacia implexa, local wattles", ground: "Allow natural recruitment where possible; supplement with hardy grasses." }
      ]
    },
    works: {
      intro: "The works package is expressed as contractor actions rather than broad recommendations. It can be converted into a quote request once map geometry and quantities are finalised.",
      note: "Budgets are indicative only. Final pricing should be confirmed after service location, contractor inspection, plant numbers, fencing lengths, access constraints and landholder contribution are known.",
      rows: [
        { work: "Confirm services, access and exclusion zones", purpose: "Avoid service strikes, tree damage and unsafe machinery movement.", priority: "High" },
        { work: "Peg Rip Zone A and B lines", purpose: "Translate concept map into machine-ready lines with appropriate fall and turnouts.", priority: "High" },
        { work: "Complete low-disturbance ripping trial", purpose: "Improve infiltration and test response before expanding to Rip Zone C.", priority: "High" },
        { work: "Install P1 drainage corridor fencing", purpose: "Protect wet margin and allow planting establishment.", priority: "High" },
        { work: "Plant P1 and P2 zones", purpose: "Create the central habitat spine and western shelter function.", priority: "High" },
        { work: "Correct track and gateway runoff", purpose: "Stop existing infrastructure from concentrating water into new works.", priority: "Medium" },
        { work: "Establish monitoring photo points", purpose: "Track pasture response, erosion risk and plant survival after each season.", priority: "Medium" }
      ]
    },
    budget: {
      intro: "Quantities are planning allowances for scoping and contractor discussion. Replace with measured GIS quantities before issue.",
      quantities: [
        { item: "Keyline / contour ripping", quantity: "19.7 ha", unit: "$450-$750 / ha", cost: "$8,900-$14,800" },
        { item: "Temporary or permanent fencing", quantity: "1.9 km", unit: "$8-$18 / m", cost: "$15,200-$34,200" },
        { item: "Tubestock, guards and stakes", quantity: "2,200-3,200 plants", unit: "$6-$11 / plant installed", cost: "$13,200-$35,200" },
        { item: "Track runoff corrections", quantity: "4-6 locations", unit: "$650-$1,800 each", cost: "$2,600-$10,800" },
        { item: "Layout, checking and monitoring", quantity: "2-4 site visits", unit: "$900-$1,400 each", cost: "$1,800-$5,600" }
      ],
      options: [
        {
          tier: "Option A",
          title: "Ripping and layout trial",
          range: "$16k-$28k",
          includes: ["Set-out and services check", "Zone A/B ripping trial", "Photo-point monitoring"]
        },
        {
          tier: "Option B",
          title: "Core works package",
          range: "$46k-$72k",
          includes: ["Ripping", "P1 corridor fencing", "Initial planting and guards"]
        },
        {
          tier: "Option C",
          title: "Three-year program",
          range: "$78k-$104k",
          includes: ["All ripping zones", "P1-P4 planting", "Track corrections and follow-up infill"]
        }
      ],
      notes: [
        "The largest variable costs are fencing specification, plant density, guard type, contractor mobilisation and the amount of planting undertaken by the landholder.",
        "A quote-ready implementation pack should include measured maps, set-out notes, plant schedules, fencing schedule and seasonal work dates."
      ]
    },
    staging: {
      intro: "The program sequences work so each stage protects the next. Ripping should not outrun grazing management, and planting should not begin before stock control and weed preparation are ready.",
      steps: [
        { phase: "Stage 1", title: "Pre-start set-out", body: "Confirm services, peg Rip Zones A/B, mark P1/P2, identify no-go tree buffers and confirm machinery access." },
        { phase: "Stage 2", title: "Hydrology first", body: "Correct track runoff, complete Zone A/B ripping under suitable moisture and rest treated paddocks." },
        { phase: "Stage 3", title: "Protect and plant core zones", body: "Fence P1, prepare weeds, plant central corridor and install guards before winter moisture declines." },
        { phase: "Stage 4", title: "Extend shelter and buffers", body: "Install P2 and P4 plantings, then review whether Rip Zone C is justified based on runoff response." },
        { phase: "Stage 5", title: "Maintain and infill", body: "Check survival, replace losses, repair guards, manage weeds and update the works map for the following autumn." }
      ]
    },
    nextSteps: {
      intro: "The next step is to convert the concept plan into measured drawings and a quote package that contractors can price without ambiguity.",
      action: "Book a half-day field set-out session to mark Rip Zones A-B, planting zones P1-P2, service constraints, tree buffers and access points.",
      items: [
        { title: "1. Replace placeholders", body: "Insert real maps and site photos, then confirm all labels match paddock names used by the landholder." },
        { title: "2. Measure quantities", body: "Use GIS or marked aerial imagery to calculate hectares, lengths, plant counts and fencing runs." },
        { title: "3. Request contractor pricing", body: "Issue the ripping, fencing, planting and track-correction schedule as separate line items." },
        { title: "4. Confirm species orders", body: "Check EVC context, soil moisture, nursery availability and landholder goals before locking the plant list." }
      ]
    }
  }
};
