/**
 * Long-form content for each service detail page (/services/<slug>).
 *
 * Keyed by the service `slug` in `content.ts`. Everything here is
 * general plumbing guidance written for this template — review it so it
 * matches how your business actually works before launch. No prices,
 * response times or guarantees are stated; add real ones if you offer them.
 */
import type { IconName } from "@/data/content";

/** 1 = keep an eye on it, 2 = book a visit soon, 3 = call now. */
export type Urgency = 1 | 2 | 3;

export type ServiceDetail = {
  /** Hero headline. The part in [brackets] is highlighted. */
  headline: string;
  intro: string;
  overview: string[];
  highlights: { icon: IconName; title: string; text: string }[];
  symptoms: { label: string; level: Urgency }[];
  steps: { title: string; text: string; points: string[] }[];
  included: string[];
  factors: { title: string; text: string }[];
  /** "Before we arrive" checklist the visitor can tick off. */
  tips: string[];
  faqs: { q: string; a: string }[];
  related: string[];
};

export const serviceDetails: Record<string, ServiceDetail> = {
  "leak-repair": {
    headline: "Find The Leak. [Fix It Properly.]",
    intro:
      "A small drip can do a lot of quiet damage. We locate the source first, then repair it with as little opening-up of walls and floors as we can manage.",
    overview: [
      "Most leaks aren't where the water shows up. It runs along pipes, joists and slabs before it stains a ceiling or lifts a floorboard, so guessing usually means cutting holes in the wrong place.",
      "We start by isolating sections of your system and checking pressure, then use moisture readings and listening equipment to narrow down the location before anything is opened. Once we've found it, we show you, explain the repair and agree the price before we start.",
    ],
    highlights: [
      { icon: "search", title: "Locate before we cut", text: "Isolation and moisture checks narrow it down first." },
      { icon: "tag", title: "Price agreed first", text: "You approve the repair before any work starts." },
      { icon: "shield", title: "Tested before we leave", text: "Every repair is pressure-checked and inspected." },
    ],
    symptoms: [
      { label: "Water bill higher than usual", level: 1 },
      { label: "Damp patch or stain on a wall or ceiling", level: 2 },
      { label: "Sound of running water when taps are off", level: 2 },
      { label: "Musty smell or mould in one spot", level: 1 },
      { label: "Warm spot on the floor", level: 2 },
      { label: "Water actively dripping or spreading", level: 3 },
    ],
    steps: [
      {
        title: "Tell us the signs",
        text: "Call or send a request describing what you've noticed and where. Photos help.",
        points: ["Where the water or stain appears", "When you first noticed it", "Any recent work on the plumbing"],
      },
      {
        title: "Trace the source",
        text: "We isolate parts of the system and use moisture and acoustic checks to pinpoint the leak.",
        points: ["Meter and pressure checks", "Moisture readings around the area", "Minimal, targeted access only"],
      },
      {
        title: "Repair the pipe",
        text: "Once you approve the price, we replace the damaged section or fitting with quality parts.",
        points: ["Clear explanation of the cause", "Repair done to code", "Work area protected and cleaned"],
      },
      {
        title: "Test and sign off",
        text: "We re-pressurise, check for drips and walk you through what we did.",
        points: ["Pressure test after repair", "Advice on drying out the area", "Written summary of the work"],
      },
    ],
    included: [
      "Leak location and diagnosis",
      "Clear quote before any repair",
      "Replacement of the damaged section or fitting",
      "Pressure test on completion",
      "Tidy-up of the work area",
      "Written summary of what we found",
    ],
    factors: [
      { title: "Where the leak is", text: "A leak under a sink is quicker to reach than one inside a wall, ceiling or slab." },
      { title: "Pipe material", text: "Copper, PEX, galvanised and older pipe each need different parts and methods." },
      { title: "Size of the damage", text: "A failed fitting is a small job; a corroded run may be better replaced than patched." },
      { title: "Access and making good", text: "Opening and closing walls or floors adds time. We'll tell you up front if it's needed." },
    ],
    tips: [
      "Find your main water shut-off and check it turns",
      "Turn off the isolation valve nearest the leak if there is one",
      "Move valuables and electronics away from wet areas",
      "Take photos of any stains or damage for your records",
      "Put a bucket or towels under active drips",
    ],
    faqs: [
      {
        q: "Will you need to open my walls?",
        a: "Only if the pipe can't be reached any other way. We narrow down the location first so any opening is small, and we'll tell you before we cut anything.",
      },
      {
        q: "Can a hidden leak raise my water bill?",
        a: "Yes. A constant leak can run all day without being seen. If your bill jumps without a change in use, a leak is worth ruling out.",
      },
      {
        q: "Do you repair the drywall afterwards?",
        a: "We'll leave the access opening clean and tidy and can advise on making good. Tell us when you book if you want that included in the quote.",
      },
    ],
    related: ["pipe-repair", "emergency", "bathroom"],
  },

  "drain-cleaning": {
    headline: "Blocked Drains, [Cleared Properly]",
    intro:
      "Slow sinks, gurgling showers and backed-up toilets cleared at the cause — not just pushed further down the pipe to come back next month.",
    overview: [
      "Most blockages build up over time: grease, hair, soap scum, wipes and food scraps narrow the pipe until water can't get past. Chemical drain cleaners can help briefly, but they rarely clear the build-up and can damage older pipes.",
      "We clear the drain mechanically with the right tool for the pipe, then check that it flows freely. If a blockage keeps coming back, we can run a camera to see what's really going on further down the line.",
    ],
    highlights: [
      { icon: "drain", title: "Cleared at the cause", text: "Mechanical clearing, not just a quick plunge." },
      { icon: "search", title: "Camera when needed", text: "For blockages that keep coming back." },
      { icon: "badge", title: "Flow-tested", text: "We run water to confirm it drains freely." },
    ],
    symptoms: [
      { label: "Sink or shower draining slowly", level: 1 },
      { label: "Gurgling sounds from plughole or toilet", level: 1 },
      { label: "Bad smell from a drain", level: 1 },
      { label: "Several fixtures blocked at once", level: 3 },
      { label: "Water coming back up through a drain", level: 3 },
      { label: "Toilet rising when flushed", level: 2 },
    ],
    steps: [
      {
        title: "Describe the blockage",
        text: "Tell us which drains are affected and what you've already tried.",
        points: ["Which fixtures are slow or blocked", "Whether it's happened before", "Any drain chemicals used"],
      },
      {
        title: "Find the blockage",
        text: "We work out whether it's a single fixture or a shared line further down.",
        points: ["Check nearby fixtures", "Inspect traps and access points", "Camera inspection if it's recurring"],
      },
      {
        title: "Clear the line",
        text: "We use a drain machine or the right tool for the pipe size and material.",
        points: ["Mechanical clearing", "Debris removed, not pushed on", "Care taken with older pipes"],
      },
      {
        title: "Flow test and advice",
        text: "We run water through to confirm it's clear and explain how to keep it that way.",
        points: ["Flow check on all affected drains", "Advice on what caused it", "Clean-up around the work area"],
      },
    ],
    included: [
      "Diagnosis of the blocked section",
      "Mechanical drain clearing",
      "Removal of debris where accessible",
      "Flow test after clearing",
      "Advice on preventing repeat blockages",
      "Camera inspection option for recurring problems",
    ],
    factors: [
      { title: "Location of the blockage", text: "A blocked trap is quick. A main line further from the house takes more equipment." },
      { title: "What's causing it", text: "Grease and hair clear easily; tree roots or collapsed pipe need more work." },
      { title: "Access points", text: "Easy access to a clean-out saves time compared with removing a toilet or trap." },
      { title: "Camera inspection", text: "Optional, but worth it when a blockage keeps returning." },
    ],
    tips: [
      "Stop using the affected sinks, showers and toilets",
      "Don't add more chemical drain cleaner — it can be hazardous for us to work with",
      "Note which drains are slow and which are fine",
      "Clear the area under the sink or around the toilet",
    ],
    faqs: [
      {
        q: "Are chemical drain cleaners safe to use?",
        a: "They can damage older pipes and seals, and they rarely clear the whole blockage. If you've used one, please tell us before we start so we can work safely.",
      },
      {
        q: "Why does my drain keep blocking?",
        a: "Repeat blockages usually mean build-up further down, a pipe with poor fall, or roots getting in. A camera inspection shows which it is.",
      },
      {
        q: "Can you clear outside drains too?",
        a: "Yes — yard drains, gullies and the main line to the sewer as well as indoor fixtures.",
      },
    ],
    related: ["sewer", "kitchen", "bathroom"],
  },

  "water-heaters": {
    headline: "Hot Water, [Back On]",
    intro:
      "Repairs, servicing and replacement for tank and tankless water heaters — gas or electric — with honest advice on whether a repair is worth it.",
    overview: [
      "No hot water, water that won't stay hot, odd noises or a puddle under the tank are all signs your water heater needs attention. Sometimes it's a part that's quick to replace; sometimes the unit is near the end of its life.",
      "We diagnose the fault, explain your options and give you a price for each. If replacement is the better value, we'll help you choose the right size and type for your household and install it to code.",
    ],
    highlights: [
      { icon: "flame", title: "Tank & tankless", text: "Gas and electric units, repaired or replaced." },
      { icon: "tag", title: "Repair vs. replace", text: "Honest advice on which is better value." },
      { icon: "shield", title: "Installed to code", text: "Safety valves and venting checked every time." },
    ],
    symptoms: [
      { label: "No hot water at all", level: 2 },
      { label: "Hot water runs out quickly", level: 1 },
      { label: "Rumbling or popping from the tank", level: 1 },
      { label: "Rusty or discoloured hot water", level: 1 },
      { label: "Water pooling around the heater", level: 3 },
      { label: "Smell of gas near the heater", level: 3 },
    ],
    steps: [
      {
        title: "Book a visit",
        text: "Tell us the make, type and rough age of your heater if you know it.",
        points: ["Gas, electric or tankless", "What's happening and since when", "A photo of the label helps"],
      },
      {
        title: "Diagnose the fault",
        text: "We test the controls, elements or burner, valves and connections.",
        points: ["Safety checks first", "Fault found and explained", "Repair and replacement options priced"],
      },
      {
        title: "Repair or install",
        text: "You choose the option. We fit the parts or the new unit and connect it properly.",
        points: ["Quality replacement parts", "Correct sizing for your household", "Old unit removed if replaced"],
      },
      {
        title: "Test and hand over",
        text: "We check temperature, pressure relief and connections before we leave.",
        points: ["Temperature and safety valve checks", "How to use and maintain it", "Written summary of the work"],
      },
    ],
    included: [
      "Full diagnosis of the fault",
      "Repair and replacement options, priced",
      "Safety valve and venting checks",
      "Supply and connection of parts or new unit",
      "Removal of the old unit on replacement",
      "Maintenance advice",
    ],
    factors: [
      { title: "Repair or replacement", text: "A thermostat or element costs far less than a new heater." },
      { title: "Type and size", text: "Tankless and larger tanks cost more but suit some households better." },
      { title: "Fuel and venting", text: "Changing from one type to another can mean new gas, venting or electrical work." },
      { title: "Location", text: "Heaters in attics or tight cupboards take longer to swap safely." },
    ],
    tips: [
      "If you smell gas, leave the building and call your gas supplier first",
      "Turn off the power or gas supply to the heater if it's leaking",
      "Close the cold water inlet valve above the tank",
      "Note the make and model from the label if you can",
      "Clear space around the heater for safe access",
    ],
    faqs: [
      {
        q: "Should I repair or replace my water heater?",
        a: "It depends on the age of the unit and the fault. We'll price both options so you can decide; we won't push a replacement when a repair makes sense.",
      },
      {
        q: "Do you install tankless water heaters?",
        a: "Yes. We'll check whether your gas supply, venting or electrics need upgrading first, and include that in the quote.",
      },
      {
        q: "How often should a water heater be serviced?",
        a: "Flushing sediment and checking the safety valve once a year helps most tank heaters last longer. Tankless units benefit from regular descaling in hard-water areas.",
      },
    ],
    related: ["emergency", "pipe-repair", "leak-repair"],
  },

  "pipe-repair": {
    headline: "Pipework Done [To Last]",
    intro:
      "From a single burst section to a whole-home repipe in copper or PEX — planned carefully, done to code and pressure-tested before we pack up.",
    overview: [
      "Old galvanised pipe corrodes from the inside, copper can pinhole, and poorly joined fittings eventually let go. Low pressure, discoloured water and repeated leaks are signs it's time to look at the pipework rather than patching one spot at a time.",
      "For small repairs we replace the damaged section and check the rest of the run. For larger jobs we'll plan the route, explain the materials, and agree a schedule that keeps your water on as much as possible.",
    ],
    highlights: [
      { icon: "pipe", title: "Copper & PEX", text: "The right material for the job and your budget." },
      { icon: "calendar", title: "Planned around you", text: "Water off for as little time as possible." },
      { icon: "badge", title: "Pressure-tested", text: "Every joint checked before we close up." },
    ],
    symptoms: [
      { label: "Low water pressure throughout the house", level: 1 },
      { label: "Brown or rusty water", level: 1 },
      { label: "Repeated leaks in different spots", level: 2 },
      { label: "Banging or knocking pipes", level: 1 },
      { label: "Visible corrosion on pipes", level: 2 },
      { label: "Burst or split pipe", level: 3 },
    ],
    steps: [
      {
        title: "Inspect the system",
        text: "We look at the pipe material, condition and layout to see what's needed.",
        points: ["Pressure and flow checks", "Pipe material identified", "Problem areas marked"],
      },
      {
        title: "Plan and quote",
        text: "You get a clear plan: section repair or repipe, materials, route and schedule.",
        points: ["Options explained plainly", "Fixed scope before work", "Timeline agreed with you"],
      },
      {
        title: "Replace the pipework",
        text: "We fit new pipe and fittings, protecting floors and furniture as we go.",
        points: ["Work areas covered", "Water restored between stages", "Old pipe removed"],
      },
      {
        title: "Pressure-test and finish",
        text: "Every joint is tested, then we tidy up and explain what's changed.",
        points: ["Full pressure test", "Flush of the new lines", "Summary of what was replaced"],
      },
    ],
    included: [
      "Inspection of pipe condition",
      "Clear plan and quote before work",
      "Supply of pipe, fittings and supports",
      "Removal of old pipework",
      "Full pressure test",
      "Tidy-up at the end of each day",
    ],
    factors: [
      { title: "Repair or full repipe", text: "Replacing one section is a small job; a whole home is a planned project." },
      { title: "Material", text: "PEX is usually quicker to install than copper; both are reliable when fitted well." },
      { title: "Number of fixtures", text: "More bathrooms and outlets mean more runs and connections." },
      { title: "Access", text: "Open basements and crawl spaces are easier than finished walls and ceilings." },
    ],
    tips: [
      "Locate the main shut-off valve",
      "Clear access to under-sink cabinets and the water heater",
      "Note any taps with low pressure or discoloured water",
      "Store drinking water if a repipe is planned",
    ],
    faqs: [
      {
        q: "Copper or PEX — which is better?",
        a: "Both last well when installed properly. PEX is flexible and quicker to fit; copper is rigid and long-proven. We'll recommend what suits your home and budget.",
      },
      {
        q: "Will I be without water for the whole repipe?",
        a: "Usually not. We plan the work in stages and restore water at the end of each day wherever we can.",
      },
      {
        q: "How do I know if I need a full repipe?",
        a: "Repeated leaks in different places, corroded galvanised pipe or very low pressure are common signs. An inspection tells you for sure.",
      },
    ],
    related: ["leak-repair", "water-heaters", "sewer"],
  },

  bathroom: {
    headline: "Bathroom Plumbing, [Fitted Right]",
    intro:
      "Toilets, showers, tubs and vanities installed or repaired — and full rough-ins for renovations, coordinated with your builder or tiler.",
    overview: [
      "A good bathroom depends on what's behind the tiles: correct falls on the waste pipes, solid supply connections and valves you can actually reach. Get those right and everything else is easier.",
      "We handle single-fixture swaps and repairs, as well as complete rough-ins and finish fits for renovations. If you're working with a builder or designer, we'll coordinate so the plumbing is ready when they need it.",
    ],
    highlights: [
      { icon: "bath", title: "Repairs to full refits", text: "One fixture or the whole room." },
      { icon: "users", title: "Works with your trades", text: "Coordinated with builders and tilers." },
      { icon: "shield", title: "Leak-checked", text: "Every connection tested before you use it." },
    ],
    symptoms: [
      { label: "Toilet keeps running", level: 1 },
      { label: "Dripping shower or tap", level: 1 },
      { label: "Low shower pressure", level: 1 },
      { label: "Toilet rocks or leaks at the base", level: 2 },
      { label: "Water stains below the bathroom", level: 2 },
      { label: "Toilet overflowing and won't stop", level: 3 },
    ],
    steps: [
      {
        title: "Talk through the job",
        text: "Tell us what you want fixed or fitted, and share any plans or fixture choices.",
        points: ["Repair or renovation", "Fixtures already chosen?", "Timeline with other trades"],
      },
      {
        title: "Site visit and quote",
        text: "We check the existing pipework and give you a clear price and plan.",
        points: ["Waste and supply positions", "Valve and access planning", "Written quote"],
      },
      {
        title: "Rough-in and fit",
        text: "Pipework is set before walls close up, then fixtures are fitted once tiling is done.",
        points: ["Correct falls on waste pipes", "Accessible shut-off valves", "Fixtures fitted level and sealed"],
      },
      {
        title: "Test and hand over",
        text: "We fill, flush and run everything, checking for leaks before you use it.",
        points: ["Pressure and leak checks", "Silicone and seals finished neatly", "Care and maintenance tips"],
      },
    ],
    included: [
      "Removal of old fixtures where needed",
      "Supply and waste pipework",
      "Fitting of toilets, basins, showers and tubs",
      "Shut-off valves at each fixture",
      "Leak and flow testing",
      "Clean-up of the work area",
    ],
    factors: [
      { title: "Moving fixtures", text: "Keeping toilets and showers where they are costs much less than relocating them." },
      { title: "Fixture choice", text: "Wall-hung toilets and concealed valves need more work behind the wall." },
      { title: "Condition of existing pipes", text: "Older pipework may need replacing while the walls are open." },
      { title: "Coordination", text: "Multiple visits around other trades are built into the plan." },
    ],
    tips: [
      "Turn off the isolation valve behind the toilet or under the basin",
      "Have fixture model numbers or spec sheets ready",
      "Clear toiletries and bath mats from the room",
      "Let us know your builder's or tiler's schedule",
    ],
    faqs: [
      {
        q: "Can you fit fixtures I've bought myself?",
        a: "Yes. Send us the model numbers in advance so we can check the connections and bring the right parts.",
      },
      {
        q: "Do you do the tiling as well?",
        a: "We focus on the plumbing, but we're happy to work alongside your tiler or builder and plan around their schedule.",
      },
      {
        q: "Can you move a toilet or shower?",
        a: "Usually, yes. The waste pipe needs the right fall, so we'll check the floor and route before quoting.",
      },
    ],
    related: ["kitchen", "leak-repair", "drain-cleaning"],
  },

  kitchen: {
    headline: "Kitchen Plumbing, [Neat & Leak-Free]",
    intro:
      "Sinks, faucets, waste disposals, dishwashers and ice-maker lines — installed cleanly, connected properly and tested before we go.",
    overview: [
      "The cabinet under the kitchen sink holds more plumbing than most rooms: hot and cold supplies, a waste line, a dishwasher connection and often a disposal. Small leaks there go unnoticed until the cabinet floor swells.",
      "We install new fixtures and appliances, replace tired valves and traps, and fix leaks and slow drains. Everything is fitted so it's easy to reach and service later.",
    ],
    highlights: [
      { icon: "sink", title: "Fixtures & appliances", text: "Faucets, sinks, disposals and dishwashers." },
      { icon: "box", title: "Tidy installs", text: "Neat pipework that's easy to service later." },
      { icon: "badge", title: "Leak-checked", text: "Run and inspected before we leave." },
    ],
    symptoms: [
      { label: "Dripping faucet", level: 1 },
      { label: "Sink drains slowly", level: 1 },
      { label: "Disposal hums but won't turn", level: 1 },
      { label: "Swollen or damp cabinet floor", level: 2 },
      { label: "Dishwasher leaking at the connection", level: 2 },
      { label: "Water spraying from a supply line", level: 3 },
    ],
    steps: [
      {
        title: "Tell us what's needed",
        text: "Repair, replacement or new appliance — send the model if you've chosen one.",
        points: ["What's failing or being added", "Model numbers if known", "Photos of under the sink"],
      },
      {
        title: "Check the connections",
        text: "We look at the existing supplies, waste and valves to confirm what's needed.",
        points: ["Valve condition", "Waste height and trap", "Space for new appliances"],
      },
      {
        title: "Install or repair",
        text: "We fit the fixture or appliance and replace any worn connectors.",
        points: ["New braided connectors where needed", "Secure, level fitting", "Old parts removed"],
      },
      {
        title: "Run and inspect",
        text: "Everything is run under pressure and the cabinet checked for drips.",
        points: ["Leak check on every joint", "Appliance test cycle", "Area wiped down"],
      },
    ],
    included: [
      "Fitting of faucets, sinks and disposals",
      "Dishwasher and ice-maker connections",
      "Replacement of worn valves and connectors",
      "Waste and trap adjustments",
      "Leak test of every connection",
      "Removal of old fixtures",
    ],
    factors: [
      { title: "Like-for-like or new", text: "Swapping a faucet is quick; adding a new appliance line takes longer." },
      { title: "Valve condition", text: "Seized or old shut-off valves are best replaced while we're there." },
      { title: "Cabinet access", text: "Tight or awkward cabinets add time to any install." },
      { title: "Electrical needs", text: "Disposals and some appliances need a suitable outlet nearby." },
    ],
    tips: [
      "Empty the cabinet under the sink",
      "Turn off the valves under the sink if something is leaking",
      "Have new fixtures unboxed and ready if you bought them",
      "Make space around the dishwasher or fridge if it's being connected",
    ],
    faqs: [
      {
        q: "Can you install a dishwasher I bought?",
        a: "Yes — we connect the water supply and drain. If a new electrical outlet is needed, we'll let you know in advance.",
      },
      {
        q: "My disposal hums but doesn't spin. What's wrong?",
        a: "Usually something is jammed. Turn it off at the switch and don't put your hand in it. We can free it or tell you if it needs replacing.",
      },
      {
        q: "Do you supply faucets and sinks?",
        a: "We can, or we can fit ones you've chosen. Either way, we'll check they suit your existing connections.",
      },
    ],
    related: ["drain-cleaning", "bathroom", "leak-repair"],
  },

  sewer: {
    headline: "Sewer Lines, [Seen & Sorted]",
    intro:
      "Camera inspections, root removal and sewer line repair — with clear footage of what we found and a plain explanation of your options.",
    overview: [
      "Your sewer line carries everything from the house to the public sewer. When it cracks, sags or fills with roots, the symptoms show up indoors: slow drains on the lowest floor, gurgling toilets and sewage smells.",
      "A camera inspection shows exactly what's happening inside the pipe, so you're not paying for guesswork. We'll share the footage, explain the options from clearing to repair, and price each one.",
    ],
    highlights: [
      { icon: "search", title: "Camera inspection", text: "See inside the line before any digging." },
      { icon: "sewer", title: "Roots & blockages", text: "Cleared with the right equipment." },
      { icon: "tag", title: "Options priced", text: "From clearing to repair, explained clearly." },
    ],
    symptoms: [
      { label: "Several drains slow at once", level: 2 },
      { label: "Gurgling toilets when other fixtures run", level: 1 },
      { label: "Sewage smell indoors or in the yard", level: 2 },
      { label: "Unusually green or soggy patch in the lawn", level: 1 },
      { label: "Sewage backing up into a floor drain or tub", level: 3 },
      { label: "Recurring blockages after clearing", level: 2 },
    ],
    steps: [
      {
        title: "Book an inspection",
        text: "Describe the symptoms and where your clean-out is, if you know.",
        points: ["Which drains are affected", "Previous sewer work", "Trees near the line"],
      },
      {
        title: "Camera survey",
        text: "We run a camera down the line to find blockages, roots, cracks or sags.",
        points: ["Live footage you can watch", "Location and depth noted", "Recording shared with you"],
      },
      {
        title: "Clear or repair",
        text: "Depending on what we find, we clear the line or plan a repair.",
        points: ["Root cutting and clearing", "Section repair where needed", "Options explained and priced"],
      },
      {
        title: "Re-inspect",
        text: "After the work, the camera goes back in to confirm the line is clear.",
        points: ["Follow-up footage", "Flow test", "Maintenance advice"],
      },
    ],
    included: [
      "Camera inspection of the sewer line",
      "Footage and findings shared with you",
      "Root and blockage clearing",
      "Repair options with clear pricing",
      "Post-work camera check",
      "Advice on preventing future problems",
    ],
    factors: [
      { title: "Clearing vs. repair", text: "Roots and build-up can often be cleared; broken pipe needs repairing." },
      { title: "Depth and length", text: "Deeper and longer lines take more time to access and repair." },
      { title: "Access", text: "An existing clean-out makes inspection and clearing much quicker." },
      { title: "What's above the pipe", text: "Driveways, patios and landscaping affect how a repair is done." },
    ],
    tips: [
      "Stop running water, flushing and using appliances that drain",
      "Keep people and pets away from any sewage",
      "Find your outdoor clean-out cap if you know where it is",
      "Move cars or items blocking access to the yard or driveway",
    ],
    faqs: [
      {
        q: "Do I need a camera inspection?",
        a: "If several drains are slow or a blockage keeps coming back, yes. It's the quickest way to know whether the line needs clearing or repair.",
      },
      {
        q: "Can tree roots really get into sewer pipes?",
        a: "Yes. Roots find small cracks and joints and grow inside, trapping waste. They can be cut back, but the entry point may need repairing.",
      },
      {
        q: "Will you have to dig up my yard?",
        a: "Not always. The camera shows us where the problem is, so any excavation is targeted. We'll explain the options before anything is dug.",
      },
    ],
    related: ["drain-cleaning", "pipe-repair", "emergency"],
  },

  emergency: {
    headline: "Plumbing Emergency? [We Pick Up.]",
    intro:
      "Burst pipes, overflowing toilets, no water or a leaking water heater — call the emergency line and we'll talk you through the next steps while a plumber is on the way.",
    overview: [
      "In a plumbing emergency, the first few minutes matter most. Shutting off the water quickly limits damage, and knowing where your main valve is makes a big difference.",
      "When you call, we'll help you stop the water first. Then we dispatch a plumber to make the situation safe, carry out a repair where possible, and explain any follow-up work before it's done.",
    ],
    highlights: [
      { icon: "clock", title: "24/7 line", text: "A real person answers, day or night." },
      { icon: "siren", title: "Help on the phone", text: "We talk you through shutting off the water." },
      { icon: "shield", title: "Made safe first", text: "Then a proper repair, explained and priced." },
    ],
    symptoms: [
      { label: "Burst or split pipe", level: 3 },
      { label: "Water coming through a ceiling", level: 3 },
      { label: "Toilet overflowing and won't stop", level: 3 },
      { label: "No water at all", level: 2 },
      { label: "Sewage backing up", level: 3 },
      { label: "Leak you can't shut off", level: 3 },
    ],
    steps: [
      {
        title: "Call the emergency line",
        text: "Tell us what's happening. We'll help you find and close the shut-off valve.",
        points: ["Water stopped as quickly as possible", "Safety advice on electrics", "Plumber dispatched"],
      },
      {
        title: "Make it safe",
        text: "Your plumber stops the leak and checks for any immediate risks.",
        points: ["Leak isolated", "Hazards checked", "Damage assessed"],
      },
      {
        title: "Repair",
        text: "Where possible, we carry out the repair on the same visit.",
        points: ["Price agreed before work", "Quality parts from the van", "Temporary fix if parts are needed"],
      },
      {
        title: "Follow-up",
        text: "We explain anything that still needs doing and help with records for insurance.",
        points: ["Photos and notes of the damage", "Written summary", "Follow-up visit booked if needed"],
      },
    ],
    included: [
      "24/7 emergency phone line",
      "Help shutting off the water over the phone",
      "Emergency call-out and make-safe",
      "Repair on the same visit where possible",
      "Clear pricing before repair work",
      "Notes and photos for insurance claims",
    ],
    factors: [
      { title: "Time of call", text: "Out-of-hours call-outs can carry a different rate. We'll tell you on the phone." },
      { title: "What failed", text: "A split pipe under a sink is quicker to fix than a leak inside a ceiling." },
      { title: "Parts", text: "Common parts are on the van; specialised parts may need a return visit." },
      { title: "Follow-up work", text: "Some emergencies need a temporary fix now and a permanent repair later." },
    ],
    tips: [
      "Close the main water shut-off valve",
      "Switch off electrics near any water — only if it's safe to do so",
      "Turn off the water heater if hot water is leaking",
      "Open a cold tap on the lowest floor to drain pressure",
      "Move valuables and take photos for insurance",
    ],
    faqs: [
      {
        q: "Where is my main water shut-off?",
        a: "Often where the water line enters the house — in a basement, utility room, under the kitchen sink or in a box near the street. Call us and we'll help you find it.",
      },
      {
        q: "Is there an extra charge for nights and weekends?",
        a: "Out-of-hours rates may apply. We'll always tell you on the phone, before anyone is dispatched.",
      },
      {
        q: "Can you help with my insurance claim?",
        a: "We can provide photos, notes on the cause and a written summary of the work to support your claim.",
      },
    ],
    related: ["leak-repair", "pipe-repair", "water-heaters"],
  },
};

export const urgencyCopy: Record<Urgency, { label: string; title: string; text: string }> = {
  1: {
    label: "Keep an eye on it",
    title: "Worth checking soon",
    text: "Nothing here sounds urgent, but small problems tend to grow. Send a quote request and we'll book a visit at a time that suits you.",
  },
  2: {
    label: "Book a visit",
    title: "Get this looked at soon",
    text: "These signs usually mean something is wearing out or leaking. Book a visit in the next few days to stop it turning into a bigger repair.",
  },
  3: {
    label: "Call now",
    title: "Treat this as urgent",
    text: "Shut off the water if you can, keep clear of electrics near water, and call the emergency line now. We'll talk you through the next steps.",
  },
};
