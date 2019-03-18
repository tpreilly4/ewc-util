const APP_STRINGS = {
    STRING_BPC_HOMESCREEN : 'Press \'Go\' to determine which model bypass damper we recommend for use with the system you are configuring.\n\nPress \'Learn More\' to see ACCA Manual Zr guidelines for managing excess air.\n\nPress \'Duct Design\' to read about Ultra-Zone System\'s guidelines for duct design.',
    STRING_ZSP_HOMESCREEN : "Browse our recommended selection of zoning products and find out which will fit your needs.",
    STRING_CONTACT_HOMESCREEN : 'Discover important contact information.',
    STRING_MANUAL_HOMESCREEN : 'See our web page to sort through our product manuals sorted alphabetically.',
    STRING_DISCLAIMER_HOMESCREEN : "This application is intended for informational purposes only. All load calculations and Manual D and J should be performed on each and every installation.",

    STRING_BPCSCREEN_SYSCAP:"Enter the total system capacity. Be sure to specify whether your input is in 'Tons' or 'CFM'.",
    STRING_BPCSCREEN_SMALLESTZONE:"Enter the size (CFM) of the smallest zone.",
    STRING_BPCSCREEN_DAMPERLEAKAGE:'If applicable, enter the amount (CFM) of airflow you are leaking.\n\nPress the info button for more information.',
    STRING_BPCSCREEN_OPENRUN:'If applicable, enter the size (CFM) of the open run.\n\nPress the info button for more information.',
    STRING_BPCSCREEN_DAMPERSHAPE:'Choose the shape for the bypass damper you need.',
    STRING_BPCSCREEN_DAMPERTYPE:'Choose the type of bypass damper you need.',
    STRING_BPCSCREEN_DISCLAIMER:'Scroll down and fill out all applicable fields below and press \'Calculate\' at the bottom to find the bypass amper model and size that we recommend based on your input.',
    STRING_BPCSCREEN_BOUNDSALERT: 'EWC does not advise bypassing the amount of airflow you entered.\n\n Please double-check your input or review additional options for managing airflow',
    STRING_BPCSCREEN_DAMPERLEAKAGEINFO: '\"Damper Leakage\" may also be known as:\n\nDistributed Relief\nBleeding\nLeakage\n\nThese terms refer to the excess airflows through zone dampers sitting on low-limit stops.',
    STRING_BPCSCREEN_OPENRUNINFO: '\"Open run\" may also be known as:\n\nOpen Zone\nWild Zone\nWild Run\nDump Zone\n\nThese terms refer to the excess airflows through a non-critical (temperature/humidity) room or space that functions as a bypass path to return air (for example: large common areas, hallways, or basements).',

    STRING_ZONEBOARDRESISCREEN_DISCLAIMER:'Scroll through and specify your control panel needs.\n\nPress "Suggest a Control Panel" at the bottom to find a control panel that we recommend based on your input.',
    STRING_ZONEBOARDRESISCREEN_COOLINGSTAGES:'Specify the number of cooling stages you would like the control panel for this system to support.',
    STRING_ZONEBOARDRESISCREEN_HEATINGSTAGES:'Specify the number of heating stages you would like the control panel for this system to support.',
    STRING_ZONEBOARDRESISCREEN_NUMZONES:'Use the slider below to select the number of zones this system uses.',

    STRING_COMMERCIALPANEL_DESCRIPTION:'EWC suggests the UZC product line for all commercial applications.\n\nBelow is a table you can use to determine which model of the UZC Zone Control System to use with your configuration.',

    STRING_URD_DESCRIPTION: "Available sizes:\n 4\", 6\", 7\", 8\", 9\", 10\", 12\", 14\", 16\", 18\", 20\"\n\nIt can also be purchased with an S1A end switch, as a URD-L (no motor), or as a URD-LM24 SR-T (modulating motor).",
    STRING_RSD_DESCRIPTION: "Available sizes:\n 4\", 6\", 7\", 8\", 9\", 10\", 12\", 14\", 16\", 18\", 20\"\n\nIt can also be purchased as a URD-LF24 (24 volt, 35 in/lbs, spring return) or a URD-LF120 (120 volt, 35 in/lbs, sprint return).\n\nThis model is field reversible.\n\nWhen ordering, please specify spring open or spring closed.",
    STRING_SID_DESCRIPTION: "Available sizes:\n 4\", 5\", 6\", 7\", 8\", 9\", 10\"\n\nRetrofit installation in seconds!",
    STRING_ND_DESCRIPTION: "Available sizes:\n8\" x 6\" to 30\" x 30\"\n\nMotor mounts on 2nd dimension",
    STRING_NDRSD_DESCRIPTION: "Available sizes:\n8\" x 6\" to 30\" x 30\"\n\nMotor mounts on 2nd dimension\n\nWhen ordering, please specify spring open or spring closed.",
    STRING_EWT955WH_DESCRIPTION: "Rh, Rc, C, Y, Y2, W/E, W2, G, O, B, H, D,",
    STRING_EWT855i_DESCRIPTION: "Rh, Rc, C, Y, Y2, W/E, W2, G, O, B",
    STRING_EWT855_DESCRIPTION: "Rh, Rc, C, Y, Y2, W/E, W2, G, O, B",
    STRING_EWT725_DESCRIPTION: "R, C, Y, W2, W/E, G, O, B",
    STRING_EWT6012_DESCRIPTION: "Rh, Rc, C, Y, W, G, O, B",

    STRING_TRANSFORMERS_DISCLAIMER: "40VA can power up to 20 URD, ND and SID dampers\nOR\nup to 5 RSD, and ND-RSD dampers.",
    
    STRING_SBD_DESCRIPTION: "The Smart Bypass Damper.\n\nNo measuring instruments are required. No weights to adjust. No springs to crank. The SBD is ACCA Manual Zr compliant. As an added benefit of the unique blade design and the smart, self-balancing feature of the SBD, there is no need to install and setup a separate bypass balancing hand damper.",
    STRING_CLBD_DESCRIPTION: "Due to the constant load applied to the damper blade and the unique magnetic latch, the CLBD Bypass Damper can be installed in any position on your bypass duct-work, to manage the HVAC system’s static pressure during zoned operations.\n\nThe CLBD minimizes bypass volume, while still preventing the HVAC system static pressure from rising above the selected Static Pressure set-point. The CLBD is a basic, cost effective Bypass Solution for Constant Speed or Variable Speed “zoned” HVAC systems.",
    STRING_PRD_DESCRIPTION: "Model PRD pressure regulating damper is a single blade, steel, barometric damper with a counter-balanced weighted arm. The PRD provides an economical solution for bypassing excess air when zone dampers close. Damper adjustment is done by adjusting the supplied weights and by offsetting the arm.",

    STRING_UZC_DESCRIPTION:"Up to 4 stage heat and 2 stage cool automatic changeover from any zone\n\n" +
        "Fan control from any zone\n\n" +
        "Use virtually any four-wire or multi-stage thermostat\n\n" +
        "Controls up to 22 zones\n\n" +
        "LED display for complete system readout\n\n" +
        "Fire alarm interlock feature\n\n" +
        "Fixed opposing mode timer Integrated supply and return air sensor to protect the equipment\n\n" +
        "Adjustable timer for second, third, and fourth stage heat and cool operations\n\n" +
        "Adjustable fan purge timer 50% rule\n\n" +
        "Demand-based ventilation feature",
    STRING_BMPLUS_DESCRIPTION:"Our 50% rule will inhibit second stage of heating or cooling based on the total number of zones calling. More than half of the total zones must be calling to enable second stage. If less than half are calling, the panel will not allow second stage to activate.\n\n" +
        "The intelligent design of the BMPlus does not require the use of a dual fuel kit to be compatible with a dual fuel heat pump. The BMPlus can be set to select staging based on an adjustable time delay or based on outside air temperature.\n\n" +
        "The adjustable stage timer of 5 min. to 47 min. allows single stage thermostats to control two stage systems and heat pumps. The same potentiometer adjusts between 5 F and 47 F for outside air changeover. The adjustable supply air sensor included with every panel is used to protect the equipment from inefficient airflow. The BMPlus provides three adjustable settings for this feature. The cooling limit adjusts between 34 F and 52 F. The first stage of heat adjusts between 110 F and 170 while the second stage of heat has a 5 F to 47 differential from the first stage setting. This allows the supply air sensor to be mounted in the supply plenum, regardless of the coil/heat exchanger configuration.\n\n" +
        "You can use any four-wire thermostat with either manual or automatic changeover. The BMPlus will accept the first call from any thermostat and turn on the appropriate heating or cooling equipment while simultaneously closing the dampers to the non-calling zones. When another thermostat calls for the opposite mode, that call is held until the original calling zone is satisfied or until the opposing system timer of 20 min. (factory set) has expired, whichever comes first. Once the call is satisfied all dampers will open and the system will shut down for four minutes. After four minutes the opposite mode will energize the system and close the dampers to the satisfied zones. The “one zone” mode allows for easy and quick thermostat set back programming. An active “one zone” mode converts the zoning system to a single zone, all controlled and activated from the Zone One thermostat. This feature ensures energy efficiency during non-occupied periods.",
    STRING_NCM300_DESCRIPTION: "The NCM 300 panel provides intelligent control of Heat Pump or Conventional forced air zoning systems at a maximum of three zones using motorized dampers and practically any off-the-shelf heat/cool thermostat.\n\n" +
        "With features like automatic changeover, opposite system service, short cycle timers and supply air sensing capability, the NCM 300 provides a high level of performance in a non-expandable zone control panel. Suitable for new construction and retro-fit applications.",

    STRING_CONTACT_CALLUS: 'To get on the phone with an EWC representative, give us a call.\n\nPh: 1-800-446-3110\n\nFx: 1-732-446-5362',

    STRING_LEARNMORE_BYPASSDUCT: "Excess airflows through a bypass duct and damper to a return air duct.",
    STRING_LEARNMORE_DUMPZONE: "Excess airflows through a non-critical (temperature/humidity) room or space that functions as a bypass path to return air (large common areas, hallways or basements, for example).",
    STRING_LEARNMORE_DISTRIBUTEDRELIEF: "Excess airflows through zone dampers sitting on low-limit stops.",
    STRING_LEARNMORE_OVERBLOW: "Overblow is additional airflow through any open damper when one or more zone dampers close.",
    STRING_LEARNMORE_SELECTIVETHROTTLING: "Capacity control reduces blower Cfm, and/or, Btuh capacity at part load. Software/firmware routes excess air to one or more zones that are conditionally used as dump zone for a limited period of time.",
    STRING_LEARNMORE_RELIEFSTRATEGIESBOTTOMTEXT: "Some combination of the above methods can be required (using damper stops with a bypass duct, for example).",
    STRING_LEARNMORE_CAPACITYCONTROL: "Capacity control, by itself, might reconcile an excess air problem. When this is not the case, capacity control is used with one or more relief strategies. Capacity control usually adjusts heating-cooling capacity and blower Cfm (Btuh per Cfm might increase, decrease, or be unchanged).",
    STRING_LEARNMORE_REVISEZONINGPLAN: "The zoning plan must be revised when an excess air problem cannot be resolved by a distribution strategy; a capacity control strategy; or a combination of both strategies.",
    STRING_LEARNMORE_DEMANDSTRATEGIESBOTTOMTEXT_A: "a) The minimum supply air Cfm value must always be equal to or greater than the minimum acceptable value for blower Cfm. Relief strategies and zoning plan changes increase the minimum supply air Cfm value. Capacity control reduces the minimum acceptable blower Cfm value.",
    STRING_LEARNMORE_DEMANDSTRATEGIESBOTTOMTEXT_B: "b) Reducing blower Cfm without a corresponding reduction in sensible heating-cooling capacity increases or reduces leaving air temperature and makes it more difficult to manage excess air. For example, the functional bypass air Cfm value decreases as Btuh per Cfm increases.",
    STRING_LEARNMORE_DEMANDSTRATEGIESBOTTOMTEXT_C: "c) If zone dampers are open-close devices, the maximum amount of excess air Cfm equals the difference between the blower Cfm and the design Cfm for the critical zone.",
    STRING_LEARNMORE_DEMANDSTRATEGIESBOTTOMTEXT_D: "d) If zone dampers modulate, the excess air calculation is based on a minimum design Cfm value for zone heating, and a minimum design Cfm value for zone cooling, and these values might, or might not, be for the same zone.",
    STRING_LEARNMORE_DEMANDSTRATEGIESBOTTOMTEXT_E: "e) Equipment over sizing increases the excess air problem. Correct sizing with capacity control minimizes the excess air problem.",
}

export default APP_STRINGS;