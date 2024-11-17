webpackJsonp([0],{

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ENGProtocolData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_train_scene_scene__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_train_alert_alert__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_train_massive_tourniquet_tourniquet__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_train_massive_woundpacking_woundpacking__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_train_circulation_circulation__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_train_airway_headtilt_headtilt__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_train_airway_recoveryposition_recoveryposition__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_train_airway_situp_situp__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_train_respiration_respiration__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_train_heat_hyperthermia_hyperthermia__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_train_heat_hypothermia_hypothermia__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var ENGProtocolData = /** @class */ (function () {
    function ENGProtocolData(http) {
        this.http = http;
        this.FirstAidProtocol = [];
        this.FirstAidProtocol = [
            {
                //Under fire?
                Step: '0',
                InstructionText: 'Under enemy fire?',
                InformationButton: false,
                InformationPage: false,
                InformationPageName: '',
                InformationPager: true,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 1,
                NoButton: true,
                NoButtonGoToStepCount: 2,
                MARCH: 'null',
            },
            {
                //Return fire and evacuate
                Step: '1',
                InstructionText: 'Supress enemy fire and evacuate to cover',
                InformationButton: true,
                Information: [
                    {
                        Title: "Return fire",
                        Text: "All personnel (including casualties where able) should return and maintain fire to supress the enemy in order to evacuate to cover",
                    },
                    {
                        Title: "If medic and casualty in the open",
                        Text: "Desplegar granadas de humo en dirección contraria al viento, si es posible. Considera:Torniquete para hemorragias masivas. Colocar al herido boca abajo (vÍas respiratorias) hasta estar listo para moverlo.",
                    },
                    {
                        Title: "If casualty in the open",
                        Text: "If casualty unable to return effective fire, tell them to lie as still as possible. Plan rescue, considering: \n•	Support from friendly forces\n•	Use of vehicles\n•	Use of smoke\n•	Use of cover\n•	Use of rope line\n•	Quickest routes",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: true,
                CheckButton: true,
                CheckButtonGoToStepCount: 2,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'null',
            },
            {
                //Assess S.C.E.N.E
                Step: '2',
                InstructionText: 'Assess S.C.E.N.E',
                InformationButton: true,
                Information: [
                    {
                        Text: "",
                    },
                ],
                InformationPage: true,
                InformationPageName: __WEBPACK_IMPORTED_MODULE_3__pages_train_scene_scene__["a" /* ScenePage */],
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 3,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'null',
            },
            {
                //Transmit alert message
                Step: '3',
                InstructionText: 'Transmit alert message',
                InformationButton: true,
                Information: [
                    {
                        Text: "",
                    },
                ],
                InformationPage: true,
                InformationPageName: __WEBPACK_IMPORTED_MODULE_4__pages_train_alert_alert__["a" /* AlertPage */],
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 6,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'null',
            },
            {
                //Multiple casualties? 
                Step: '4',
                InstructionText: 'Multiple casualties?',
                InformationButton: false,
                Information: [
                    {
                        Text: "",
                    },
                ],
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 5,
                NoButton: true,
                NoButtonGoToStepCount: 6,
                MARCH: 'null',
            },
            {
                //Prioritize casualties
                Step: '5',
                InstructionText: 'Prioritize casualties and treat accordingly',
                InformationButton: true,
                Information: [
                    {
                        Title: "Prioritize casualties",
                        Text: "In circumstances where the number of casualties outweighs the number of responders and resources, decisions must be made to prioritize casualties to ensure the best is done for the most victims.",
                    },
                    {
                        Title: "Triage",
                        Text: "Triage is the process of determining the priority of patients' treatments based on the severity of their condition and can be used to prioritize casualties.\nThe following categories are often used in triage:\n\n•	T1, priority 1 (RED: Immediate). This category has the highest priority for treatment or evacuation as urgent interventions are required to ensure the casualty’s survival. Examples: Airway obstruction, respiratory emergencies, shock and severe trauma.\n\n•	T2, priority 2 (YELLOW: Urgent). This comprises cases that require early treatment, particularly surgery, and it is recommended that evacuation to a surgical facility take place within 6 hours of injury. Examples: major limb injuries and fractures, closed head injury, open eye injury and moderate burns.\n\n•	T3, priority 3 (GREEN: Delayed or hold). Treatment is less urgent in this category and can be deferred if there are other casualties requires limited treatment or evacuation assets. Examples: Closed fractures, soft tissue injury, closed chest injury and facial injury.\n\n•	Dead, priority 4 (BLACK: Expectant or deceased). This category refers to casualties whose injuries or illnesses are so serious that they have minimal chances of survival or who are dead on arrival. Should there be competition for limited medical resources, such cases will have lower priority for evacuation or treatment, despite the severity of their condition.",
                    },
                ],
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 6,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'null',
            },
            {
                //Massive bleeding?
                Step: '6',
                InstructionText: 'Massive bleeding?',
                InformationButton: false,
                Information: [
                    {
                        Text: "",
                    },
                ],
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 7,
                NoButton: true,
                NoButtonGoToStepCount: 18,
                MARCH: 'M',
            },
            {
                //Bleeding on limbs?
                Step: '7',
                InstructionText: 'Bleeding on limbs?',
                InformationButton: false,
                Information: [
                    {
                        Text: "",
                    },
                ],
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 8,
                NoButton: true,
                NoButtonGoToStepCount: 16,
                MARCH: 'M',
            },
            {
                //Apply tourniquet
                Step: '8',
                InstructionText: 'Apply tourniquet',
                InformationButton: true,
                Information: [
                    {
                        Text: "",
                    },
                ],
                InformationPage: true,
                InformationPageName: __WEBPACK_IMPORTED_MODULE_5__pages_train_massive_tourniquet_tourniquet__["a" /* TourniquetPage */],
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 9,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'M',
            },
            {
                //Bleeding stopped?
                Step: '9',
                InstructionText: 'Bleeding stopped?',
                InformationButton: false,
                Information: [
                    {
                        Text: "",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 60,
                NoButton: true,
                NoButtonGoToStepCount: 10,
                MARCH: 'M',
            },
            {
                //Apply tourniquet
                Step: '10',
                InstructionText: 'Apply 2nd tourniquet above first',
                InformationButton: true,
                Information: [
                    {
                        Text: "",
                    },
                ],
                InformationPage: true,
                InformationPageName: __WEBPACK_IMPORTED_MODULE_5__pages_train_massive_tourniquet_tourniquet__["a" /* TourniquetPage */],
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 11,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'M',
            },
            {
                //Apply tourniquet
                Step: '11',
                InstructionText: 'Bleeding stopped?',
                InformationButton: false,
                Information: [
                    {
                        Text: "",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 60,
                NoButton: true,
                NoButtonGoToStepCount: 12,
                MARCH: 'M',
            },
            {
                //Pack Wound
                Step: '12',
                InstructionText: 'Pack wound',
                InformationButton: true,
                Information: [
                    {
                        Text: "",
                    },
                ],
                InformationPage: true,
                InformationPageName: __WEBPACK_IMPORTED_MODULE_6__pages_train_massive_woundpacking_woundpacking__["a" /* WoundpackingPage */],
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 13,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'M',
            },
            {
                //Bleeding stopped?
                Step: '13',
                InstructionText: 'Bleeding stopped?',
                InformationButton: false,
                Information: [
                    {
                        Text: "",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 60,
                NoButton: true,
                NoButtonGoToStepCount: 14,
                MARCH: 'M',
            },
            {
                //Repack wound
                Step: '14',
                InstructionText: 'Repack wound and apply pressure for longer',
                InformationButton: false,
                Information: [
                    {
                        Text: "",
                    },
                ],
                InformationPage: true,
                InformationPageName: __WEBPACK_IMPORTED_MODULE_7__pages_train_circulation_circulation__["a" /* CirculationPage */],
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 15,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'M',
            },
            {
                //Apply dressing
                Step: '15',
                InstructionText: 'Secure EPD over wound',
                InformationButton: true,
                Information: [
                    {
                        Text: "",
                    },
                ],
                InformationPage: true,
                InformationPageName: __WEBPACK_IMPORTED_MODULE_7__pages_train_circulation_circulation__["a" /* CirculationPage */],
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 60,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'M',
            },
            {
                //Pack wound
                Step: '16',
                InstructionText: 'Pack wound',
                InformationButton: true,
                Information: [
                    {
                        Text: "",
                    },
                ],
                InformationPage: true,
                InformationPageName: __WEBPACK_IMPORTED_MODULE_6__pages_train_massive_woundpacking_woundpacking__["a" /* WoundpackingPage */],
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 17,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'M',
            },
            {
                //Bleeding stopped?
                Step: '17',
                InstructionText: 'Bleeding stopped?',
                InformationButton: false,
                Information: [
                    {
                        Text: "",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 60,
                NoButton: true,
                NoButtonGoToStepCount: 14,
                MARCH: 'M',
            },
            {
                //Casualty normal?
                Step: '18',
                InstructionText: 'Is the casualty responding normally?',
                InformationButton: true,
                Information: [
                    {
                        Title: "Shake and shout",
                        Text: "•	If the casualty is conscious, ask ‘what happened?’ or ‘where are you hurt?’\n•	If the casualty appears unconscious or has collapsed, shake the casualty and ask ‘are you alright?’\n•	If the casualty responds normally, the person has a clear airway, is breathing and has brain perfusion.\n•	If the casualty speaks only in short sentences, he may have breathing problems. Failure of the casualty to respond is a clear marker of critical illness.",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 27,
                NoButton: true,
                NoButtonGoToStepCount: 19,
                MARCH: 'A',
            },
            {
                //Casualty conscious?
                Step: '19',
                InstructionText: 'Is the casualty conscious?',
                InformationButton: false,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 24,
                NoButton: true,
                NoButtonGoToStepCount: 20,
                MARCH: 'A',
            },
            {
                //Examine airway & remove debris
                Step: '20',
                InstructionText: 'Examine airway and remove potential debris',
                InformationButton: true,
                Information: [
                    {
                        Title: "Examine airway",
                        Text: "If the casualty appears unconscious, open their mouth, inspect the mouth and remove potential debris.",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 21,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'A',
            },
            {
                //Perform head-tilt
                Step: '21',
                InstructionText: 'Open airway by performing head-tilt',
                InformationButton: true,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: true,
                InformationPageName: __WEBPACK_IMPORTED_MODULE_8__pages_train_airway_headtilt_headtilt__["a" /* HeadtiltPage */],
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 22,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'A',
            },
            {
                //Continuing breathing difficulties?
                Step: '22',
                InstructionText: 'Continuing breathing difficulties?',
                InformationButton: false,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 23,
                NoButton: true,
                NoButtonGoToStepCount: 27,
                MARCH: 'A',
            },
            {
                //Recovery position
                Step: '23',
                InstructionText: 'Apply recovery position',
                InformationButton: true,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: true,
                InformationPageName: __WEBPACK_IMPORTED_MODULE_9__pages_train_airway_recoveryposition_recoveryposition__["a" /* RecoverypositionPage */],
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 63,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'A',
            },
            {
                //Examine airway & remove debris
                Step: '24',
                InstructionText: 'Examine airway and let casualty remove debris',
                InformationButton: true,
                Information: [
                    {
                        Title: "Examine airway",
                        Text: "If the casualty is conscious, ask them to remove potential debris from their mouth.",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 25,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'A',
            },
            {
                //Continuing problems? 
                Step: '25',
                InstructionText: 'Continuing breathing problems?',
                InformationButton: false,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 26,
                NoButton: true,
                NoButtonGoToStepCount: 27,
                MARCH: 'A',
            },
            {
                //Sit-up & forward
                Step: '26',
                InstructionText: 'Apply sit-up & forward position',
                InformationButton: true,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: true,
                InformationPageName: __WEBPACK_IMPORTED_MODULE_10__pages_train_airway_situp_situp__["a" /* SitupPage */],
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 27,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'A',
            },
            {
                //Examine chest and back
                Step: '27',
                InstructionText: 'Examine chest and back',
                InformationButton: true,
                Information: [
                    {
                        Title: "full chest assessment",
                        Text: "The full chest assessment consists of the following elements:\n•	Look at the chest for bruising, wounds, or lack of symmetry.\n•	Listen for unusual breath sounds.\n•	Feel the chest for abnormalities or wounds (in low light conditions).\n•	Check the armpits of the casualty, wounds can be hidden in the folds of the skin.",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 28,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'R',
            },
            {
                //Sucking wound(s)?
                Step: '28',
                InstructionText: 'Open chest wound?',
                InformationButton: true,
                Information: [
                    {
                        Title: "Open chest wounds",
                        Text: "An open chest wound can be caused by the chest wall being penetrated by a bullet, knife blade, shrapnel, or other object. Some of the signs and symptoms of an open chest wound:\n•	Sucking or hissing sounds coming from chest wound.\n•	Casualty coughing up blood.\n•	Frothy blood coming from the chest wound.\n•	Shortness of breath or difficulty in breathing.\n•	Chest not rising normally when the casualty inhales.\n•	Pain in the shoulder or chest area that increases with breathing.\n•	Bluish tint of lips, inside of mouth, fingertips, or nail beds.\n•	Signs of shock such as a rapid and weak heartbeat.",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 29,
                NoButton: true,
                NoButtonGoToStepCount: 31,
                MARCH: 'R',
            },
            {
                //Seal wound
                Step: '29',
                InstructionText: 'Seal wound',
                InformationButton: true,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: true,
                InformationPageName: __WEBPACK_IMPORTED_MODULE_11__pages_train_respiration_respiration__["a" /* RespirationPage */],
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 30,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'R',
            },
            {
                //Other sucking wound(s)?
                Step: '30',
                InstructionText: 'Other open chest wounds?',
                InformationButton: true,
                Information: [
                    {
                        Title: "Open chest wounds",
                        Text: "An open chest wound can be caused by the chest wall being penetrated by a bullet, knife blade, shrapnel, or other object. Some of the signs and symptoms of an open chest wound:\n•	Sucking or hissing sounds coming from chest wound.\n•	Casualty coughing up blood.\n•	Frothy blood coming from the chest wound.\n•	Shortness of breath or difficulty in breathing.\n•	Chest not rising normally when the casualty inhales.\n•	Pain in the shoulder or chest area that increases with breathing.\n•	Bluish tint of lips, inside of mouth, fingertips, or nail beds.\n•	Signs of shock such as a rapid and weak heartbeat.",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 29,
                NoButton: true,
                NoButtonGoToStepCount: 31,
                MARCH: 'R',
            },
            {
                //Airway burn?
                Step: '31',
                InstructionText: 'Suspected airway burns?',
                InformationButton: true,
                Information: [
                    {
                        Title: "Airway burns",
                        Text: "Burns to the airway can be caused by inhaling smoke, steam, superheated air, or toxic fumes. Airway burns can be very serious since the rapid swelling of burned tissue in the airway can quickly block the flow of air to the lungs. Symptoms and signs include:\n•	Hoarseness or change in voice.\n•	Harsh cough.\n•	Stridor.\n•	Burns to the face.\n•	Head and neck swelling.\n•	Signed nasal hair, eyebrows or eyelashes.\n•	Soot in the saliva, sputum, nose or mouth.",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 62,
                NoButton: true,
                NoButtonGoToStepCount: 33,
                MARCH: 'R',
            },
            {
                //Cool airway
                Step: '32',
                InstructionText: 'Cool airway with cold fluids',
                InformationButton: false,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: null,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'R',
            },
            {
                //Full body check
                Step: '33',
                InstructionText: 'Perform full body check',
                InformationButton: true,
                Information: [
                    {
                        Title: "Rapid assessment for bleeding",
                        Text: "Use the following procedure:\n•	Reassess any tourniquets applied (still effective?).\n•	Check the head for bleeding.\n•	Check the chest for bleeding.\n•	Check the abdomen (including back).\n•	Check the pelvis.\n•	Check upper legs.\n•	Check the lower legs and arms.",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 34,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'C',
            },
            {
                //Bleeding?
                Step: '34',
                InstructionText: 'Bleeding?',
                InformationButton: false,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 35,
                NoButton: true,
                NoButtonGoToStepCount: 51,
                MARCH: 'C',
            },
            {
                //Massive bleeding?
                Step: '35',
                InstructionText: 'Massive bleeding?',
                InformationButton: false,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 36,
                NoButton: true,
                NoButtonGoToStepCount: 48,
                MARCH: 'C',
            },
            {
                //Bleeding on limbs?
                Step: '36',
                InstructionText: 'Bleeding on limbs?',
                InformationButton: false,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 37,
                NoButton: true,
                NoButtonGoToStepCount: 45,
                MARCH: 'C',
            },
            {
                //Tourniquet
                Step: '37',
                InstructionText: 'Apply tourniquet',
                InformationButton: true,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: true,
                InformationPageName: __WEBPACK_IMPORTED_MODULE_5__pages_train_massive_tourniquet_tourniquet__["a" /* TourniquetPage */],
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 38,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'C',
            },
            {
                //Bleeding stopped?
                Step: '38',
                InstructionText: 'Bleeding stopped?',
                InformationButton: false,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 44,
                NoButton: true,
                NoButtonGoToStepCount: 39,
                MARCH: 'C',
            },
            {
                //Apply 2nd tourniquet
                Step: '39',
                InstructionText: 'Apply 2nd tourniquet above first',
                InformationButton: true,
                Information: [
                    {
                        Text: "",
                    },
                ],
                InformationPage: true,
                InformationPageName: __WEBPACK_IMPORTED_MODULE_5__pages_train_massive_tourniquet_tourniquet__["a" /* TourniquetPage */],
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 40,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'C',
            },
            {
                //Bleeding stopped?
                Step: '40',
                InstructionText: 'Bleeding stopped?',
                InformationButton: false,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 44,
                NoButton: true,
                NoButtonGoToStepCount: 41,
                MARCH: 'C',
            },
            {
                //Pack Wound
                Step: '41',
                InstructionText: 'Pack wound',
                InformationButton: true,
                Information: [
                    {
                        Text: "",
                    },
                ],
                InformationPage: true,
                InformationPageName: __WEBPACK_IMPORTED_MODULE_6__pages_train_massive_woundpacking_woundpacking__["a" /* WoundpackingPage */],
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 42,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'C',
            },
            {
                //Bleeding stopped?
                Step: '42',
                InstructionText: 'Bleeding stopped?',
                InformationButton: false,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 44,
                NoButton: true,
                NoButtonGoToStepCount: 43,
                MARCH: 'C',
            },
            {
                //Use EPD & direct pressure
                Step: '43',
                InstructionText: 'Repack wound and apply pressure for longer',
                InformationButton: false,
                Information: [
                    {
                        Text: "",
                    },
                ],
                InformationPage: true,
                InformationPageName: __WEBPACK_IMPORTED_MODULE_7__pages_train_circulation_circulation__["a" /* CirculationPage */],
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 44,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'C',
            },
            {
                //Apply dressing
                Step: '44',
                InstructionText: 'Secure EPD over wound',
                InformationButton: true,
                Information: [
                    {
                        Text: "",
                    },
                ],
                InformationPage: true,
                InformationPageName: __WEBPACK_IMPORTED_MODULE_7__pages_train_circulation_circulation__["a" /* CirculationPage */],
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 47,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'C',
            },
            {
                //Pack Wound
                Step: '45',
                InstructionText: 'Pack wound',
                InformationButton: true,
                Information: [
                    {
                        Text: "",
                    },
                ],
                InformationPage: true,
                InformationPageName: __WEBPACK_IMPORTED_MODULE_6__pages_train_massive_woundpacking_woundpacking__["a" /* WoundpackingPage */],
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 46,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'C',
            },
            {
                //Bleeding stopped?
                Step: '46',
                InstructionText: 'Bleeding stopped?',
                InformationButton: false,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 47,
                NoButton: true,
                NoButtonGoToStepCount: 43,
                MARCH: 'C',
            },
            {
                //Other bleeding wounds
                Step: '47',
                InstructionText: 'Other bleeding wounds?',
                InformationButton: false,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 35,
                NoButton: true,
                NoButtonGoToStepCount: 51,
                MARCH: 'C',
            },
            {
                //Abdominal wounds?
                Step: '48',
                InstructionText: 'Abdominal wounds?',
                InformationButton: false,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 49,
                NoButton: true,
                NoButtonGoToStepCount: 50,
                MARCH: 'C',
            },
            {
                //Apply wet dressing
                Step: '49',
                InstructionText: 'Apply wet dressing',
                InformationButton: true,
                Image1: true,
                Information: [
                    {
                        Title: "Abdominal wound treatment",
                        Text: "•	Do not try to touch organs or push organs back into the body cavity.\n•	Cover with a sterile dressing moistened with saline or clean water or with a clean plastic cover taped on all four sides.\n•	Bandage securely but not tightly\n•	Allow casualty to sit or lie in a comfortable position. Possibly with the legs bent, knees raised towards the chest.",
                        ImageURL: './assets/imgs/circulation/Abdominal.png'
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 47,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'C',
            },
            {
                //Apply EPD
                Step: '50',
                InstructionText: 'Apply EPD',
                InformationButton: true,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: true,
                InformationPageName: __WEBPACK_IMPORTED_MODULE_7__pages_train_circulation_circulation__["a" /* CirculationPage */],
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 47,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'C',
            },
            {
                //Suffering from heat
                Step: '51',
                InstructionText: 'Suffering from heat cramps, exhaustion or stroke?',
                InformationButton: true,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: true,
                InformationPageName: __WEBPACK_IMPORTED_MODULE_12__pages_train_heat_hyperthermia_hyperthermia__["a" /* HyperthermiaPage */],
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 52,
                NoButton: true,
                NoButtonGoToStepCount: 53,
                MARCH: 'H',
            },
            {
                //Cool casualty
                Step: '52',
                InstructionText: 'Cool casualty',
                InformationButton: true,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: true,
                InformationPageName: __WEBPACK_IMPORTED_MODULE_12__pages_train_heat_hyperthermia_hyperthermia__["a" /* HyperthermiaPage */],
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 55,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'H',
            },
            {
                //Suffering from cold
                Step: '53',
                InstructionText: 'Suffering from hypothermia?',
                InformationButton: true,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: true,
                InformationPageName: __WEBPACK_IMPORTED_MODULE_13__pages_train_heat_hypothermia_hypothermia__["a" /* HypothermiaPage */],
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 54,
                NoButton: true,
                NoButtonGoToStepCount: 55,
                MARCH: 'H',
            },
            {
                //Rewarm casualty
                Step: '54',
                InstructionText: 'Rewarm casualty',
                InformationButton: true,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: true,
                InformationPageName: __WEBPACK_IMPORTED_MODULE_13__pages_train_heat_hypothermia_hypothermia__["a" /* HypothermiaPage */],
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 55,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'H',
            },
            {
                //Other casualties
                Step: '55',
                InstructionText: 'Other casualties?',
                InformationButton: false,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 6,
                NoButton: true,
                NoButtonGoToStepCount: 56,
                MARCH: null,
            },
            {
                //Transfer to forward medical team?
                Step: '56',
                InstructionText: 'Can the casualty be handed over to a (forward) medical team?',
                InformationButton: false,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 59,
                NoButton: true,
                NoButtonGoToStepCount: 57,
                MARCH: null,
            },
            {
                //Keep checking MARCH
                Step: '57',
                InstructionText: 'Reassess MARCH',
                InformationButton: true,
                Information: [
                    {
                        Title: "Reassess MARCH",
                        Text: "When the casualty cannot be transferred to a (forward) medical team yet, the first aider should continue to monitor and reassess MARCH, for example by:\n•	Reassessing previously administered measures such as tourniquets, wound packing, and EPDs for effectiveness.\n•	Verifying that the casualty’s airway is still open.\n•	Verifying that the casualty’s respiration is still adequate. Reassessing chest seals and EPDs.\n•	Reassessing previously administered EPDs.\n•	Reassessing whether the casualty is suffering from hyperthermia or hypothermia.\n•	Making sure the casualty is as comfortable as the person’s situation permits.",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 58,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: null,
            },
            {
                //Restart protocol?
                Step: '58',
                InstructionText: 'Restart protocol to assist in reassessing march?',
                InformationButton: false,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 6,
                NoButton: true,
                NoButtonGoToStepCount: 56,
                MARCH: null,
            },
            {
                //End of protocol
                Step: '59',
                InstructionText: 'End of protocol',
                InformationButton: false,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 0,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: null,
            },
            {
                //Other massive bleeding
                Step: '60',
                InstructionText: 'Other massive bleeding?',
                InformationButton: false,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 7,
                NoButton: true,
                NoButtonGoToStepCount: 18,
                MARCH: 'M',
            },
            {
                //Call medic after recovery
                Step: '61',
                InstructionText: 'Call medic',
                InformationButton: false,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 27,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'A',
            },
            {
                //Call medic after airway burns
                Step: '62',
                InstructionText: 'Call medic',
                InformationButton: false,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 33,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'R',
            },
            {
                //Hypothermia blanket
                Step: '63',
                InstructionText: 'Apply hypothermia blanket',
                InformationButton: false,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 61,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'A',
            },
        ];
    }
    ENGProtocolData = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ENGProtocolData);
    return ENGProtocolData;
}());

//# sourceMappingURL=ENGprotocoldata.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FRProtocolData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_train_scene_scene__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_train_alert_alert__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_train_massive_tourniquet_tourniquet__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_train_massive_woundpacking_woundpacking__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_train_circulation_circulation__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_train_airway_headtilt_headtilt__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_train_airway_recoveryposition_recoveryposition__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_train_airway_situp_situp__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_train_respiration_respiration__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_train_heat_hyperthermia_hyperthermia__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_train_heat_hypothermia_hypothermia__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var FRProtocolData = /** @class */ (function () {
    function FRProtocolData(http) {
        this.http = http;
        this.FirstAidProtocol = [];
        this.FirstAidProtocol = [
            {
                //Under fire ?
                Step: '0',
                InstructionText: 'Sous le feu ennemi ?',
                InformationButton: false,
                InformationPage: false,
                InformationPageName: '',
                InformationPager: true,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 1,
                NoButton: true,
                NoButtonGoToStepCount: 2,
                MARCH: 'null',
            },
            {
                //Return fire and evacuate
                Step: '1',
                InstructionText: 'Réprimer le feu ennemi et évacuer à couvert',
                InformationButton: true,
                Information: [
                    {
                        Title: "Répliquer au tir",
                        Text: "Tout le personnel (y compris les blessés, le cas échéant) doit revenir et maintenir le feu pour réprimer l'ennemi afin d'évacuer pour se mettre à couvert.",
                    },
                    {
                        Title: "Si infirmier et victime à découvert",
                        Text: "Déployez de la fumée au vent si possible. Considérez:\n•	Tourniquet pour un saignement massif\n•	Retournement de la victime face vers le bas (voies aériennes) jusqu'à ce qu'elle soit prête à bouger.",
                    },
                    {
                        Title: "Si victime à découvert",
                        Text: "Si la victime est incapable de riposter efficacement, dites-lui de rester couchée et immobile autant que possible. Planifiez le sauvetage en considérant: \n•	Soutien des forces amies \n •	Utilisation des véhicules \n •	Utilisation de la fumée \n •	Se mettre à couvert \n •	Utilisation d'un filin de corde \n •	Itinéraires les plus rapides",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: true,
                CheckButton: true,
                CheckButtonGoToStepCount: 2,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'null',
            },
            {
                //Assess S.C.E.N.E
                Step: '2',
                InstructionText: 'Évaluer la S.C.E.N.E',
                InformationButton: true,
                Information: [
                    {
                        Text: "",
                    },
                ],
                InformationPage: true,
                InformationPageName: __WEBPACK_IMPORTED_MODULE_3__pages_train_scene_scene__["a" /* ScenePage */],
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 3,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'null',
            },
            {
                //Transmit alert message
                Step: '3',
                InstructionText: 'Transmettre un message d’alerte',
                InformationButton: true,
                Information: [
                    {
                        Text: "",
                    },
                ],
                InformationPage: true,
                InformationPageName: __WEBPACK_IMPORTED_MODULE_4__pages_train_alert_alert__["a" /* AlertPage */],
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 6,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'null',
            },
            {
                //Multiple casualties ? 
                Step: '4',
                InstructionText: 'De multiples victimes ?',
                InformationButton: false,
                Information: [
                    {
                        Text: "",
                    },
                ],
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 5,
                NoButton: true,
                NoButtonGoToStepCount: 6,
                MARCH: 'null',
            },
            {
                //Prioritize casualties
                Step: '5',
                InstructionText: 'Prioriser les victimes et les traiter en conséquence',
                InformationButton: true,
                Information: [
                    {
                        Title: "Prioriser les victimes",
                        Text: "Dans les cas où le nombre de victimes l’emporte sur le nombre d’intervenants et de ressources, des décisions doivent être prises pour établir l’ordre de priorité des victimes afin de s’assurer que la plupart des victimes seront traitées au mieux.",
                    },
                    {
                        Title: "Triage",
                        Text: "Le triage est le processus qui consiste à déterminer la priorité des traitements des patients en fonction de la gravité de leur état et peut servir à prioriser les victimes. Les catégories suivantes sont souvent utilisées dans le triage: \n\n•	T1 priorité 1 (ROUGE: Immédiat). Cette catégorie a la plus haute priorité pour le traitement ou l’évacuation, car des interventions urgentes sont nécessaires pour assurer la survie de la victime. Exemples: obstruction des voies respiratoires, urgences respiratoires, chocs et traumatismes graves.\n\n •	T2 priorité 2 (JAUNE: Urgent). Il s’agit des cas qui nécessitent un traitement précoce, en particulier une intervention chirurgicale, et il est recommandé que l’évacuation vers un bloc opératoire ait lieu dans les 6 heures suivant la blessure. Exemples: blessures graves et fractures d’un membre, traumatisme crânien fermé, lésions oculaires ouvertes et brûlures modérées.\n\n •	T3 priorité 3 (VERT: Différé ou en attente). Le traitement est moins urgent dans cette catégorie et peut être différé s’il y a d’autres victimes qui requièrent des moyens limités de traitement ou d’évacuation. Exemples: fractures fermées, lésion des tissus, lésion fermée de la poitrine et lésion faciale.\n\n •	T4 priorité 4 (NOIR: Agonisant ou décédé). Cette catégorie comprend les victimes dont les blessures ou les maladies sont si graves qu’elles ont peu de chances de survie ou qui sont décédées à leur arrivée. S’il y a concurrence pour obtenir des ressources médicales limitées, ces cas seront moins prioritaires pour l’évacuation ou le traitement malgré la gravité de leur état.",
                    },
                ],
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 6,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'null',
            },
            {
                //Massive bleeding ?
                Step: '6',
                InstructionText: 'Hémorragie massive ?',
                InformationButton: false,
                Information: [
                    {
                        Text: "",
                    },
                ],
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 7,
                NoButton: true,
                NoButtonGoToStepCount: 18,
                MARCH: 'M',
            },
            {
                //Bleeding on limbs ?
                Step: '7',
                InstructionText: 'Hémorragie sur les membres ?',
                InformationButton: false,
                Information: [
                    {
                        Text: "",
                    },
                ],
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 8,
                NoButton: true,
                NoButtonGoToStepCount: 16,
                MARCH: 'M',
            },
            {
                //Apply tourniquet
                Step: '8',
                InstructionText: 'Appliquer un garrot tourniquet',
                InformationButton: true,
                Information: [
                    {
                        Text: "",
                    },
                ],
                InformationPage: true,
                InformationPageName: __WEBPACK_IMPORTED_MODULE_5__pages_train_massive_tourniquet_tourniquet__["a" /* TourniquetPage */],
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 9,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'M',
            },
            {
                //Bleeding stopped ?
                Step: '9',
                InstructionText: 'Le saignement s’est arrêté ?',
                InformationButton: false,
                Information: [
                    {
                        Text: "",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 60,
                NoButton: true,
                NoButtonGoToStepCount: 10,
                MARCH: 'M',
            },
            {
                //Appliquer un garrot tourniquet
                Step: '10',
                InstructionText: 'Appliquer un 2e garrot tourniquet au-dessus du premier',
                InformationButton: true,
                Information: [
                    {
                        Text: "",
                    },
                ],
                InformationPage: true,
                InformationPageName: __WEBPACK_IMPORTED_MODULE_5__pages_train_massive_tourniquet_tourniquet__["a" /* TourniquetPage */],
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 11,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'M',
            },
            {
                //Apply tourniquet
                Step: '11',
                InstructionText: 'Le saignement s’est arrêté ?',
                InformationButton: false,
                Information: [
                    {
                        Text: "",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 60,
                NoButton: true,
                NoButtonGoToStepCount: 12,
                MARCH: 'M',
            },
            {
                //Pack Wound
                Step: '12',
                InstructionText: 'Emballage de la plaie',
                InformationButton: true,
                Information: [
                    {
                        Text: "",
                    },
                ],
                InformationPage: true,
                InformationPageName: __WEBPACK_IMPORTED_MODULE_6__pages_train_massive_woundpacking_woundpacking__["a" /* WoundpackingPage */],
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 13,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'M',
            },
            {
                //Bleeding stopped ?
                Step: '13',
                InstructionText: 'Le saignement s’est arrêté ?',
                InformationButton: false,
                Information: [
                    {
                        Text: "",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 60,
                NoButton: true,
                NoButtonGoToStepCount: 14,
                MARCH: 'M',
            },
            {
                //Repack wound
                Step: '14',
                InstructionText: 'Remballer la plaie et exercer une plus longue pression',
                InformationButton: false,
                Information: [
                    {
                        Text: "",
                    },
                ],
                InformationPage: true,
                InformationPageName: __WEBPACK_IMPORTED_MODULE_7__pages_train_circulation_circulation__["a" /* CirculationPage */],
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 15,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'M',
            },
            {
                //Apply dressing
                Step: '15',
                InstructionText: 'Fixer le PCU sur la plaie',
                InformationButton: true,
                Information: [
                    {
                        Text: "",
                    },
                ],
                InformationPage: true,
                InformationPageName: __WEBPACK_IMPORTED_MODULE_7__pages_train_circulation_circulation__["a" /* CirculationPage */],
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 60,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'M',
            },
            {
                //Pack wound
                Step: '16',
                InstructionText: 'Emballage de la plaie',
                InformationButton: true,
                Information: [
                    {
                        Text: "",
                    },
                ],
                InformationPage: true,
                InformationPageName: __WEBPACK_IMPORTED_MODULE_6__pages_train_massive_woundpacking_woundpacking__["a" /* WoundpackingPage */],
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 17,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'M',
            },
            {
                //Bleeding stopped ?
                Step: '17',
                InstructionText: 'Le saignement s’est arrêté ?',
                InformationButton: false,
                Information: [
                    {
                        Text: "",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 60,
                NoButton: true,
                NoButtonGoToStepCount: 14,
                MARCH: 'M',
            },
            {
                //Casualty normal ?
                Step: '18',
                InstructionText: 'La victime réagit-elle normalement ?',
                InformationButton: true,
                Information: [
                    {
                        Title: "Secouez et criez",
                        Text: "•	Si la victime est consciente, demandez-lui « Que s’est-il passé ? » ou « Où êtes-vous blessé ? »\n•	Si la victime semble inconsciente ou s’est évanouie, secouez-la et demandez-lui si elle va bien.\n•	Si la victime réagit normalement, la personne a les voies respiratoires dégagées, respire et a une perfusion cérébrale.\n•	Si la victime ne parle qu’en phrases courtes, elle peut avoir des problèmes respiratoires. Le fait que la victime ne réponde pas est un signe clair de maladie grave.",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 27,
                NoButton: true,
                NoButtonGoToStepCount: 19,
                MARCH: 'A',
            },
            {
                //Casualty conscious ?
                Step: '19',
                InstructionText: 'La victime est-elle consciente ?',
                InformationButton: false,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 24,
                NoButton: true,
                NoButtonGoToStepCount: 20,
                MARCH: 'A',
            },
            {
                //Examine airway & remove debris
                Step: '20',
                InstructionText: 'Examinez les voies respiratoires et enlevez les débris potentiels.',
                InformationButton: true,
                Information: [
                    {
                        Title: "Examiner les voies respiratoires",
                        Text: "Si la victime semble inconsciente, ouvrez la bouche, inspectez la bouche et enlevez les débris potentiels.",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 21,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'A',
            },
            {
                //Perform head-tilt
                Step: '21',
                InstructionText: 'Ouvrez les voies respiratoires en faisant une inclinaison de la tête',
                InformationButton: true,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: true,
                InformationPageName: __WEBPACK_IMPORTED_MODULE_8__pages_train_airway_headtilt_headtilt__["a" /* HeadtiltPage */],
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 22,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'A',
            },
            {
                //Continuing breathing difficulties ?
                Step: '22',
                InstructionText: 'Difficultés respiratoires persistantes ?',
                InformationButton: false,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 23,
                NoButton: true,
                NoButtonGoToStepCount: 27,
                MARCH: 'A',
            },
            {
                //Recovery position
                Step: '23',
                InstructionText: 'Exécuter la position latérale de sécurité',
                InformationButton: true,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: true,
                InformationPageName: __WEBPACK_IMPORTED_MODULE_9__pages_train_airway_recoveryposition_recoveryposition__["a" /* RecoverypositionPage */],
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 63,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'A',
            },
            {
                //Examine airway & remove debris
                Step: '24',
                InstructionText: 'Examinez les voies respiratoires et laissez la victime enlever les débris.',
                InformationButton: true,
                Information: [
                    {
                        Title: "Examiner les voies respiratoires",
                        Text: "Si la victime est consciente, demandez-lui d’enlever les débris potentiels de sa bouche.",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 25,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'A',
            },
            {
                //Continuing problems ? 
                Step: '25',
                InstructionText: 'Problèmes respiratoires persistants ?',
                InformationButton: false,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 26,
                NoButton: true,
                NoButtonGoToStepCount: 27,
                MARCH: 'A',
            },
            {
                //Sit-up & forward
                Step: '26',
                InstructionText: 'Appliquer la position assise penchée en avant',
                InformationButton: true,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: true,
                InformationPageName: __WEBPACK_IMPORTED_MODULE_10__pages_train_airway_situp_situp__["a" /* SitupPage */],
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 27,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'A',
            },
            {
                //Examine chest and back
                Step: '27',
                InstructionText: 'Examinez la poitrine et le dos',
                InformationButton: true,
                Information: [
                    {
                        Title: "Examen thoracique complet",
                        Text: "L’examen thoracique complet comprend les éléments suivants:\n•	Examiner la poitrine pour voir s’il y a des ecchymoses ou un manque de symétrie.\n•	Écouter la respiration à la recherche de sons inhabituels.\n•	Palper la poitrine à la recherche d’anomalies ou de blessures (dans des conditions de faible luminosité).\n•	Vérifier les aisselles de la victime, des blessures peuvent être cachées dans les plis de la peau.",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 28,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'R',
            },
            {
                //Sucking wound(s) ?
                Step: '28',
                InstructionText: 'Blessure ouverte à la poitrine ?',
                InformationButton: true,
                Information: [
                    {
                        Title: "Blessures ouvertes à la poitrine",
                        Text: "Une blessure ouverte à la poitrine peut être causée par la pénétration de la paroi thoracique par une balle, un éclat d’obus, une lame de couteau, ou tout autre objet. Certains des signes et symptômes d’une plaie thoracique ouverte:\n•	Sons de succion ou de sifflement provenant d’une blessure à la poitrine.\n•	La victime crache du sang.\n•	Sang mousseux provenant de la blessure à la poitrine.\n•	Essoufflement ou respiration difficile.\n•	Soulèvement anormal de la poitrine lorsque la victime inhale.\n•	Douleur à l’épaule ou à la poitrine qui augmente avec la respiration.\n•	Teinte bleutée des lèvres, à l’intérieur de la bouche, au bout des doigts ou au lit des ongles.\n•	Signes de choc tels qu’un battement cardiaque rapide et faible.",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 29,
                NoButton: true,
                NoButtonGoToStepCount: 31,
                MARCH: 'R',
            },
            {
                //Seal wound
                Step: '29',
                InstructionText: 'Fermer une plaie',
                InformationButton: true,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: true,
                InformationPageName: __WEBPACK_IMPORTED_MODULE_11__pages_train_respiration_respiration__["a" /* RespirationPage */],
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 30,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'R',
            },
            {
                //Other sucking wound(s) ?
                Step: '30',
                InstructionText: 'Autres blessures ouvertes à la poitrine ?',
                InformationButton: true,
                Information: [
                    {
                        Title: "Blessures ouvertes à la poitrine",
                        Text: "Une blessure ouverte à la poitrine peut être causée par la pénétration de la paroi thoracique par une balle, un éclat d’obus, une lame de couteau, ou tout autre objet. Certains des signes et symptômes d’une plaie thoracique ouverte:\n•	Sons de succion ou de sifflement provenant d’une blessure à la poitrine.\n•	La victime crache du sang.\n•	Sang mousseux provenant de la blessure à la poitrine.\n•	Essoufflement ou respiration difficile.\n•	Soulèvement anormal de la poitrine lorsque la victime inhale.\n•	Douleur à l’épaule ou à la poitrine qui augmente avec la respiration.\n•	Teinte bleutée des lèvres, à l’intérieur de la bouche, au bout des doigts ou au lit des ongles.\n•	Signes de choc tels qu’un battement cardiaque rapide et faible.",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 29,
                NoButton: true,
                NoButtonGoToStepCount: 31,
                MARCH: 'R',
            },
            {
                //Airway burn ?
                Step: '31',
                InstructionText: 'Brûlures présumées des voies respiratoires ?',
                InformationButton: true,
                Information: [
                    {
                        Title: "Brûlures des voies respiratoires",
                        Text: "Les brûlures des voies respiratoires peuvent être causées par l’inhalation de fumée, de vapeur, d’air surchauffé ou de fumées toxiques. Les brûlures des voies respiratoires peuvent être très graves, car le gonflement rapide des tissus brûlés dans les voies respiratoires peut bloquer rapidement le flux d’air vers les poumons. Les symptômes et les signes comprennent:\n•	Enrouement ou changement de voix\n•	Toux sévère\n•	Stridor\n•	Brûlures au visage\n•	Enflure de la tête et du cou\n•	Sourcils ou cils nasaux marqués\n•	Suie dans le nez ou la bouche, expectorations de salive",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 62,
                NoButton: true,
                NoButtonGoToStepCount: 33,
                MARCH: 'R',
            },
            {
                //Cool airway
                Step: '32',
                InstructionText: 'Rafraîchir les voies respiratoires avec des fluides froids',
                InformationButton: false,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 33,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'R',
            },
            {
                //Full body check
                Step: '33',
                InstructionText: 'Faire un examen complet du corps',
                InformationButton: true,
                Information: [
                    {
                        Title: "Évaluation rapide des saignements",
                        Text: "Suivez la procédure suivante:\n•	Réévaluer les garrots appliqués (toujours efficaces ?). \n•	Vérifier si la tête saigne.\n•	Vérifier la poitrine pour les saignements.\n•	Vérifier l’abdomen (y compris le dos).\n•	Vérifier le bassin.\n•	Vérifier le haut des jambes.\n•	Vérifier le bas des jambes et des bras.",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 34,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'C',
            },
            {
                //Bleeding ?
                Step: '34',
                InstructionText: 'Hémorragie ?',
                InformationButton: false,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 35,
                NoButton: true,
                NoButtonGoToStepCount: 51,
                MARCH: 'C',
            },
            {
                //Massive bleeding ?
                Step: '35',
                InstructionText: 'Hémorragie massive ?',
                InformationButton: false,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 36,
                NoButton: true,
                NoButtonGoToStepCount: 48,
                MARCH: 'C',
            },
            {
                //Bleeding on limbs ?
                Step: '36',
                InstructionText: 'Hémorragie sur les membres ?',
                InformationButton: false,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 37,
                NoButton: true,
                NoButtonGoToStepCount: 45,
                MARCH: 'C',
            },
            {
                //Tourniquet
                Step: '37',
                InstructionText: 'Appliquer un garrot tourniquet',
                InformationButton: true,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: true,
                InformationPageName: __WEBPACK_IMPORTED_MODULE_5__pages_train_massive_tourniquet_tourniquet__["a" /* TourniquetPage */],
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 38,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'C',
            },
            {
                //Bleeding stopped ?
                Step: '38',
                InstructionText: 'Le saignement s’est arrêté ?',
                InformationButton: false,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 44,
                NoButton: true,
                NoButtonGoToStepCount: 39,
                MARCH: 'C',
            },
            {
                //Apply 2nd tourniquet
                Step: '39',
                InstructionText: 'Appliquer un 2e garrot tourniquet au-dessus du premier',
                InformationButton: true,
                Information: [
                    {
                        Text: "",
                    },
                ],
                InformationPage: true,
                InformationPageName: __WEBPACK_IMPORTED_MODULE_5__pages_train_massive_tourniquet_tourniquet__["a" /* TourniquetPage */],
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 40,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'C',
            },
            {
                //Bleeding stopped ?
                Step: '40',
                InstructionText: 'Le saignement s’est arrêté ?',
                InformationButton: false,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 44,
                NoButton: true,
                NoButtonGoToStepCount: 41,
                MARCH: 'C',
            },
            {
                //Pack Wound
                Step: '41',
                InstructionText: 'Emballage de la plaie',
                InformationButton: true,
                Information: [
                    {
                        Text: "",
                    },
                ],
                InformationPage: true,
                InformationPageName: __WEBPACK_IMPORTED_MODULE_6__pages_train_massive_woundpacking_woundpacking__["a" /* WoundpackingPage */],
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 42,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'C',
            },
            {
                //Bleeding stopped ?
                Step: '42',
                InstructionText: 'Le saignement s’est arrêté ?',
                InformationButton: false,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 44,
                NoButton: true,
                NoButtonGoToStepCount: 43,
                MARCH: 'C',
            },
            {
                //Use EPD & direct pressure
                Step: '43',
                InstructionText: 'Remballer la plaie et exercer une plus longue pression',
                InformationButton: false,
                Information: [
                    {
                        Text: "",
                    },
                ],
                InformationPage: true,
                InformationPageName: __WEBPACK_IMPORTED_MODULE_7__pages_train_circulation_circulation__["a" /* CirculationPage */],
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 44,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'C',
            },
            {
                //Apply dressing
                Step: '44',
                InstructionText: 'Fixer le PCU sur la plaie',
                InformationButton: true,
                Information: [
                    {
                        Text: "",
                    },
                ],
                InformationPage: true,
                InformationPageName: __WEBPACK_IMPORTED_MODULE_7__pages_train_circulation_circulation__["a" /* CirculationPage */],
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 47,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'C',
            },
            {
                //Pack Wound
                Step: '45',
                InstructionText: 'Emballage de la plaie',
                InformationButton: true,
                Information: [
                    {
                        Text: "",
                    },
                ],
                InformationPage: true,
                InformationPageName: __WEBPACK_IMPORTED_MODULE_6__pages_train_massive_woundpacking_woundpacking__["a" /* WoundpackingPage */],
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 46,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'C',
            },
            {
                //Bleeding stopped ?
                Step: '46',
                InstructionText: 'Le saignement s’est arrêté ?',
                InformationButton: false,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 47,
                NoButton: true,
                NoButtonGoToStepCount: 43,
                MARCH: 'C',
            },
            {
                //Other bleeding wounds
                Step: '47',
                InstructionText: 'D’autres blessures qui saignent ?',
                InformationButton: false,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 35,
                NoButton: true,
                NoButtonGoToStepCount: 51,
                MARCH: 'C',
            },
            {
                //Abdominal wounds ?
                Step: '48',
                InstructionText: 'Blessures abdominales ?',
                InformationButton: false,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 49,
                NoButton: true,
                NoButtonGoToStepCount: 50,
                MARCH: 'C',
            },
            {
                //Apply wet dressing
                Step: '49',
                InstructionText: 'Appliquer un pansement humide',
                InformationButton: true,
                Image1: true,
                Information: [
                    {
                        Title: "Traitement des plaies abdominales",
                        Text: "Traitement des plaies abdominales\n•	N’essayez pas de toucher des organes ou de repousser des organes dans la cavité corporelle.\n•	Recouvrir d’un pansement stérile humidifié avec du sérum physiologique ou de l’eau propre ou d’une couverture en plastique propre collée sur les quatre côtés.\n•	Panser de façon sûre mais sans trop serrer\n•	Permettre à la victime de s’asseoir ou de s’allonger dans une position confortable. Peut-être avec les jambes fléchies, les genoux levés vers la poitrine.",
                        ImageURL: './assets/imgs/circulation/Abdominal.png'
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 47,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'C',
            },
            {
                //Apply EPD
                Step: '50',
                InstructionText: 'Appliquer un PCU',
                InformationButton: true,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: true,
                InformationPageName: __WEBPACK_IMPORTED_MODULE_7__pages_train_circulation_circulation__["a" /* CirculationPage */],
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 47,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'C',
            },
            {
                //Suffering from heat
                Step: '51',
                InstructionText: 'Souffrant de crampes de chaleur, d’épuisement ou d’accident vasculaire cérébral ?',
                InformationButton: true,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: true,
                InformationPageName: __WEBPACK_IMPORTED_MODULE_12__pages_train_heat_hyperthermia_hyperthermia__["a" /* HyperthermiaPage */],
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 52,
                NoButton: true,
                NoButtonGoToStepCount: 53,
                MARCH: 'H',
            },
            {
                //Cool casualty
                Step: '52',
                InstructionText: 'Rafraîchir la victime',
                InformationButton: true,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: true,
                InformationPageName: __WEBPACK_IMPORTED_MODULE_12__pages_train_heat_hyperthermia_hyperthermia__["a" /* HyperthermiaPage */],
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 55,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'H',
            },
            {
                //Suffering from cold
                Step: '53',
                InstructionText: 'Souffrant d’hypothermie ?',
                InformationButton: true,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: true,
                InformationPageName: __WEBPACK_IMPORTED_MODULE_13__pages_train_heat_hypothermia_hypothermia__["a" /* HypothermiaPage */],
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 54,
                NoButton: true,
                NoButtonGoToStepCount: 55,
                MARCH: 'H',
            },
            {
                //Rewarm casualty
                Step: '54',
                InstructionText: 'Réchauffer la victime',
                InformationButton: true,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: true,
                InformationPageName: __WEBPACK_IMPORTED_MODULE_13__pages_train_heat_hypothermia_hypothermia__["a" /* HypothermiaPage */],
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 55,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'H',
            },
            {
                //Other casualties
                Step: '55',
                InstructionText: 'D’autres victimes ?',
                InformationButton: false,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 6,
                NoButton: true,
                NoButtonGoToStepCount: 56,
                MARCH: null,
            },
            {
                //Transfer to forward medical team ?
                Step: '56',
                InstructionText: 'La victime peut-elle être confiée à une équipe médicale (avancée) ?',
                InformationButton: false,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 59,
                NoButton: true,
                NoButtonGoToStepCount: 57,
                MARCH: null,
            },
            {
                //Keep checking MARCH
                Step: '57',
                InstructionText: 'Réévaluer MARCH',
                InformationButton: true,
                Information: [
                    {
                        Title: "Réévaluer MARCH",
                        Text: "Lorsque la victime ne peut pas être transférée à une équipe médicale (avancée) le secouriste doit continuer à surveiller et réévaluer MARCH:\n•	Réévaluer l’efficacité des mesures déjà administrées, telles que l’emballage des plaies, les garrots tourniquet et les PCU.\n•	Vérifier que les voies respiratoires de la victime sont encore ouvertes.\n•	Vérifier que la respiration de la victime est encore adéquate. Réévaluation des pansements thoraciques occlusifs et des PCU.\n•	Réévaluer les PCU déjà posés.\n•	Réévaluer si la victime souffre d’hyperthermie ou d’hypothermie.\n•	S’assurer que la victime est aussi à l’aise que la situation de la personne le permet.",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 58,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: null,
            },
            {
                //Restart protocol ?
                Step: '58',
                InstructionText: 'Redémarrer le protocole pour aider à réévaluer MARCH ?',
                InformationButton: false,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 6,
                NoButton: true,
                NoButtonGoToStepCount: 56,
                MARCH: null,
            },
            {
                //End of protocol
                Step: '59',
                InstructionText: 'Fin du protocole',
                InformationButton: false,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 0,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: null,
            },
            {
                //Other massive bleeding
                Step: '60',
                InstructionText: 'D’autres saignements massifs ?',
                InformationButton: false,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 7,
                NoButton: true,
                NoButtonGoToStepCount: 18,
                MARCH: 'M',
            },
            {
                //Call medic after recovery
                Step: '61',
                InstructionText: 'Alerter l’auxiliaire-sanitaire',
                InformationButton: false,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 27,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'A',
            },
            {
                //Call medic after airway burns
                Step: '62',
                InstructionText: 'Alerter l’auxiliaire-sanitaire',
                InformationButton: false,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 33,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'R',
            },
            {
                //Hypothermia blanket
                Step: '63',
                InstructionText: 'Appliquer une couverture d’hypothermie',
                InformationButton: false,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 61,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'A',
            },
        ];
    }
    FRProtocolData = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], FRProtocolData);
    return FRProtocolData;
}());

//# sourceMappingURL=FRprotocoldata.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ESProtocolData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_train_scene_scene__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_train_alert_alert__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_train_massive_tourniquet_tourniquet__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_train_massive_woundpacking_woundpacking__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_train_circulation_circulation__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_train_airway_headtilt_headtilt__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_train_airway_recoveryposition_recoveryposition__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_train_airway_situp_situp__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_train_respiration_respiration__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_train_heat_hyperthermia_hyperthermia__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_train_heat_hypothermia_hypothermia__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var ESProtocolData = /** @class */ (function () {
    function ESProtocolData(http) {
        this.http = http;
        this.FirstAidProtocol = [];
        this.FirstAidProtocol = [
            {
                //Under fire?
                Step: '0',
                InstructionText: '¿BAJO FUEGO ENEMIGO?',
                InformationButton: false,
                InformationPage: false,
                InformationPageName: '',
                InformationPager: true,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 1,
                NoButton: true,
                NoButtonGoToStepCount: 2,
                MARCH: 'null',
            },
            {
                //Return fire and evacuate
                Step: '1',
                InstructionText: 'SUPRIMIR EL FUEGO ENEMIGO Y EVACUAR PARA CUBRIRSE',
                InformationButton: true,
                Information: [
                    {
                        Title: "RESPONDER EL ATAQUE",
                        Text: "La técnica de arrastre es un movimiento de emergencia utilizado por uno o dos Socorristas, para mover a una víctima de una corta distancia a una zona segura. Esto proporciona una mínima protección a la columna vertebral, pero permite un movimiento sin equipo y con rescatistas limitados.",
                    },
                    {
                        Title: "SI EL MÉDICO Y EL HERIDO ESTÁN AL DESCUBIERTO",
                        Text: "Si es posible, despliegue el humo contra el viento. Considere:\n• Torniquete para hemorragias masivas\n• Rodar a la víctima boca abajo (vía aérea) hasta que esté lista para moverse.",
                    },
                    {
                        Title: "SI EL HERIDO ESTÁ AL DESCUBIERTO",
                        Text: "Si el herido no puede responder el fuego efectivamente, indÍquele que se mantenga lo más quieto posible. Planifique el rescate, considerando:\n Apoyo de aliados.\n Uso de vehículos.\n Uso de granadas de humo.\n Uso de cobertura.\n Uso de cuerda guía. \n Rutas rápidas.",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: true,
                CheckButton: true,
                CheckButtonGoToStepCount: 2,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'null',
            },
            {
                //Assess S.C.E.N.E
                Step: '2',
                InstructionText: 'EVALÚAR S.C.A.N.R',
                InformationButton: true,
                Information: [
                    {
                        Text: "",
                    },
                ],
                InformationPage: true,
                InformationPageName: __WEBPACK_IMPORTED_MODULE_3__pages_train_scene_scene__["a" /* ScenePage */],
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 3,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'null',
            },
            {
                //Transmit alert message
                Step: '3',
                InstructionText: 'Transmitir mensaje de alerta',
                InformationButton: true,
                Information: [
                    {
                        Text: "",
                    },
                ],
                InformationPage: true,
                InformationPageName: __WEBPACK_IMPORTED_MODULE_4__pages_train_alert_alert__["a" /* AlertPage */],
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 6,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'null',
            },
            {
                //Multiple casualties? 
                Step: '4',
                InstructionText: '¿Múltiples víctimas?',
                InformationButton: false,
                Information: [
                    {
                        Text: "",
                    },
                ],
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 5,
                NoButton: true,
                NoButtonGoToStepCount: 6,
                MARCH: 'null',
            },
            {
                //Prioritize casualties
                Step: '5',
                InstructionText: 'Priorizar a las víctimas y tratarlas en consecuencia',
                InformationButton: true,
                Information: [
                    {
                        Title: "Priorizar las bajas",
                        Text: "En circunstancias en las que el número de víctimas supera el número de socorristas y recursos, se deben tomar decisiones para priorizar las víctimas para garantizar que se haga lo mejor para la mayoría de las víctimas.",
                    },
                    {
                        Title: "Triaje",
                        Text: "La clasificación es el proceso de determinar la prioridad de los tratamientos de los pacientes en función de la gravedad de su afección y se puede utilizar para priorizar a las víctimas.\nLas siguientes categorías se utilizan a menudo en la clasificación:\n\n• T1, prioridad 1 (ROJO: Inmediato ). Esta categoría tiene la máxima prioridad para el tratamiento o la evacuación, ya que se requieren intervenciones urgentes para garantizar la supervivencia de la víctima. Ejemplos: obstrucción de las vías respiratorias, emergencias respiratorias, shock y traumatismo grave.\n\n• T2, prioridad 2 (AMARILLO: Urgente). Esto comprende casos que requieren tratamiento temprano, particularmente cirugía, y se recomienda que la evacuación a un centro quirúrgico se realice dentro de las 6 horas posteriores a la lesión. Ejemplos: lesiones y fracturas importantes de extremidades, lesiones en la cabeza cerradas, lesiones en los ojos abiertos y quemaduras moderadas.\n\n• T3, prioridad 3 (VERDE: Retrasado o en espera). El tratamiento es menos urgente en esta categoría y puede diferirse si hay otras víctimas que requieren tratamiento o medios de evacuación limitados. Ejemplos: fracturas cerradas, lesiones de tejidos blandos, lesiones cerradas en el pecho y lesiones faciales.\n\n• Muerto, prioridad 4 (NEGRO: expectante o fallecido). Esta categoría se refiere a víctimas cuyas lesiones o enfermedades son tan graves que tienen mínimas posibilidades de sobrevivir o que están muertas al llegar. Si hubiera competencia por recursos médicos limitados, estos casos tendrán menor prioridad para la evacuación o el tratamiento, a pesar de la gravedad de su condición.",
                    },
                ],
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 6,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'null',
            },
            {
                //Massive bleeding?
                Step: '6',
                InstructionText: '¿Sangrado masivo?',
                InformationButton: false,
                Information: [
                    {
                        Text: "",
                    },
                ],
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 7,
                NoButton: true,
                NoButtonGoToStepCount: 18,
                MARCH: 'M',
            },
            {
                //Bleeding on limbs?
                Step: '7',
                InstructionText: '¿Sangrado en las extremidades?',
                InformationButton: false,
                Information: [
                    {
                        Text: "",
                    },
                ],
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 8,
                NoButton: true,
                NoButtonGoToStepCount: 16,
                MARCH: 'M',
            },
            {
                //Apply tourniquet
                Step: '8',
                InstructionText: 'aplicar torniquete',
                InformationButton: true,
                Information: [
                    {
                        Text: "",
                    },
                ],
                InformationPage: true,
                InformationPageName: __WEBPACK_IMPORTED_MODULE_5__pages_train_massive_tourniquet_tourniquet__["a" /* TourniquetPage */],
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 9,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'M',
            },
            {
                //Bleeding stopped?
                Step: '9',
                InstructionText: '¿Se detuvo el sangrado?',
                InformationButton: false,
                Information: [
                    {
                        Text: "",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 60,
                NoButton: true,
                NoButtonGoToStepCount: 10,
                MARCH: 'M',
            },
            {
                //Apply tourniquet
                Step: '10',
                InstructionText: 'Aplique el segundo torniquete arriba del primero.',
                InformationButton: true,
                Information: [
                    {
                        Text: "",
                    },
                ],
                InformationPage: true,
                InformationPageName: __WEBPACK_IMPORTED_MODULE_5__pages_train_massive_tourniquet_tourniquet__["a" /* TourniquetPage */],
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 11,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'M',
            },
            {
                //Apply tourniquet
                Step: '11',
                InstructionText: '¿Se detuvo el sangrado?',
                InformationButton: false,
                Information: [
                    {
                        Text: "",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 60,
                NoButton: true,
                NoButtonGoToStepCount: 12,
                MARCH: 'M',
            },
            {
                //Pack Wound
                Step: '12',
                InstructionText: 'herida de paquete',
                InformationButton: true,
                Information: [
                    {
                        Text: "",
                    },
                ],
                InformationPage: true,
                InformationPageName: __WEBPACK_IMPORTED_MODULE_6__pages_train_massive_woundpacking_woundpacking__["a" /* WoundpackingPage */],
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 13,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'M',
            },
            {
                //Bleeding stopped?
                Step: '13',
                InstructionText: '¿Se detuvo el sangrado?',
                InformationButton: false,
                Information: [
                    {
                        Text: "",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 60,
                NoButton: true,
                NoButtonGoToStepCount: 14,
                MARCH: 'M',
            },
            {
                //Repack wound
                Step: '14',
                InstructionText: 'Vuelva a empaquetar la herida y aplique presión por más tiempo.',
                InformationButton: false,
                Information: [
                    {
                        Text: "",
                    },
                ],
                InformationPage: true,
                InformationPageName: __WEBPACK_IMPORTED_MODULE_7__pages_train_circulation_circulation__["a" /* CirculationPage */],
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 15,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'M',
            },
            {
                //Apply dressing
                Step: '15',
                InstructionText: 'Asegure el EPD sobre la herida',
                InformationButton: true,
                Information: [
                    {
                        Text: "",
                    },
                ],
                InformationPage: true,
                InformationPageName: __WEBPACK_IMPORTED_MODULE_7__pages_train_circulation_circulation__["a" /* CirculationPage */],
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 60,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'M',
            },
            {
                //Pack wound
                Step: '16',
                InstructionText: 'herida de paquete',
                InformationButton: true,
                Information: [
                    {
                        Text: "",
                    },
                ],
                InformationPage: true,
                InformationPageName: __WEBPACK_IMPORTED_MODULE_6__pages_train_massive_woundpacking_woundpacking__["a" /* WoundpackingPage */],
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 17,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'M',
            },
            {
                //Bleeding stopped?
                Step: '17',
                InstructionText: '¿Se detuvo el sangrado?',
                InformationButton: false,
                Information: [
                    {
                        Text: "",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 60,
                NoButton: true,
                NoButtonGoToStepCount: 14,
                MARCH: 'M',
            },
            {
                //Casualty normal?
                Step: '18',
                InstructionText: '¿La víctima está respondiendo normalmente?',
                InformationButton: true,
                Information: [
                    {
                        Title: "Agitar y gritar",
                        Text: "• Si la víctima está consciente, pregunte '¿qué pasó?' o '¿dónde está herido?'\n• Si la víctima parece inconsciente o se ha desplomado, sacúdala y pregúntele '¿está bien?'\n• Si la víctima responde normalmente, la persona tiene las vías respiratorias despejadas, respira y tiene perfusión cerebral.\n• Si la víctima habla sólo con frases cortas, es posible que tenga problemas respiratorios. La falta de respuesta de la víctima es un claro marcador de enfermedad crítica.",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 27,
                NoButton: true,
                NoButtonGoToStepCount: 19,
                MARCH: 'A',
            },
            {
                //Casualty conscious?
                Step: '19',
                InstructionText: '¿Está consciente la víctima?',
                InformationButton: false,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 24,
                NoButton: true,
                NoButtonGoToStepCount: 20,
                MARCH: 'A',
            },
            {
                //Examine airway & remove debris
                Step: '20',
                InstructionText: 'Examinar las vías respiratorias y eliminar posibles residuos.',
                InformationButton: true,
                Information: [
                    {
                        Title: "Examinar las vías respiratorias",
                        Text: "Si la víctima parece inconsciente, abra la boca, inspeccione la boca y elimine los posibles restos.",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 21,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'A',
            },
            {
                //Perform head-tilt
                Step: '21',
                InstructionText: 'Abrir las vías respiratorias realizando la inclinación de la cabeza.',
                InformationButton: true,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: true,
                InformationPageName: __WEBPACK_IMPORTED_MODULE_8__pages_train_airway_headtilt_headtilt__["a" /* HeadtiltPage */],
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 22,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'A',
            },
            {
                //Continuing breathing difficulties?
                Step: '22',
                InstructionText: '¿Dificultades respiratorias continuas?',
                InformationButton: false,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 23,
                NoButton: true,
                NoButtonGoToStepCount: 27,
                MARCH: 'A',
            },
            {
                //Recovery position
                Step: '23',
                InstructionText: 'Aplicar posición de recuperación',
                InformationButton: true,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: true,
                InformationPageName: __WEBPACK_IMPORTED_MODULE_9__pages_train_airway_recoveryposition_recoveryposition__["a" /* RecoverypositionPage */],
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 63,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'A',
            },
            {
                //Examine airway & remove debris
                Step: '24',
                InstructionText: 'Examinar las vías respiratorias y dejar que la víctima retire los desechos.',
                InformationButton: true,
                Information: [
                    {
                        Title: "Examinar las vías respiratorias",
                        Text: "Si la víctima está consciente, pídale que se quite los posibles restos de la boca.",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 25,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'A',
            },
            {
                //Continuing problems? 
                Step: '25',
                InstructionText: '¿Problemas respiratorios continuos?',
                InformationButton: false,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 26,
                NoButton: true,
                NoButtonGoToStepCount: 27,
                MARCH: 'A',
            },
            {
                //Sit-up & forward
                Step: '26',
                InstructionText: 'Aplicar posición sentada y adelantada',
                InformationButton: true,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: true,
                InformationPageName: __WEBPACK_IMPORTED_MODULE_10__pages_train_airway_situp_situp__["a" /* SitupPage */],
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 27,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'A',
            },
            {
                //Examine chest and back
                Step: '27',
                InstructionText: 'Examinar el pecho y la espalda.',
                InformationButton: true,
                Information: [
                    {
                        Title: "evaluación completa del tórax",
                        Text: "La evaluación completa del tórax consta de los siguientes elementos:\n• Observe el tórax en busca de hematomas, heridas o falta de simetría.\n• Escuche si hay ruidos respiratorios inusuales.\n• Toque el tórax en busca de anomalías o heridas (en condiciones de poca luz). condiciones).\n• Compruebe las axilas de la víctima, las heridas pueden estar ocultas en los pliegues de la piel.",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 28,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'R',
            },
            {
                //Sucking wound(s)?
                Step: '28',
                InstructionText: '¿Herida abierta en el pecho?',
                InformationButton: true,
                Information: [
                    {
                        Title: "Heridas abiertas en el pecho",
                        Text: "Una herida abierta en el pecho puede ser causada por la penetración de la pared torácica por una bala, hoja de cuchillo, metralla u otro objeto. Algunos de los signos y síntomas de una herida abierta en el pecho:\n• Sonidos de succión o silbidos provenientes de la herida en el pecho.\n• El herido tose sangre.\n• Sangre espumosa proveniente de la herida en el pecho.\n• Falta de aire o dificultad para respirar.\n• El pecho no se eleva normalmente cuando la víctima inhala.\n• Dolor en el hombro o en el área del pecho que aumenta con la respiración.\n• Tinte azulado en los labios, el interior de la boca, las yemas de los dedos o el lecho ungueal.\ n• Signos de shock, como latidos cardíacos rápidos y débiles.",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 29,
                NoButton: true,
                NoButtonGoToStepCount: 31,
                MARCH: 'R',
            },
            {
                //Seal wound
                Step: '29',
                InstructionText: 'Sellar la herida',
                InformationButton: true,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: true,
                InformationPageName: __WEBPACK_IMPORTED_MODULE_11__pages_train_respiration_respiration__["a" /* RespirationPage */],
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 30,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'R',
            },
            {
                //Other sucking wound(s)?
                Step: '30',
                InstructionText: '¿Otras heridas abiertas en el pecho?',
                InformationButton: true,
                Information: [
                    {
                        Title: "Heridas abiertas en el pecho",
                        Text: "Una herida abierta en el pecho puede ser causada por la penetración de la pared torácica por una bala, hoja de cuchillo, metralla u otro objeto. Algunos de los signos y síntomas de una herida abierta en el pecho:\n• Sonidos de succión o silbidos provenientes de la herida en el pecho.\n• El herido tose sangre.\n• Sangre espumosa proveniente de la herida en el pecho.\n• Falta de aire o dificultad para respirar.\n• El pecho no se eleva normalmente cuando la víctima inhala.\n• Dolor en el hombro o en el área del pecho que aumenta con la respiración.\n• Tinte azulado en los labios, el interior de la boca, las yemas de los dedos o el lecho ungueal.\ n• Signos de shock, como latidos cardíacos rápidos y débiles.",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 29,
                NoButton: true,
                NoButtonGoToStepCount: 31,
                MARCH: 'R',
            },
            {
                //Airway burn?
                Step: '31',
                InstructionText: '¿Sospechas de quemaduras en las vías respiratorias?',
                InformationButton: true,
                Information: [
                    {
                        Title: "Quemaduras en las vías respiratorias",
                        Text: "Las quemaduras en las vías respiratorias pueden ser causadas por la inhalación de humo, vapor, aire sobrecalentado o vapores tóxicos. Las quemaduras de las vías respiratorias pueden ser muy graves ya que la rápida inflamación del tejido quemado en las vías respiratorias puede bloquear rápidamente el flujo de aire a los pulmones. Los síntomas y signos incluyen:\n• Ronquera o cambio en la voz.\n• Tos fuerte.\n• Estridor.\n• Quemaduras en la cara.\n• Hinchazón de cabeza y cuello.\n• Señas de vello nasal, cejas o pestañas.\n• Hollín en la saliva, el esputo, la nariz o la boca.",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 62,
                NoButton: true,
                NoButtonGoToStepCount: 33,
                MARCH: 'R',
            },
            {
                //Cool airway
                Step: '32',
                InstructionText: 'Vías respiratorias frías con líquidos fríos.',
                InformationButton: false,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: null,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'R',
            },
            {
                //Full body check
                Step: '33',
                InstructionText: 'Realizar revisión de cuerpo completo',
                InformationButton: true,
                Information: [
                    {
                        Title: "Evaluación rápida de sangrado.",
                        Text: "Utilice el siguiente procedimiento:\n• Vuelva a evaluar los torniquetes aplicados (¿todavía son eficaces?).\n• Compruebe si hay sangrado en la cabeza.\n• Compruebe si hay sangrado en el pecho.\n• Compruebe si hay sangrado en el abdomen.\n• Revise la pelvis.\n• Revise la parte superior de las piernas.\n• Revise la parte inferior de las piernas y los brazos.",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 34,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'C',
            },
            {
                //Bleeding?
                Step: '34',
                InstructionText: '¿Sangrado?',
                InformationButton: false,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 35,
                NoButton: true,
                NoButtonGoToStepCount: 51,
                MARCH: 'C',
            },
            {
                //Massive bleeding?
                Step: '35',
                InstructionText: '¿Sangrado masivo?',
                InformationButton: false,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 36,
                NoButton: true,
                NoButtonGoToStepCount: 48,
                MARCH: 'C',
            },
            {
                //Bleeding on limbs?
                Step: '36',
                InstructionText: '¿Sangrado en las extremidades?',
                InformationButton: false,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 37,
                NoButton: true,
                NoButtonGoToStepCount: 45,
                MARCH: 'C',
            },
            {
                //Tourniquet
                Step: '37',
                InstructionText: 'aplicar torniquete',
                InformationButton: true,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: true,
                InformationPageName: __WEBPACK_IMPORTED_MODULE_5__pages_train_massive_tourniquet_tourniquet__["a" /* TourniquetPage */],
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 38,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'C',
            },
            {
                //Bleeding stopped?
                Step: '38',
                InstructionText: '¿Se detuvo el sangrado?',
                InformationButton: false,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 44,
                NoButton: true,
                NoButtonGoToStepCount: 39,
                MARCH: 'C',
            },
            {
                //Apply 2nd tourniquet
                Step: '39',
                InstructionText: 'Aplique el segundo torniquete arriba del primero.',
                InformationButton: true,
                Information: [
                    {
                        Text: "",
                    },
                ],
                InformationPage: true,
                InformationPageName: __WEBPACK_IMPORTED_MODULE_5__pages_train_massive_tourniquet_tourniquet__["a" /* TourniquetPage */],
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 40,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'C',
            },
            {
                //Bleeding stopped?
                Step: '40',
                InstructionText: '¿Se detuvo el sangrado?',
                InformationButton: false,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 44,
                NoButton: true,
                NoButtonGoToStepCount: 41,
                MARCH: 'C',
            },
            {
                //Pack Wound
                Step: '41',
                InstructionText: 'herida de paquete',
                InformationButton: true,
                Information: [
                    {
                        Text: "",
                    },
                ],
                InformationPage: true,
                InformationPageName: __WEBPACK_IMPORTED_MODULE_6__pages_train_massive_woundpacking_woundpacking__["a" /* WoundpackingPage */],
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 42,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'C',
            },
            {
                //Bleeding stopped?
                Step: '42',
                InstructionText: '¿Se detuvo el sangrado?',
                InformationButton: false,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 44,
                NoButton: true,
                NoButtonGoToStepCount: 43,
                MARCH: 'C',
            },
            {
                //Use EPD & direct pressure
                Step: '43',
                InstructionText: 'Vuelva a empaquetar la herida y aplique presión por más tiempo.',
                InformationButton: false,
                Information: [
                    {
                        Text: "",
                    },
                ],
                InformationPage: true,
                InformationPageName: __WEBPACK_IMPORTED_MODULE_7__pages_train_circulation_circulation__["a" /* CirculationPage */],
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 44,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'C',
            },
            {
                //Apply dressing
                Step: '44',
                InstructionText: 'Asegure el EPD sobre la herida',
                InformationButton: true,
                Information: [
                    {
                        Text: "",
                    },
                ],
                InformationPage: true,
                InformationPageName: __WEBPACK_IMPORTED_MODULE_7__pages_train_circulation_circulation__["a" /* CirculationPage */],
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 47,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'C',
            },
            {
                //Pack Wound
                Step: '45',
                InstructionText: 'herida de paquete',
                InformationButton: true,
                Information: [
                    {
                        Text: "",
                    },
                ],
                InformationPage: true,
                InformationPageName: __WEBPACK_IMPORTED_MODULE_6__pages_train_massive_woundpacking_woundpacking__["a" /* WoundpackingPage */],
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 46,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'C',
            },
            {
                //Bleeding stopped?
                Step: '46',
                InstructionText: '¿Se detuvo el sangrado?',
                InformationButton: false,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 47,
                NoButton: true,
                NoButtonGoToStepCount: 43,
                MARCH: 'C',
            },
            {
                //Other bleeding wounds
                Step: '47',
                InstructionText: '¿Otras heridas sangrantes?',
                InformationButton: false,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 35,
                NoButton: true,
                NoButtonGoToStepCount: 51,
                MARCH: 'C',
            },
            {
                //Abdominal wounds?
                Step: '48',
                InstructionText: '¿Heridas abdominales?',
                InformationButton: false,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 49,
                NoButton: true,
                NoButtonGoToStepCount: 50,
                MARCH: 'C',
            },
            {
                //Apply wet dressing
                Step: '49',
                InstructionText: 'Aplicar apósito húmedo',
                InformationButton: true,
                Image1: true,
                Information: [
                    {
                        Title: "Tratamiento de heridas abdominales",
                        Text: "• No intente tocar los órganos ni empujarlos hacia la cavidad del cuerpo.\n• Cúbralos con un vendaje estéril humedecido con solución salina o agua limpia o con una cubierta de plástico limpia pegada con cinta adhesiva en los cuatro lados.\n• Vende firmemente pero no con fuerza. \n• Permita que la víctima se siente o se acueste en una posición cómoda. Posiblemente con las piernas flexionadas y las rodillas levantadas hacia el pecho.",
                        ImageURL: './assets/imgs/circulation/Abdominal.png'
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 47,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'C',
            },
            {
                //Apply EPD
                Step: '50',
                InstructionText: 'Aplicar DEP',
                InformationButton: true,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: true,
                InformationPageName: __WEBPACK_IMPORTED_MODULE_7__pages_train_circulation_circulation__["a" /* CirculationPage */],
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 47,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'C',
            },
            {
                //Suffering from heat
                Step: '51',
                InstructionText: '¿Sufres de calambres por calor, agotamiento o derrame cerebral?',
                InformationButton: true,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: true,
                InformationPageName: __WEBPACK_IMPORTED_MODULE_12__pages_train_heat_hyperthermia_hyperthermia__["a" /* HyperthermiaPage */],
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 52,
                NoButton: true,
                NoButtonGoToStepCount: 53,
                MARCH: 'H',
            },
            {
                //Cool casualty
                Step: '52',
                InstructionText: 'víctima genial',
                InformationButton: true,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: true,
                InformationPageName: __WEBPACK_IMPORTED_MODULE_12__pages_train_heat_hyperthermia_hyperthermia__["a" /* HyperthermiaPage */],
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 55,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'H',
            },
            {
                //Suffering from cold
                Step: '53',
                InstructionText: '¿Sufres de hipotermia?',
                InformationButton: true,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: true,
                InformationPageName: __WEBPACK_IMPORTED_MODULE_13__pages_train_heat_hypothermia_hypothermia__["a" /* HypothermiaPage */],
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 54,
                NoButton: true,
                NoButtonGoToStepCount: 55,
                MARCH: 'H',
            },
            {
                //Rewarm casualty
                Step: '54',
                InstructionText: 'Recalentar a la víctima',
                InformationButton: true,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: true,
                InformationPageName: __WEBPACK_IMPORTED_MODULE_13__pages_train_heat_hypothermia_hypothermia__["a" /* HypothermiaPage */],
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 55,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'H',
            },
            {
                //Other casualties
                Step: '55',
                InstructionText: '¿Otras víctimas?',
                InformationButton: false,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 6,
                NoButton: true,
                NoButtonGoToStepCount: 56,
                MARCH: null,
            },
            {
                //Transfer to forward medical team?
                Step: '56',
                InstructionText: '¿Se puede entregar la víctima a un equipo médico (de avanzada)?',
                InformationButton: false,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 59,
                NoButton: true,
                NoButtonGoToStepCount: 57,
                MARCH: null,
            },
            {
                //Keep checking MARCH
                Step: '57',
                InstructionText: 'Reevaluar MARZO',
                InformationButton: true,
                Information: [
                    {
                        Title: "Reevaluar MARZO",
                        Text: "Cuando la víctima aún no puede ser transferida a un equipo médico (de avanzada), el socorrista debe continuar monitoreando y reevaluando MARCH, por ejemplo:\n• Reevaluando la efectividad de las medidas administradas previamente, como torniquetes, vendajes para heridas y DEP.\ n• Verificar que las vías respiratorias de la víctima aún estén abiertas.\n• Verificar que la respiración de la víctima aún sea adecuada. Reevaluar los sellos torácicos y los DEP.\n• Reevaluar los DEP administrados previamente.\n• Reevaluar si la víctima sufre de hipertermia o hipotermia.\n• Asegurarse de que la víctima esté tan cómoda como lo permita su situación.",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 58,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: null,
            },
            {
                //Restart protocol?
                Step: '58',
                InstructionText: '¿Reiniciar el protocolo para ayudar a reevaluar la marcha?',
                InformationButton: false,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 6,
                NoButton: true,
                NoButtonGoToStepCount: 56,
                MARCH: null,
            },
            {
                //End of protocol
                Step: '59',
                InstructionText: 'Fin del protocolo',
                InformationButton: false,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 0,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: null,
            },
            {
                //Other massive bleeding
                Step: '60',
                InstructionText: '¿Otro sangrado masivo?',
                InformationButton: false,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: false,
                CheckButtonGoToStepCount: null,
                YesButton: true,
                YesButtonGoToStepCount: 7,
                NoButton: true,
                NoButtonGoToStepCount: 18,
                MARCH: 'M',
            },
            {
                //Call medic after recovery
                Step: '61',
                InstructionText: 'llamar al medico',
                InformationButton: false,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 27,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'A',
            },
            {
                //Call medic after airway burns
                Step: '62',
                InstructionText: 'llamar al medico',
                InformationButton: false,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 33,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'R',
            },
            {
                //Hypothermia blanket
                Step: '63',
                InstructionText: 'Aplicar manta de hipotermia',
                InformationButton: false,
                Information: [
                    {
                        Title: "",
                        Text: "",
                    },
                ],
                InformationPage: false,
                InformationPageName: '',
                InformationPager: false,
                CheckButton: true,
                CheckButtonGoToStepCount: 61,
                YesButton: false,
                YesButtonGoToStepCount: null,
                NoButton: false,
                NoButtonGoToStepCount: null,
                MARCH: 'A',
            },
        ];
    }
    ESProtocolData = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ESProtocolData);
    return ESProtocolData;
}());

//# sourceMappingURL=ESProtocolData.js.map

/***/ }),

/***/ 127:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 127;

/***/ }),

/***/ 169:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 169;

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__protocol_protocol__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__train_train__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings_settings__ = __webpack_require__(223);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    function HomePage(storage, navCtrl, alertCtrl // Inject AlertController
    ) {
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl; // Inject AlertController
        this.StepHistory = [];
        //add 'this.GetLanguage()' to ionViewWillEnter(){}
        this.ENG = false;
        this.FR = false;
        this.ES = false;
    }
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log("ionViewWillEnter");
        this.GetLanguage();
        this.checkFirstLoad(); // Check for first load on page enter
        this.storage.get("StepHistory").then(function (data) {
            if (data) {
                _this.StepHistory = data;
                console.log("StepHistory exists on homePage   =", _this.StepHistory);
            }
        });
    };
    HomePage.prototype.checkFirstLoad = function () {
        var _this = this;
        this.storage.get("isFirstLoad").then(function (data) {
            if (data === null) {
                // Show alert if it's the first load
                _this.showFirstLoadPopup();
                // Set 'isFirstLoad' to false after showing the popup
                _this.storage.set("isFirstLoad", false);
            }
        });
    };
    HomePage.prototype.showFirstLoadPopup = function () {
        var alert = this.alertCtrl.create({
            title: "Enable Geolocation",
            message: "Enable geolocation from Settings in the top-right corner to allow the app to access your location for features like nearby locations or location-based services. Your location will only be used when necessary.",
            buttons: ["OK"],
        });
        alert.present();
    };
    HomePage.prototype.GetLanguage = function () {
        var _this = this;
        this.storage.get("Language").then(function (data) {
            console.log(data, "Language");
            if (data === "ENG") {
                _this.ES = false;
                _this.ENG = true;
                _this.FR = false;
            }
            else if (data === "ES") {
                _this.ES = true;
                _this.ENG = false;
                _this.FR = false;
            }
            else if (data === "FR") {
                _this.ENG = false;
                _this.FR = true;
                _this.ES = false;
            }
            else {
                _this.ENG = true;
                _this.ES = false;
                _this.FR = false;
                _this.storage.set("Language", "ENG");
            }
        });
    };
    HomePage.prototype.OpenProtocol = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__protocol_protocol__["a" /* ProtocolPage */]);
    };
    HomePage.prototype.OpenTraining = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__train_train__["a" /* TrainPage */]);
    };
    HomePage.prototype.GotoSettings = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__settings_settings__["a" /* SettingsPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-home",template:/*ion-inline-start:"D:\Projects\UN_Buddy_First_Aid_App\src\pages\home\home.html"*/'<ion-header no-border>\n  <ion-navbar color="transparent">\n    <ion-buttons right>\n      <button ion-button class="ion-icon" color="light" icon-only (click)="GotoSettings()">\n          <ion-icon name="settings"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n  <ion-content no-bounce>\n    <ion-grid>\n        <ion-row id="logocontainer" justify-content-center align-items-center>\n          <img id="logo" src="./assets/imgs/logo.svg" alt="logo">\n        </ion-row>\n        <ion-row id="rangenbuttons">\n          <ion-col>\n              <ion-buttons *ngIf="ENG === true">\n                <button class="buttons" clear ion-button color="light" icon-only (click)="OpenProtocol()">\n                protocol\n                </button>\n              </ion-buttons>\n              <ion-buttons *ngIf="ES === true">\n                <button class="buttons" clear ion-button color="light" icon-only (click)="OpenProtocol()">\n                  PROTOCOLO\n                </button>\n              </ion-buttons>\n              <ion-buttons *ngIf="FR === true">\n                <button class="buttons" clear ion-button color="light" icon-only (click)="OpenProtocol()">\n                protocole\n                </button>\n              </ion-buttons>\n          </ion-col>\n          <ion-col>\n              <ion-buttons *ngIf="ENG === true">\n                <button class="buttons" clear ion-button color="light" icon-only (click)="OpenTraining()">\n                training\n                </button>\n              </ion-buttons>\n              <ion-buttons *ngIf="ES === true">\n                <button class="buttons" clear ion-button color="light" icon-only (click)="OpenTraining()">\n                  ENTRENAMIENTO\n                </button>\n              </ion-buttons>\n              <ion-buttons *ngIf="FR === true">\n              <button class="buttons" clear ion-button color="light" icon-only (click)="OpenTraining()">\n                formation\n              </button>\n            </ion-buttons>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n</ion-content>\n'/*ion-inline-end:"D:\Projects\UN_Buddy_First_Aid_App\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] // Inject AlertController
        ])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProtocolPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_ENGprotocoldata__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_FRprotocoldata__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_ESProtocolData__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__infomodal_infomodal__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_audio__ = __webpack_require__(216);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ProtocolPage = /** @class */ (function () {
    function ProtocolPage(nativeAudio, platform, alertCtrl, storage, modalCtrl, ENGdataService, FRdataService, ESProtocolData, navCtrl) {
        this.nativeAudio = nativeAudio;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.ENGdataService = ENGdataService;
        this.FRdataService = FRdataService;
        this.ESProtocolData = ESProtocolData;
        this.navCtrl = navCtrl;
        this.ENG = false;
        this.FR = false;
        this.ES = false;
        this.Step = 0;
        this.StepHistory = [];
        this.InstructionText = '';
        this.InformationButton = false;
        this.Information = [];
        this.InformationPage = false;
        this.CheckButton = false;
        this.YesButton = false;
        this.NoButton = false;
    }
    ProtocolPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        if (this.platform.is('ios') || this.platform.is('android')) {
            this.nativeAudio.preloadComplex('Tap', 'assets/audio/Tap.mp3', 0.1, 1, 0);
        }
        else {
            console.log("Platform = not android or ios");
        }
        if (this.platform.is('ios')) {
            this.ios = true;
            console.log("ios === true");
        }
        if (this.platform.is('android')) {
            this.android = true;
            console.log("android === true");
        }
        this.storage.get('Language').then(function (data) {
            if (data === 'ENG') {
                _this.ENG = true;
                _this.FR = false;
                _this.ES = false;
                _this.GetInfo();
            }
            if (data === 'FR') {
                _this.ENG = false;
                _this.FR = true;
                _this.ES = false;
                _this.GetInfo();
            }
            if (data === 'ES') {
                _this.ENG = false;
                _this.FR = false;
                _this.ES = true;
                _this.GetInfo();
            }
        });
        this.storage.get('StepHistory').then(function (data) {
            if (data) {
                _this.StepHistory = data;
                if (_this.ENG === true) {
                    _this.presentENGAlert();
                }
                if (_this.FR === true) {
                    _this.presentFRAlert();
                }
                if (_this.ES === true) {
                    _this.presentESAlert();
                }
            }
            else {
                _this.Step = 0;
                _this.StepHistory = [];
            }
        });
    };
    ProtocolPage.prototype.presentENGAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Resume protocol',
            message: 'Do you want to resume?',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        _this.Step = 0;
                        _this.StepHistory = [];
                        _this.GetInfo();
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        _this.Step = _this.StepHistory.pop();
                        _this.GetInfo();
                    }
                }
            ]
        });
        alert.present();
    };
    ProtocolPage.prototype.presentFRAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Protocole de résumé',
            message: 'Voulez-vous résumer ?',
            buttons: [
                {
                    text: 'Non',
                    handler: function () {
                        _this.Step = 0;
                        _this.StepHistory = [];
                        _this.GetInfo();
                    }
                },
                {
                    text: 'Oui',
                    handler: function () {
                        _this.Step = _this.StepHistory.pop();
                        _this.GetInfo();
                    }
                }
            ]
        });
        alert.present();
    };
    ProtocolPage.prototype.presentESAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Reanudar protocolo',
            message: '¿Quieres reanudar?',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        _this.Step = 0;
                        _this.StepHistory = [];
                        _this.GetInfo();
                    }
                },
                {
                    text: 'Sí',
                    handler: function () {
                        _this.Step = _this.StepHistory.pop();
                        _this.GetInfo();
                    }
                }
            ]
        });
        alert.present();
    };
    ProtocolPage.prototype.CheckClick = function () {
        this.nativeAudio.play('Tap');
        this.SetHistory();
        this.Step = this.CheckButtonGoToStepCount;
        this.GetInfo();
    };
    ProtocolPage.prototype.YesClick = function () {
        this.nativeAudio.play('Tap');
        this.SetHistory();
        this.Step = this.YesButtonGoToStepCount;
        this.GetInfo();
    };
    ProtocolPage.prototype.NoClick = function () {
        this.nativeAudio.play('Tap');
        this.SetHistory();
        this.Step = this.NoButtonGoToStepCount;
        this.GetInfo();
    };
    ProtocolPage.prototype.BackClick = function () {
        this.nativeAudio.play('Tap');
        if (this.StepHistory.length === 0) {
            this.navCtrl.popToRoot();
        }
        else {
            this.Step = this.StepHistory.pop();
            this.GetInfo();
        }
    };
    ProtocolPage.prototype.SelectM = function () {
        this.nativeAudio.play('Tap');
        this.SetHistory();
        this.Step = 6;
        this.GetInfo();
    };
    ProtocolPage.prototype.SelectA = function () {
        this.nativeAudio.play('Tap');
        this.SetHistory();
        this.Step = 18;
        this.GetInfo();
    };
    ProtocolPage.prototype.SelectR = function () {
        this.nativeAudio.play('Tap');
        this.SetHistory();
        this.Step = 27;
        this.GetInfo();
    };
    ProtocolPage.prototype.SelectC = function () {
        this.nativeAudio.play('Tap');
        this.SetHistory();
        this.Step = 33;
        this.GetInfo();
    };
    ProtocolPage.prototype.SelectH = function () {
        this.nativeAudio.play('Tap');
        this.SetHistory();
        this.Step = 51;
        this.GetInfo();
    };
    ProtocolPage.prototype.SetHistory = function () {
        if (this.StepHistory[this.StepHistory.length - 1] != this.Step) {
            this.StepHistory.push(this.Step);
        }
    };
    ProtocolPage.prototype.GetInfo = function () {
        if (this.ENG === true) {
            this.InstructionText = this.ENGdataService.FirstAidProtocol[this.Step].InstructionText;
            this.InformationButton = this.ENGdataService.FirstAidProtocol[this.Step].InformationButton;
            this.Information = this.ENGdataService.FirstAidProtocol[this.Step].Information;
            this.InformationPage = this.ENGdataService.FirstAidProtocol[this.Step].InformationPage;
            this.InformationPageName = this.ENGdataService.FirstAidProtocol[this.Step].InformationPageName;
            this.CheckButton = this.ENGdataService.FirstAidProtocol[this.Step].CheckButton;
            this.CheckButtonGoToStepCount = this.ENGdataService.FirstAidProtocol[this.Step].CheckButtonGoToStepCount;
            this.YesButton = this.ENGdataService.FirstAidProtocol[this.Step].YesButton;
            this.YesButtonGoToStepCount = this.ENGdataService.FirstAidProtocol[this.Step].YesButtonGoToStepCount;
            this.NoButton = this.ENGdataService.FirstAidProtocol[this.Step].NoButton;
            this.NoButtonGoToStepCount = this.ENGdataService.FirstAidProtocol[this.Step].NoButtonGoToStepCount;
            this.MARCH = this.ENGdataService.FirstAidProtocol[this.Step].MARCH;
        }
        if (this.FR === true) {
            this.InstructionText = this.FRdataService.FirstAidProtocol[this.Step].InstructionText;
            this.InformationButton = this.FRdataService.FirstAidProtocol[this.Step].InformationButton;
            this.Information = this.FRdataService.FirstAidProtocol[this.Step].Information;
            this.InformationPage = this.FRdataService.FirstAidProtocol[this.Step].InformationPage;
            this.InformationPageName = this.FRdataService.FirstAidProtocol[this.Step].InformationPageName;
            this.CheckButton = this.FRdataService.FirstAidProtocol[this.Step].CheckButton;
            this.CheckButtonGoToStepCount = this.FRdataService.FirstAidProtocol[this.Step].CheckButtonGoToStepCount;
            this.YesButton = this.FRdataService.FirstAidProtocol[this.Step].YesButton;
            this.YesButtonGoToStepCount = this.FRdataService.FirstAidProtocol[this.Step].YesButtonGoToStepCount;
            this.NoButton = this.FRdataService.FirstAidProtocol[this.Step].NoButton;
            this.NoButtonGoToStepCount = this.FRdataService.FirstAidProtocol[this.Step].NoButtonGoToStepCount;
            this.MARCH = this.FRdataService.FirstAidProtocol[this.Step].MARCH;
        }
        if (this.ES === true) {
            this.InstructionText = this.ESProtocolData.FirstAidProtocol[this.Step].InstructionText;
            this.InformationButton = this.ESProtocolData.FirstAidProtocol[this.Step].InformationButton;
            this.Information = this.ESProtocolData.FirstAidProtocol[this.Step].Information;
            this.InformationPage = this.ESProtocolData.FirstAidProtocol[this.Step].InformationPage;
            this.InformationPageName = this.ESProtocolData.FirstAidProtocol[this.Step].InformationPageName;
            this.CheckButton = this.ESProtocolData.FirstAidProtocol[this.Step].CheckButton;
            this.CheckButtonGoToStepCount = this.ESProtocolData.FirstAidProtocol[this.Step].CheckButtonGoToStepCount;
            this.YesButton = this.ESProtocolData.FirstAidProtocol[this.Step].YesButton;
            this.YesButtonGoToStepCount = this.ESProtocolData.FirstAidProtocol[this.Step].YesButtonGoToStepCount;
            this.NoButton = this.ESProtocolData.FirstAidProtocol[this.Step].NoButton;
            this.NoButtonGoToStepCount = this.ESProtocolData.FirstAidProtocol[this.Step].NoButtonGoToStepCount;
            this.MARCH = this.ESProtocolData.FirstAidProtocol[this.Step].MARCH;
        }
    };
    ProtocolPage.prototype.OpenInfo = function () {
        console.log(this.InformationPage, 'this.InformationPage');
        if (this.InformationPage === true) {
            console.log(this.InformationPageName, 'this.InformationPage');
            var infoModal = this.modalCtrl.create(this.InformationPageName, { Step: this.Step });
            infoModal.present();
        }
        else {
            var infoModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__infomodal_infomodal__["a" /* InfoModalPage */], { Step: this.Step });
            infoModal.present();
        }
    };
    ProtocolPage.prototype.ionViewWillLeave = function () {
        if (this.StepHistory.length === 0) {
            this.storage.set('StepHistory', null);
            console.log("StepHistory WillLeave   =", this.StepHistory);
        }
        else {
            if (this.StepHistory[this.StepHistory.length - 1] != this.Step) {
                this.StepHistory.push(this.Step);
                this.storage.set('StepHistory', this.StepHistory);
                console.log("StepHistory WillLeave   =", this.StepHistory);
            }
        }
    };
    ProtocolPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-protocol',template:/*ion-inline-start:"D:\Projects\UN_Buddy_First_Aid_App\src\pages\protocol\protocol.html"*/'<ion-header no-border>\n  <ion-navbar>\n\n  </ion-navbar>\n</ion-header>\n\n  <ion-content no-padding no-bounce>\n  <ion-grid>\n  <ion-row>\n    <ion-col></ion-col>\n    <ion-col></ion-col>\n    <ion-col>\n        <button *ngIf="InformationButton === true && ENG === true" ion-button class="button" outline  (click)="OpenInfo()">INFO</button> \n        <button *ngIf="InformationButton === true && FR === true" ion-button class="button" outline  (click)="OpenInfo()">INFO</button>\n        <button style="font-size: 20px;" *ngIf="InformationButton === true && ES === true" ion-button class="button" outline  (click)="OpenInfo()">INFORMACIÓN</button> \n\n        <div *ngIf="InformationButton === false" class="placeholderhidden"></div>       \n    </ion-col>\n    <ion-col></ion-col>\n    <ion-col></ion-col>\n  </ion-row>\n  <ion-row no-padding>\n      <div id="InstructionText">{{ InstructionText }}</div>\n  </ion-row>\n  \n  <ion-row>\n      <ion-col></ion-col>\n      <ion-col>\n        <button *ngIf="YesButton === true && ENG === true" ion-button class="button" outline  (click)="YesClick()">YES</button>\n        <button *ngIf="YesButton === true && FR === true" ion-button class="button" outline  (click)="YesClick()">Oui</button>\n        <button *ngIf="YesButton === true && ES === true" ion-button class="button" outline  (click)="YesClick()">SÍ</button>\n      </ion-col>\n      <ion-col>\n        <button *ngIf="CheckButton === true && ios === true" ion-button class="button" outline  (click)="CheckClick()">\n          <ion-icon id="Checkmark" name=\'checkmark\'></ion-icon>          \n        </button>\n        <button *ngIf="CheckButton === true && android === true" ion-button class="button" outline  (click)="CheckClick()">\n          <ion-icon id="CheckmarkAndroid" name=\'checkmark\'></ion-icon>    \n        </button>\n      </ion-col>\n      <ion-col>\n        <button *ngIf="NoButton === true && ENG === true" ion-button class="button" outline  (click)="NoClick()">NO</button>\n        <button *ngIf="NoButton === true && FR === true" ion-button class="button" outline  (click)="NoClick()">Non</button>\n        <button *ngIf="NoButton === true && ES === true" ion-button class="button" outline  (click)="NoClick()">VOLVER</button>\n      </ion-col>\n      <ion-col></ion-col>\n  </ion-row>\n\n  <ion-row>\n      <ion-col></ion-col>\n      <ion-col></ion-col>\n      <ion-col>\n          <button ion-button class="button" *ngIf="ENG === true" outline  (click)="BackClick()">BACK</button>\n          <button ion-button class="button" *ngIf="FR === true" outline  (click)="BackClick()">Retour</button>\n          <button ion-button class="button" *ngIf="ES === true" outline  (click)="BackClick()">ATRÁS</button>\n      </ion-col>\n      <ion-col></ion-col>\n      <ion-col></ion-col>\n  </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n<ion-footer no-border>\n  <ion-segment id="segments" [(ngModel)]="MARCH">\n    <ion-segment-button value="M" (ionSelect)="SelectM()">\n      M\n    </ion-segment-button>\n    <ion-segment-button value="A" (ionSelect)="SelectA()">\n      A\n    </ion-segment-button>\n    <ion-segment-button value="R" (ionSelect)="SelectR()">\n      R\n    </ion-segment-button>\n    <ion-segment-button value="C" (ionSelect)="SelectC()">\n      C\n    </ion-segment-button>\n    <ion-segment-button value="H" (ionSelect)="SelectH()">\n      H\n    </ion-segment-button>\n</ion-segment>\n</ion-footer>'/*ion-inline-end:"D:\Projects\UN_Buddy_First_Aid_App\src\pages\protocol\protocol.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__ionic_native_native_audio__["a" /* NativeAudio */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_ENGprotocoldata__["a" /* ENGProtocolData */],
            __WEBPACK_IMPORTED_MODULE_3__providers_FRprotocoldata__["a" /* FRProtocolData */],
            __WEBPACK_IMPORTED_MODULE_4__providers_ESProtocolData__["a" /* ESProtocolData */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], ProtocolPage);
    return ProtocolPage;
}());

//# sourceMappingURL=protocol.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_ENGprotocoldata__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_FRprotocoldata__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_ESProtocolData__ = __webpack_require__(118);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var InfoModalPage = /** @class */ (function () {
    function InfoModalPage(storage, navParams, modalCtrl, ENGdataService, FRdataService, ESProtocolData, navCtrl) {
        this.storage = storage;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.ENGdataService = ENGdataService;
        this.FRdataService = FRdataService;
        this.ESProtocolData = ESProtocolData;
        this.navCtrl = navCtrl;
        this.Step = 0;
        this.Information = [];
        this.InformationPager = false;
        this.InformationPage = false;
        this.Image1 = false;
        this.Image2 = false;
        this.ImageURL = '';
        this.ENG = false;
        this.FR = false;
        this.ES = false;
    }
    InfoModalPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.Step = this.navParams.get('Step');
        this.InformationPage = this.navParams.get('InformationPage');
        this.storage.get('Language').then(function (data) {
            if (data === 'ENG') {
                _this.ENG = true;
                _this.FR = false;
                _this.ES = false;
                if (_this.InformationPage !== true) {
                    _this.GetInfo();
                    if (_this.Information[0]["Image1"] === true) {
                        _this.Image1 = true;
                    }
                    if (_this.Information[0]["Image2"] === true) {
                        _this.Image2 = true;
                    }
                }
            }
            if (data === 'FR') {
                _this.ENG = false;
                _this.FR = true;
                _this.ES = false;
                if (_this.InformationPage !== true) {
                    _this.GetInfo();
                    if (_this.Information[0]["Image1"] === true) {
                        _this.Image1 = true;
                    }
                    if (_this.Information[0]["Image2"] === true) {
                        _this.Image2 = true;
                    }
                }
            }
            if (data === 'ES') {
                _this.ENG = false;
                _this.FR = false;
                _this.ES = true;
                if (_this.InformationPage !== true) {
                    _this.GetInfo();
                    if (_this.Information[0]["Image1"] === true) {
                        _this.Image1 = true;
                    }
                    if (_this.Information[0]["Image2"] === true) {
                        _this.Image2 = true;
                    }
                }
            }
        });
    };
    InfoModalPage.prototype.GetInfo = function () {
        if (this.ENG === true) {
            this.Information = this.ENGdataService.FirstAidProtocol[this.Step].Information;
            this.InformationPager = this.ENGdataService.FirstAidProtocol[this.Step].InformationPager;
            this.Image1 = this.ENGdataService.FirstAidProtocol[this.Step].Image1;
            this.ImageURL = this.ENGdataService.FirstAidProtocol[this.Step].ImageURL;
        }
        if (this.FR === true) {
            this.Information = this.FRdataService.FirstAidProtocol[this.Step].Information;
            this.InformationPager = this.FRdataService.FirstAidProtocol[this.Step].InformationPager;
            this.Image1 = this.FRdataService.FirstAidProtocol[this.Step].Image1;
            this.ImageURL = this.FRdataService.FirstAidProtocol[this.Step].ImageURL;
        }
        if (this.ES === true) {
            this.Information = this.ESProtocolData.FirstAidProtocol[this.Step].Information;
            this.InformationPager = this.ESProtocolData.FirstAidProtocol[this.Step].InformationPager;
            this.Image1 = this.ESProtocolData.FirstAidProtocol[this.Step].Image1;
            this.ImageURL = this.ESProtocolData.FirstAidProtocol[this.Step].ImageURL;
        }
    };
    InfoModalPage.prototype.ModalDismiss = function () {
        this.navCtrl.pop();
    };
    InfoModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-infomodal',template:/*ion-inline-start:"D:\Projects\UN_Buddy_First_Aid_App\src\pages\protocol\infomodal\infomodal.html"*/'<ion-header no-border>\n  <ion-navbar color="transparent">\n    <ion-buttons left>\n        <button ion-button class="ion-icon" color="light" icon-only  (click)="ModalDismiss()">\n            <ion-icon id="closeicon" name="arrow-back"></ion-icon>\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-padding>\n    <ion-card class="card" *ngFor="let item of Information; let i = index">\n        <h2 id="Title">{{ Information[i].Title }}</h2>\n        <p id="Text">{{ Information[i].Text }}</p>  \n        <img *ngIf="Image1" id="Image1" src=".{{Information[i].ImageURL}}">  \n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"D:\Projects\UN_Buddy_First_Aid_App\src\pages\protocol\infomodal\infomodal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_ENGprotocoldata__["a" /* ENGProtocolData */],
            __WEBPACK_IMPORTED_MODULE_3__providers_FRprotocoldata__["a" /* FRProtocolData */],
            __WEBPACK_IMPORTED_MODULE_5__providers_ESProtocolData__["a" /* ESProtocolData */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], InfoModalPage);
    return InfoModalPage;
}());

//# sourceMappingURL=infomodal.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__airway_airway__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alert_alert__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__circulation_circulation__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__heat_heat__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__massive_massive__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__movement_movement__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__respiration_respiration__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__scene_scene__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__basics_basics__ = __webpack_require__(222);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var TrainPage = /** @class */ (function () {
    function TrainPage(storage, navCtrl) {
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.ENG = false;
        this.FR = false;
        this.ES = false;
    }
    TrainPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('Language').then(function (data) {
            if (data === 'ENG') {
                _this.ENG = true;
                _this.FR = false;
                _this.ES = false;
            }
            else if (data === 'FR') {
                _this.ENG = false;
                _this.FR = true;
                _this.ES = false;
            }
            else if (data === 'ES') {
                _this.ENG = false;
                _this.ES = true;
                _this.FR = false;
                // this.storage.set('Language', 'ENG');
            }
        });
    };
    TrainPage.prototype.GotoAirway = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__airway_airway__["a" /* AirwayPage */]);
    };
    TrainPage.prototype.GotoAlert = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__alert_alert__["a" /* AlertPage */]);
    };
    TrainPage.prototype.GotoCirculation = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__circulation_circulation__["a" /* CirculationPage */]);
    };
    TrainPage.prototype.GotoHeat = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__heat_heat__["a" /* HeatPage */]);
    };
    TrainPage.prototype.GotoMassive = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__massive_massive__["a" /* MassivePage */]);
    };
    TrainPage.prototype.GotoMovement = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__movement_movement__["a" /* MovementPage */]);
    };
    TrainPage.prototype.GotoRespiration = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__respiration_respiration__["a" /* RespirationPage */]);
    };
    TrainPage.prototype.GotoScene = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__scene_scene__["a" /* ScenePage */]);
    };
    TrainPage.prototype.GotoBasics = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__basics_basics__["a" /* BasicsPage */]);
    };
    TrainPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-train',template:/*ion-inline-start:"D:\Projects\UN_Buddy_First_Aid_App\src\pages\train\train.html"*/'<ion-header no-border>\n  <ion-navbar color="transparent">\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-bounce padding>\n  <ion-buttons *ngIf="ENG === true">\n    <button outline class="buttons" clear full ion-button color="light" icon-only (click)="GotoBasics()">\n      Basics\n    </button>\n  </ion-buttons>\n  <ion-buttons *ngIf="FR === true">\n    <button outline class="buttons" clear full ion-button color="light" icon-only (click)="GotoBasics()">\n      Notions élémentaires\n    </button>\n  </ion-buttons>\n  <ion-buttons *ngIf="ES === true">\n    <button outline class="buttons" clear full ion-button color="light" icon-only (click)="GotoBasics()">\n      Lo esencial\n    </button>\n  </ion-buttons>\n\n  <ion-buttons *ngIf="ENG === true">\n    <button outline class="buttons" clear full ion-button color="light" icon-only (click)="GotoScene()">\n      S.C.E.N.E assessment\n    </button>\n  </ion-buttons>\n  <ion-buttons *ngIf="FR === true">\n    <button outline class="buttons" clear full ion-button color="light" icon-only (click)="GotoScene()">\n      L\'évaluation S.C.E.N.E\n    </button>\n  </ion-buttons>\n  <ion-buttons *ngIf="ES === true">\n    <button outline class="buttons" clear full ion-button color="light" icon-only (click)="GotoScene()">\n      Evaluación S.C.E.N.E.\n    </button>\n  </ion-buttons>\n\n  <ion-buttons *ngIf="ENG === true">\n    <button outline class="buttons" clear full ion-button color="light" icon-only (click)="GotoAlert()">\n      Alert message\n    </button>\n  </ion-buttons>\n  <ion-buttons *ngIf="FR === true">\n    <button outline class="buttons" clear full ion-button color="light" icon-only (click)="GotoAlert()">\n      message d\'alerte\n    </button>\n  </ion-buttons>\n  <ion-buttons *ngIf="ES === true">\n    <button outline class="buttons" clear full ion-button color="light" icon-only (click)="GotoAlert()">\n      Mensaje de alerta\n    </button>\n  </ion-buttons>\n\n  <ion-buttons *ngIf="ENG === true">\n    <button outline class="buttons" clear full ion-button color="light" icon-only (click)="GotoMassive()">\n      Massive bleeding\n    </button>\n  </ion-buttons>\n  <ion-buttons *ngIf="FR === true">\n    <button outline class="buttons" clear full ion-button color="light" icon-only (click)="GotoMassive()">\n      hemorragie massive\n    </button>\n  </ion-buttons>\n  <ion-buttons *ngIf="ES === true">\n    <button outline class="buttons" clear full ion-button color="light" icon-only (click)="GotoMassive()">\n      Sangrado masivo\n    </button>\n  </ion-buttons>\n\n  <ion-buttons *ngIf="ENG === true">\n    <button outline class="buttons" clear full ion-button color="light" icon-only (click)="GotoAirway()">\n      Airway\n    </button>\n  </ion-buttons>\n  <ion-buttons *ngIf="FR === true">\n    <button outline class="buttons" clear full ion-button color="light" icon-only (click)="GotoAirway()">\n      voies respiratoires\n    </button>\n  </ion-buttons>\n  <ion-buttons *ngIf="ES === true">\n    <button outline class="buttons" clear full ion-button color="light" icon-only (click)="GotoAirway()">\n      VÍA RESPIRATORIA\n    </button>\n  </ion-buttons>\n\n  <ion-buttons *ngIf="ENG === true">\n    <button outline class="buttons" clear full ion-button color="light" icon-only (click)="GotoRespiration()">\n      Respiration\n    </button>\n  </ion-buttons>\n  <ion-buttons *ngIf="FR === true">\n    <button outline class="buttons" clear full ion-button color="light" icon-only (click)="GotoRespiration()">\n      Respiration\n    </button>\n  </ion-buttons>\n  <ion-buttons *ngIf="ES === true">\n    <button outline class="buttons" clear full ion-button color="light" icon-only (click)="GotoRespiration()">\n      Respiración\n    </button>\n  </ion-buttons>\n\n  <ion-buttons *ngIf="ENG === true">\n    <button outline class="buttons" clear full ion-button color="light" icon-only (click)="GotoCirculation()">\n      Circulation\n    </button>\n  </ion-buttons>\n  <ion-buttons *ngIf="FR === true">\n    <button outline class="buttons" clear full ion-button color="light" icon-only (click)="GotoCirculation()">\n      Circulation\n    </button>\n  </ion-buttons>\n  <ion-buttons *ngIf="ES === true">\n    <button outline class="buttons" clear full ion-button color="light" icon-only (click)="GotoCirculation()">\n      CIRCULACIÓN\n    </button>\n  </ion-buttons>\n\n  <ion-buttons *ngIf="ENG === true">\n    <button outline class="buttons" clear full ion-button color="light" icon-only (click)="GotoHeat()">\n      Heat disorders\n    </button>\n  </ion-buttons>\n  <ion-buttons *ngIf="FR === true">\n    <button outline class="buttons" clear full ion-button color="light" icon-only (click)="GotoHeat()">\n      Troubles de la chaleur\n    </button>\n  </ion-buttons>\n  <ion-buttons *ngIf="ES === true">\n    <button outline class="buttons" clear full ion-button color="light" icon-only (click)="GotoHeat()">\n      TRASTORNOS PRODUCIDOS POR EL CALOR\n    </button>\n  </ion-buttons>\n\n  <ion-buttons *ngIf="ENG === true">\n    <button outline class="buttons" clear full ion-button color="light" icon-only (click)="GotoMovement()">\n      Emergency movement\n    </button>\n  </ion-buttons>\n  <ion-buttons *ngIf="FR === true">\n    <button outline class="buttons" clear full ion-button color="light" icon-only (click)="GotoMovement()">\n      déplacement\n    </button>\n  </ion-buttons>\n  <ion-buttons *ngIf="ES === true">\n    <button outline class="buttons" clear full ion-button color="light" icon-only (click)="GotoMovement()">\n      MOVIMIENTOS DE EMERGENCIA\n    </button>\n  </ion-buttons>\n\n</ion-content>'/*ion-inline-end:"D:\Projects\UN_Buddy_First_Aid_App\src\pages\train\train.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], TrainPage);
    return TrainPage;
}());

//# sourceMappingURL=train.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AirwayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__headtilt_headtilt__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__recoveryposition_recoveryposition__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__situp_situp__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AirwayPage = /** @class */ (function () {
    function AirwayPage(storage, navCtrl) {
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.ENG = false;
        this.FR = false;
        this.ES = false;
    }
    AirwayPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('Language').then(function (data) {
            if (data === 'ENG') {
                _this.ENG = true;
                _this.FR = false;
                _this.ES = false;
            }
            if (data === 'FR') {
                _this.ENG = false;
                _this.FR = true;
                _this.ES = false;
            }
            if (data === 'ES') {
                _this.ENG = false;
                _this.FR = false;
                _this.ES = true;
            }
        });
    };
    AirwayPage.prototype.GotoHeadtilt = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__headtilt_headtilt__["a" /* HeadtiltPage */]);
    };
    AirwayPage.prototype.GotoRecovery = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__recoveryposition_recoveryposition__["a" /* RecoverypositionPage */]);
    };
    AirwayPage.prototype.GotoSitup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__situp_situp__["a" /* SitupPage */]);
    };
    AirwayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-airway',template:/*ion-inline-start:"D:\Projects\UN_Buddy_First_Aid_App\src\pages\train\airway\airway.html"*/'<ion-header no-border>\n    <ion-navbar color="transparent">\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-buttons *ngIf="ENG === true">\n        <button outline class="buttons" clear full ion-button color="light" icon-only (click)="GotoHeadtilt()">\n            Head-tilt\n        </button>\n    </ion-buttons>\n    <ion-buttons *ngIf="FR === true">\n        <button outline class="buttons" clear full ion-button color="light" icon-only (click)="GotoHeadtilt()">\n            Inclinaison de la tête\n        </button>\n    </ion-buttons>\n    <ion-buttons *ngIf="ES === true">\n        <button outline class="buttons" clear full ion-button color="light" icon-only (click)="GotoHeadtilt()">\n            INCLINACIÓN DE LA CABEZA\n        </button>\n    </ion-buttons>\n\n    <ion-buttons *ngIf="ENG === true">\n        <button outline class="buttons" clear full ion-button color="light" icon-only (click)="GotoRecovery()">\n            Recovery position\n        </button>\n    </ion-buttons>\n    <ion-buttons *ngIf="FR === true">\n        <button outline class="buttons" clear full ion-button color="light" icon-only (click)="GotoRecovery()">\n            Position de récupération\n        </button>\n    </ion-buttons>\n    <ion-buttons *ngIf="ES === true">\n        <button outline class="buttons" clear full ion-button color="light" icon-only (click)="GotoRecovery()">\n            POSICIÓN DE RECUPERACIÓN\n        </button>\n    </ion-buttons>\n\n    <ion-buttons *ngIf="ENG === true">\n        <button outline class="buttons" clear full ion-button color="light" icon-only (click)="GotoSitup()">\n            Sit-up and forward position\n        </button>\n    </ion-buttons>\n    <ion-buttons *ngIf="FR === true">\n        <button outline class="buttons" clear full ion-button color="light" icon-only (click)="GotoSitup()">\n            Position assise et en avant\n        </button>\n    </ion-buttons>\n    <ion-buttons *ngIf="ES === true">\n        <button outline class="buttons" clear full ion-button color="light" icon-only (click)="GotoSitup()">\n            POSICIÓN SENTADA HACIA ADELANTE\n        </button>\n    </ion-buttons>\n</ion-content>'/*ion-inline-end:"D:\Projects\UN_Buddy_First_Aid_App\src\pages\train\airway\airway.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], AirwayPage);
    return AirwayPage;
}());

//# sourceMappingURL=airway.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hyperthermia_hyperthermia__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hypothermia_hypothermia__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HeatPage = /** @class */ (function () {
    function HeatPage(storage, navCtrl) {
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.ENG = false;
        this.FR = false;
        this.ES = false;
    }
    HeatPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('Language').then(function (data) {
            if (data === 'ENG') {
                _this.ENG = true;
                _this.FR = false;
                _this.ES = false;
            }
            if (data === 'FR') {
                _this.ENG = false;
                _this.FR = true;
                _this.ES = false;
            }
            if (data === 'ES') {
                _this.ENG = false;
                _this.FR = false;
                _this.ES = true;
            }
        });
    };
    HeatPage.prototype.GotoHyperthermia = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__hyperthermia_hyperthermia__["a" /* HyperthermiaPage */]);
    };
    HeatPage.prototype.GotoHypothermia = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__hypothermia_hypothermia__["a" /* HypothermiaPage */]);
    };
    HeatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-heat',template:/*ion-inline-start:"D:\Projects\UN_Buddy_First_Aid_App\src\pages\train\heat\heat.html"*/'<ion-header no-border>\n    <ion-navbar color="transparent">\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-buttons *ngIf="ENG === true">\n        <button outline class="buttons" clear full ion-button icon-only (click)="GotoHyperthermia()">\n            Hyperthermia\n        </button>\n    </ion-buttons>\n    <ion-buttons *ngIf="FR === true">\n        <button outline class="buttons" clear full ion-button icon-only (click)="GotoHyperthermia()">\n            Hyperthermie\n        </button>\n    </ion-buttons>\n    <ion-buttons *ngIf="ES === true">\n        <button outline class="buttons" clear full ion-button icon-only (click)="GotoHyperthermia()">\n            HIPERTERMIA\n        </button>\n    </ion-buttons>\n\n    <ion-buttons *ngIf="ENG === true">\n        <button outline class="buttons" clear full ion-button icon-only (click)="GotoHypothermia()">\n            Hypothermia\n        </button>\n    </ion-buttons>\n    <ion-buttons *ngIf="FR === true">\n        <button outline class="buttons" clear full ion-button icon-only (click)="GotoHypothermia()">\n            Hypothermie\n        </button>\n    </ion-buttons>\n    <ion-buttons *ngIf="ES === true">\n        <button outline class="buttons" clear full ion-button icon-only (click)="GotoHypothermia()">\n            HIPOTERMIA\n        </button>\n    </ion-buttons>\n</ion-content>'/*ion-inline-end:"D:\Projects\UN_Buddy_First_Aid_App\src\pages\train\heat\heat.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HeatPage);
    return HeatPage;
}());

//# sourceMappingURL=heat.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MassivePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tourniquet_tourniquet__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__woundpacking_woundpacking__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MassivePage = /** @class */ (function () {
    function MassivePage(storage, navCtrl) {
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.ENG = false;
        this.FR = false;
        this.ES = false;
    }
    MassivePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('Language').then(function (data) {
            if (data === 'ENG') {
                _this.ENG = true;
                _this.FR = false;
                _this.ES = false;
            }
            if (data === 'FR') {
                _this.ENG = false;
                _this.FR = true;
                _this.ES = false;
            }
            if (data === 'ES') {
                _this.ENG = false;
                _this.FR = false;
                _this.ES = true;
            }
        });
    };
    MassivePage.prototype.GotoTourniquet = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tourniquet_tourniquet__["a" /* TourniquetPage */]);
    };
    MassivePage.prototype.GotoWoundpacking = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__woundpacking_woundpacking__["a" /* WoundpackingPage */]);
    };
    MassivePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-massive',template:/*ion-inline-start:"D:\Projects\UN_Buddy_First_Aid_App\src\pages\train\massive\massive.html"*/'<ion-header no-border>\n        <ion-navbar color="transparent">\n        </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n        <ion-buttons *ngIf="ENG === true">\n                <button outline class="buttons" clear full ion-button color="light" icon-only\n                        (click)="GotoTourniquet()">\n                        Tourniquet\n                </button>\n        </ion-buttons>\n        <ion-buttons *ngIf="FR === true">\n                <button outline class="buttons" clear full ion-button color="light" icon-only\n                        (click)="GotoTourniquet()">\n                        Tourniquet\n                </button>\n        </ion-buttons>\n        <ion-buttons *ngIf="ES === true">\n                <button outline class="buttons" clear full ion-button color="light" icon-only\n                        (click)="GotoTourniquet()">\n                        TORNIQUETE\n                </button>\n        </ion-buttons>\n\n\n        <ion-buttons *ngIf="ENG === true">\n                <button outline class="buttons" clear full ion-button color="light" icon-only\n                        (click)="GotoWoundpacking()">\n                        Woundpacking\n                </button>\n        </ion-buttons>\n        <ion-buttons *ngIf="FR === true">\n                <button outline class="buttons" clear full ion-button color="light" icon-only\n                        (click)="GotoWoundpacking()">\n                        Emballage de la plaie\n                </button>\n        </ion-buttons>\n        <ion-buttons *ngIf="ES === true">\n                <button outline class="buttons" clear full ion-button color="light" icon-only\n                        (click)="GotoWoundpacking()">\n                        VENDAJE DE HERIDAS\n                </button>\n        </ion-buttons>\n\n</ion-content>'/*ion-inline-end:"D:\Projects\UN_Buddy_First_Aid_App\src\pages\train\massive\massive.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], MassivePage);
    return MassivePage;
}());

//# sourceMappingURL=massive.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovementPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MovementPage = /** @class */ (function () {
    function MovementPage(storage, navCtrl) {
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.ENG = false;
        this.FR = false;
        this.ES = false;
    }
    MovementPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('Language').then(function (data) {
            if (data === 'ENG') {
                _this.ENG = true;
                _this.FR = false;
                _this.ES = false;
            }
            if (data === 'FR') {
                _this.ENG = false;
                _this.FR = true;
                _this.ES = false;
            }
            if (data === 'ES') {
                _this.ENG = false;
                _this.FR = false;
                _this.ES = true;
            }
        });
    };
    MovementPage.prototype.GoBack = function () {
        this.navCtrl.pop();
    };
    MovementPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-movement',template:/*ion-inline-start:"D:\Projects\UN_Buddy_First_Aid_App\src\pages\train\movement\movement.html"*/'<ion-header no-border>\n    <ion-navbar hideBackButton color="transparent">\n        <ion-buttons left>\n            <button ion-button class="ion-icon" color="light" icon-only (click)="GoBack()">\n                <ion-icon id="closeicon" name="arrow-back"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-content>\n        <ion-card *ngIf="ENG === true">\n            <h2 id="Title">Emergency movement</h2>\n            <p id="Text">Under ordinary circumstances, moving a casualty is dangerous and should only be attempted by\n                trained medical professionals. However, in some circumstances, movement of the casualty is necessary to\n                prevent further critical injury to the casualty or to gain access to other critically injured\n                casualties.</p>\n        </ion-card>\n        <ion-card *ngIf="FR === true">\n            <h2 id="Title">Déplacement d’urgence</h2>\n            <p id="Text">Dans des circonstances ordinaires, le déplacement d’une victime est dangereux et ne devrait\n                être tenté que par des professionnels de la santé qualifiés. Toutefois, dans certaines circonstances, le\n                déplacement de la victime est nécessaire pour prévenir d’autres blessures graves ou pour avoir accès à\n                d’autres victimes gravement blessées.</p>\n        </ion-card>\n        <ion-card *ngIf="ES === true">\n            <h2 id="Title">MOVIMIENTOS DE EMERGENCIA</h2>\n            <p id="Text">\n                En circunstancias normales, mover una víctima es peligroso y sólo debe ser intentado por profesionales\n                médicos capacitados. Sin embargo, en algunas circunstancias, el movimiento de la víctima es necesario\n                para evitar más lesiones críticas a la víctima o para tener acceso a otras víctimas graves.\n            </p>\n        </ion-card>\n\n        <ion-card *ngIf="ENG === true">\n            <h2 id="Title">Safe-lifting technique</h2>\n            <p id="Text">When attempting to lift or drag a casualty, the First-Aider must ensure that they keep their\n                own spine straight and lift using the large muscle groups of upper legs.</p>\n            <img id="Image" src="./assets/imgs/movement/SafeLifting.gif">\n        </ion-card>\n        <ion-card *ngIf="FR === true">\n            <h2 id="Title">Technique de levage de sécurité</h2>\n            <p id="Text">Lorsqu’il tente de soulever ou de traîner une victime, le secouriste doit s’assurer de garder\n                sa colonne vertébrale droite et de soulever en utilisant les grands groupes musculaires des membres\n                supérieurs.</p>\n            <img id="Image" src="./assets/imgs/movement/SafeLifting.gif">\n        </ion-card>\n        <ion-card *ngIf="ES === true">\n            <h2 id="Title">TÉCNICAS DE LEVANTAMIENTO DE AUTO</h2>\n            <p id="Text">\n                Al intentar levantar o arrastrar a una víctima, el socorrista debe asegurarse de mantener su columna\n                recta y levantarse usando los grupos de músculos grandes de las piernas.\n            </p>\n            <img id="Image" src="./assets/imgs/movement/SafeLifting.gif">\n        </ion-card>\n\n        <ion-card *ngIf="ENG === true">\n            <h2 id="Title">Drag technique</h2>\n            <p id="Text">The drag technique is an emergency movement used by one or two first-aiders to move a victim a\n                short distance to safety. It provides minimal protection to the spine but allows for casualty movement\n                with no equipment and limited rescuers.</p>\n            <img id="Image" src="./assets/imgs/movement/Drag.gif">\n        </ion-card>\n        <ion-card *ngIf="FR === true">\n            <h2 id="Title">Technique de traînée</h2>\n            <p id="Text">La technique de la traînée est un mouvement d’urgence utilisé par un ou deux secouristes pour\n                déplacer une victime sur une courte distance vers la sécurité. Il offre une protection minimale à la\n                colonne vertébrale, mais permet de déplacer le blessé sans équipement et avec un nombre limité de\n                sauveteurs.</p>\n            <img id="Image" src="./assets/imgs/movement/Drag.gif">\n        </ion-card>\n        <ion-card *ngIf="ES === true">\n            <h2 id="Title">TÉCNICA DE ARRASTRE</h2>\n            <p id="Text">\n                La técnica de arrastre es un movimiento de emergencia utilizado por uno o dos socorristas, para mover a\n                una víctima de una corta distancia a una zona segura. Esto proporciona una mínima protección a la\n                columna vertebral, pero permite un movimiento sin equipo y con rescatistas limitados.\n            </p>\n            <img id="Image" src="./assets/imgs/movement/Drag.gif">\n        </ion-card>\n\n        <ion-card *ngIf="ENG === true">\n            <h2 id="Title">King\'s Throne Technique</h2>\n            <p id="Text">The king\'s throne technique requires two first-aiders to carry a conscious or semi-conscious\n                casualty. It is achieved by linking wrists together to form a chair or ‘throne’ for the casualty to sit\n                on.</p>\n            <img id="Image" src="./assets/imgs/movement/KingsThrone.gif">\n        </ion-card>\n        <ion-card *ngIf="FR === true">\n            <h2 id="Title">Technique du trône du roi</h2>\n            <p id="Text">La technique du trône du roi nécessite deux secouristes pour porter une victime consciente ou\n                semi-consciente. Elle est obtenue en reliant les poignets pour former une chaise ou un « trône » sur\n                lequel la victime peut s’asseoir.</p>\n            <img id="Image" src="./assets/imgs/movement/KingsThrone.gif">\n        </ion-card>\n        <ion-card *ngIf="ES === true">\n            <h2 id="Title">TÉCNICA DEL TRONO DEL REY</h2>\n            <p id="Text">\n                La técnica del trono del rey requiere que dos socorristas para cargar una víctima consciente o\n                semiconsciente. Lo que se logra uniendo las muñecas para formar una silla o “trono” para que la víctima\n                pueda sentarse.\n            </p>\n            <img id="Image" src="./assets/imgs/movement/KingsThrone.gif">\n        </ion-card>\n\n        <ion-card *ngIf="ENG === true">\n            <h2 id="Title">Fireman’s Carry Technique</h2>\n            <p id="Text">The fireman’s carry enables a single rescuer to carry a casualty over a longer period than many\n                of the dragging techniques. The fireman’s carry takes practice to achieve safety.</p>\n            <img id="Image" src="./assets/imgs/movement/FiremansCarry.gif">\n        </ion-card>\n        <ion-card *ngIf="FR === true">\n            <h2 id="Title">Technique de portage du pompier</h2>\n            <p id="Text">Le portage du pompier permet à un seul sauveteur de transporter une victime sur une période\n                plus longue que la plupart des techniques de traction. Cette technique de portage nécessite de la\n                pratique pour être faite en toute sécurité.</p>\n            <img id="Image" src="./assets/imgs/movement/FiremansCarry.gif">\n        </ion-card>\n        <ion-card *ngIf="ES === true">\n            <h2 id="Title"> TÉCNICA DE LEVANTAMIENTO DEL BOMBERO</h2>\n            <p id="Text">\n                La técnica de levantamiento del bombero permite a un solo rescatista llevar una víctima durante un\n                período más largo que muchas de las técnicas de arrastre. Esta técnica necesita práctica para realizarla\n                con seguridad.\n            </p>\n            <img id="Image" src="./assets/imgs/movement/FiremansCarry.gif">\n        </ion-card>\n\n        <ion-card *ngIf="ENG === true">\n            <h2 id="Title">Hasty Harness</h2>\n            <p id="Text">The Hasty Harness is an emergency technique that uses a 6.5m (22ft) loop of 1-inch tubular\n                nylon webbing to form a rapid harness carry system for an unconscious casualty. It is achieved by\n                placing the loop around the casualty’s body and then looping up inside the legs and through the chest\n                pieces as shown in the picture. The Hasty Harness can be used by one or two rescuers’ and can be used to\n                support winching or extrication by aircraft.</p>\n            <img id="Image" src="./assets/imgs/movement/HastyHarness.gif">\n        </ion-card>\n        <ion-card *ngIf="FR === true">\n            <h2 id="Title">Harnais de secours</h2>\n            <p id="Text">Le harnais de secours est une technique d’urgence qui utilise une boucle de 6,5 m (22 pi) de\n                sangle tubulaire en nylon de 1 pouce pour former un système de harnais de transport rapide pour une\n                victime inconsciente. On y parvient en plaçant la boucle autour du corps de la victime, en la passant\n                ensuite entre les jambes, puis en remontant par la poitrine et en y passant la boucle comme le montre\n                l\'image. Le harnais de secours peut être utilisé par un ou deux sauveteurs et en appui du treuillage ou\n                du dégagement par avion.</p>\n            <img id="Image" src="./assets/imgs/movement/HastyHarness.gif">\n        </ion-card>\n        <ion-card *ngIf="ES === true">\n            <h2 id="Title">TÉCNICA DE ARNÉS RÁPIDO</h2>\n            <p id="Text">\n                El arnés rápido es una técnica de emergencia que utiliza una cuerda de 6,5 m (22 pies) de correas\n                tubulares de Nylon de 1 pulgada para formar un rápido sistema de acarreo por arnés para una víctima\n                inconsciente. Se logra mediante la colocación de la cuerda alrededor del cuerpo de la víctima, luego\n                pasándola por las piernas a través de las piezas en el pecho como se muestra en la imagen.\n                El arnés rápido puede ser utilizado por uno o dos rescatistas y puede ser usado para enroscar o para\n                extracción con aeronaves.\n            </p>\n            <img id="Image" src="./assets/imgs/movement/HastyHarness.gif">\n        </ion-card>\n    </ion-content>'/*ion-inline-end:"D:\Projects\UN_Buddy_First_Aid_App\src\pages\train\movement\movement.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], MovementPage);
    return MovementPage;
}());

//# sourceMappingURL=movement.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BasicsPage = /** @class */ (function () {
    function BasicsPage(storage, navCtrl) {
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.ENG = false;
        this.FR = false;
        this.ES = false;
    }
    BasicsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('Language').then(function (data) {
            console.log(data, 'Language BasicsPage');
            if (data === 'ENG') {
                _this.ENG = true;
                _this.FR = false;
                _this.ES = false;
            }
            if (data === 'FR') {
                _this.ENG = false;
                _this.ES = false;
                _this.FR = true;
            }
            if (data === 'ES') {
                _this.ES = true;
                _this.FR = false;
                _this.ENG = false;
            }
        });
    };
    BasicsPage.prototype.GoBack = function () {
        this.navCtrl.pop();
    };
    BasicsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-basics',template:/*ion-inline-start:"D:\Projects\UN_Buddy_First_Aid_App\src\pages\train\basics\basics.html"*/'<ion-header no-border>\n    <ion-navbar hideBackButton color="transparent">\n        <ion-buttons left>\n            <button ion-button class="ion-icon" color="light" icon-only (click)="GoBack()">\n                <ion-icon id="closeicon" name="arrow-back"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content no-padding>\n\n    <ion-card *ngIf="ENG === true">\n        <h2 id="Title">Basics</h2>\n        <p id="Text">First Aid is defined as ‘the initial care or treatment to the sick or wounded’.\n\n            First aid is often provided by non-medical personnel who are first present at the Point of injury (POI).\n            This could include fellow peacekeepers or other civilians.\n\n            The role of the First-Aider includes:\n            • Sending an effective alert message\n            • Provide initial care and\n            • Provide continued care until the casualty is delivered to the next appropriate ‘level of care’.\n        </p>\n    </ion-card>\n    <ion-card *ngIf="FR === true">\n        <h2 id="Title">Notions élémentaires</h2>\n        <p id="Text">Les premiers secours sont définis comme « les premiers soins ou traitements prodigués aux malades\n            ou aux blessés ».\n\n            Les premiers soins sont souvent prodigués par du personnel non médical qui est le premier présent sur le\n            lieu de l’accident (point of injury ou POI). Il peut s’agir d’autres soldats de la paix ou d’autres civils.\n\n            Le rôle des personnes prodiguant les premiers secours est le suivant :\n            • Envoyer un message d’alerte efficace\n            • Prodiguer les premiers soins\n            • Fournir des soins continus jusqu’à ce que la victime soit conduite au prochain « niveau de soins »\n            approprié.\n        </p>\n    </ion-card>\n    <ion-card *ngIf="ES === true">\n        <h2 id="Title">Lo esencial</h2>\n        <p id="Text">\n            Los primeros auxilios se define como “el cuidado o tratamiento inicial a un enfermo o herido”.\n            Los primeros auxilios son aplicados a menudo por personal no médico, quienes son las primeras personas en\n            estar presentes en el lugar del incidente. Esto puede incluir colegas en operaciones para el mantenimiento\n            de la paz u otros civiles.\n            El rol de los socorristas incluye:\n            .Enviar un mensaje de alerta efectivo.\n            .Aplicar cuidados iniciales y\n            .Suministrar cuidados continuos hasta que la víctima sea llevada al siguiente “nivel de cuidado” apropiado.\n        </p>\n    </ion-card>\n\n    <ion-card *ngIf="ENG === true">\n        <h2 id="Title">“10-1-2 Doctrine”</h2>\n        <p id="Text">\n            It is evidence-based medicine that the risk of death or permanent disability is significantly\n            reduced if people are treated as soon as possible after the onset of a life-threatening injury or illness.\n            Based on this evidence, it is of utmost importance that appropriate life, limb and eyesight saving\n            procedures are provided within specific timelines along with the survival chain appropriate for the event.\n            This has become known as the 10-1-2 timeline. The Survival chain in line with this timeline is described as\n            follows.\n        </p>\n        <p id="SubTitle">10 minutes</p>\n        <p id="Text">\n            10 - Represents the recommended maximum time, in minutes, to provide the necessary immediate\n            lifesaving measures at POI after the onset of injury/illness. This is often referred to as the ‘Platinum 10\n            Minutes’.\n        </p>\n        <p id="SubTitle">1 hour</p>\n        <p id="Text">\n            1 - Represents the recommended maximum time that necessary damage control resuscitation procedures\n            are provided by emergency medical personnel. This should be completed within 1 hour of the onset of\n            injury/illness and is often referred to as the ‘Golden Hour’.\n        </p>\n        <p id="SubTitle">2 hours</p>\n        <p id="Text">\n            2 - Represents the recommended maximum time that necessary Damage Control Surgery (DCS) is\n            provided. This should start within 2 hours of the onset of injury/illness.\n        </p>\n    </ion-card>\n    <ion-card *ngIf="FR === true">\n        <h2 id="Title">La « Doctrine 10-1-2 » pour les soins de traumatologie</h2>\n        <p id="Text">Il est médicalement prouvé que le risque de décès ou d’invalidité permanente se voit\n            considérablement réduit si les gens sont traités le plus tôt possible après l’apparition d’une blessure ou\n            d’une maladie mettant leur vie en danger. Sur la base de ces preuves, il est de la plus haute importance que\n            des procédures appropriées de protection de la vie, des membres et de la vue soient fournies dans des délais\n            spécifiques et tout en respectant la chaîne de survie appropriée pour l’événement. C’est ce que l’on appelle\n            la chronologie 10-1-2. La chaîne de survie conforme à cette chronologie est décrite comme suit :</p>\n        <p id="SubTitle">10 minutes</p>\n        <p id="Text">10 - Représente le temps maximum recommandé, en minutes, pour fournir les mesures de sauvetage\n            immédiates nécessaires sur le POI après l\'apparition d\'une blessure ou d\'une maladie. C’est ce que l’on\n            appelle souvent les « 10 minutes de platine ». </p>\n        <p id="SubTitle">1 heure</p>\n        <p id="Text">1 - Représente la durée maximale recommandée pour que le personnel médical d’urgence fournisse les\n            procédures de réanimation nécessaires pour contrôler les dommages. Ceci doit être fait dans l’heure qui suit\n            l’apparition de la blessure ou de la maladie et est souvent appelé « l’heure d’or ».</p>\n        <p id="SubTitle">2 heures</p>\n        <p id="Text">2 - Représente la durée maximale recommandée pendant laquelle la chirurgie de contrôle des dommages\n            (damage control surgery ou DCS) nécessaire est fournie. Celle-ci doit commencer dans les 2 heures suivant\n            l\'apparition de la blessure ou de la maladie.</p>\n    </ion-card>\n    <ion-card *ngIf="ES === true">\n        <h2 id="Title">“PRINCIPIO DEL 10-1-2”</h2>\n        <p id="Text">\n            Hay evidencia médica de que el riesgo de muerte o invalidez permanente se puede reducir de manera\n            significativa si las personas son tratadas tan pronto como sea posible luego de la lesión o la enfermedad\n            potencialmente mortal. Basado en esta evidencia, es de máxima importancia que los procedimientos apropiados\n            para salvar la vida, extremidades o la vista sean aplicados dentro de líneas específicas de tiempo junto con\n            la cadena de supervivencia apropiada para el incidente. Esto se conoce como la línea de tiempo 10-1-2. A\n            continuación, se describe la aplicación de la cadena de supervivencia dentro de la línea de tiempo.\n        </p>\n        <p id="SubTitle">10 MINUTOS</p>\n        <p id="Text">\n            10: representa el tiempo máximo recomendado, en minutos, para aplicar las medidas inmediatas necesarias para salvar la vida en el lugar del incidente, luego del Comienzo de una enfermedad o herida o de la enfermedad. A menudo, se conoce como “los 10 minutos de platino”.\n        </p>\n        <p id="SubTitle">1 HORA</p>\n        <p id="Text">\n            1: representa el tiempo máximo recomendado para que el personal médico de emergencias pueda aplicar los procedimientos de reanimación necesarios para el control de daños. Esto se debe hacer dentro de la primera hora luego del Comienzo de una enfermedad o herida o de la enfermedad, usualmente se le conoce como “la hora dorada”.\n        </p>\n        <p id="SubTitle">2 HORAS</p>\n        <p id="Text">\n            2: representa el tiempo máximo recomendado para aplicar cirugía de control de daños (CCD) necesaria. Ésta debe empezar dentro de las 2 horas posteriores al inicio  de la herida o de la enfermedad.\n        </p>\n    </ion-card>\n\n    <ion-card *ngIf="ENG === true">\n        <h2 id="Title">Tactical medicine </h2>\n        <p id="Text">\n            First-aid and pre-hospital medical guidelines have long been developed by the civilian medical\n            systems of the country and rely on the assumption that the First Aider and responders are able to provide\n            care without putting their own lives at risk.\n\n            In recent years, the role of military medicine has been further defined to address circumstances where the\n            treatment of the casualty must be weighed against other considerations including Mission goals and ongoing\n            hostility\n\n            Additionally, the operational context of military medicine means that some treatments and interventions that\n            may be appropriate in the civilian setting could lead to additional loss of life and increased risk in a\n            military setting. With this in mind, the following three phases of care have been widely recognized to apply\n            in the tactical setting.</p>\n        <p id="SubTitle">Care Under Fire</p>\n        <p id="Text">\n            Care Under Fire relates to medical treatment provided while actively engaged in a hostile\n            environment. Treatments will often be limited to application of tourniquets, and self-aid at this point due\n            to the overwhelming priority of Engaging and Suppressing the Threat, which should include the casualty if\n            possible.\n        </p>\n        <p id="SubTitle">Tactical Field Care</p>\n        <p id="Text">Tactical Field Care is delivered when the casualty and responders are no longer under direct fire,\n            though the environment around them may still be hostile or their situation may become hostile again. It will\n            often be carried out by the First Aider or Medic, using equipment that was being carried at the time\n            including airway adjuncts, chest decompression and fluid resuscitation.</p>\n        <p id="SubTitle">Evacuation Care</p>\n        <p id="Text">Evacuation Care occurs when evacuation assets arrive with additional medical supplies and/or the\n            casualty is removed from the hostile environment. This may include access to more advanced emergency medical\n            professionals and equipment.</p>\n    </ion-card>\n    <ion-card *ngIf="FR === true">\n        <h2 id="Title">Médecine tactique</h2>\n        <p id="Text">Les directives médicales en matière de premiers soins et de soins pré-hospitaliers ont longtemps\n            été élaborées par les systèmes médicaux civils du pays et reposent sur l\'hypothèse que le secouriste et les\n            intervenants sont capables de fournir des soins sans mettre leur propre vie en danger.\n\n            Ces dernières années, le rôle de la médecine militaire a été mieux défini pour tenir compte des\n            circonstances dans lesquelles le traitement de la victime doit être mis en balance avec d\'autres\n            considérations, notamment les objectifs de la mission et l\'hostilité persistante.\n\n            De plus, le contexte opérationnel de la médecine militaire signifie que certains traitements et\n            interventions qui peuvent être appropriés dans le contexte civil pourraient entraîner des pertes de vie\n            additionnelles et des risques accrus dans un contexte militaire. Dans cette optique, les trois phases de\n            soins suivantes ont été largement reconnues comme s\'appliquant dans le contexte tactique :</p>\n        <p id="SubTitle">Soins sous le feu de l\'ennemi</p>\n        <p id="Text">Les soins sous le feu de l\'ennemi concernent les traitements médicaux dispensés dans un\n            environnement hostile. Les traitements se limiteront souvent à l’application de garrots et à\n            l’auto-assistance à ce stade, en raison de la priorité absolue de l’engagement et de la suppression de la\n            menace, qui devrait si possible inclure la victime.</p>\n        <p id="SubTitle">Soins tactiques sur le terrain</p>\n        <p id="Text">Les soins tactiques sur le terrain sont dispensés lorsque la victime et les intervenants ne sont\n            plus sous le feu direct, bien que l\'environnement qui les entoure puisse encore être hostile ou que leur\n            situation puisse redevenir hostile. Ils seront souvent effectués par la personne prodiguant les premiers\n            soins ou par le médecin, à l’aide de l’équipement disponible à ce moment-là, y compris accessoires pour les\n            voies respiratoires, décompression thoracique et réanimation liquidienne.</p>\n        <p id="SubTitle">Soins d’évacuation</p>\n        <p id="Text">On parle de soins d’évacuation lorsque les moyens d\'évacuation arrivent avec des fournitures\n            médicales supplémentaires et/ou lorsque la victime est retirée de l\'environnement hostile. Cela peut inclure\n            l\'accès à des professionnels et à de l\'équipement médicaux d\'urgence plus avancés.</p>\n    </ion-card>\n    <ion-card *ngIf="ES === true">\n        <h2 id="Title">MEDICINA TÁCTICA</h2>\n        <p id="Text">\n            Los primeros auxilios y las guías médics prehospitalarias han sido desarrollados durante mucho tiempo por los sistemas médicos civiles del país y asumen que los socorristas están en la capacidad de aplicar cuidados sin poner sus vidas en riesgo.\n\n            En años recientes, el rol de la medicina militar ha sido definido con más detalle para abordar circunstancias donde el tratamiento de la víctima debe evaluarse junto  con otras consideraciones, incluyendo los objetivos de la misión y el ambiente hostil.\n\n            Además, el contexto operacional de la medicina militar significa que algunos tratamientos e intervenciones que pueden ser apropiados en el entorno civil, podrían conducir a una mayor pérdida de vidas e incrementar el riesgo en un entorno militar. Con esto en mente, las tres fases de cuidados que se presentan a continuación han sido ampliamente reconocidas para ser aplicadas en un ambiente táctico.\n        </p>\n        <p id="SubTitle">Cuidado bajo fuego</p>\n        <p id="Text">\n            La atención bajo fuego se relaciona con el tratamiento médico aplicado mientras se está en un ambiente hostil. La atención a menudo se limitará a la aplicación de torniquetes y autotratamientos, en este punto, debido a la prioridad de combatir y suprimir la amenaza, la cual debe incluir a la víctima, si es posible.\n        </p>\n        <p id="SubTitle">Atención Táctica en el Terreno        </p>\n        <p id="Text">\n            La atención táctica en el terreno es aplicada cuando la víctima y el socorrista ya no se encuentran bajo fuego directo, aunque el ambiente a su alrededor sea hostil o su situación  vuelva a ser adversa. A menudo, es aplicado por socorristas o médicos, usando el equipo con el que se cuente en ese momento, incluyendo complementos para las vías respiratorias, descompresión del pecho y canalización.\n        </p>\n        <p id="SubTitle">Atención de evacuación</p>\n        <p id="Text">\n            Los Cuidados durante la evacuación ocurren cuando llega el personal de evacuación con implementos médicos adicionales o la víctima es retirada del área hostil. Esto puede incluir acceso a médicos profesionales y equipo médico de emergencia más avanzado.\n        </p>\n    </ion-card>\n</ion-content>'/*ion-inline-end:"D:\Projects\UN_Buddy_First_Aid_App\src\pages\train\basics\basics.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], BasicsPage);
    return BasicsPage;
}());

//# sourceMappingURL=basics.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_location_service__ = __webpack_require__(224);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { Geolocation } from '@ionic-native/geolocation';  // Import Geolocation plugin


var SettingsPage = /** @class */ (function () {
    function SettingsPage(navParams, modalCtrl, navCtrl, storage, geolocation, locationService) {
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.geolocation = geolocation;
        this.locationService = locationService;
        this.ENG = false;
        this.FR = false;
        this.ES = false;
        this.geolocationEnabled = false; // This will be bound to the toggle
    }
    SettingsPage.prototype.ionViewWillLoad = function () {
        var _this = this;
        this.storage.get("Language").then(function (data) {
            if (data) {
                if (data === "ENG") {
                    _this.ENG = true;
                    _this.FR = false;
                    _this.ES = false;
                }
                if (data === "ES") {
                    _this.ENG = false;
                    _this.ES = true;
                    _this.FR = false;
                }
                if (data === "FR") {
                    _this.ENG = false;
                    _this.FR = true;
                    _this.ES = false;
                }
            }
            else {
                _this.ENG = true;
                _this.ES = false;
                _this.FR = false;
                _this.storage.set("Language", "ENG");
            }
        });
        this.locationService.loadGeolocationStatus();
        this.geolocationEnabled = this.locationService.geolocationEnabled;
    };
    SettingsPage.prototype.sendLocationViaWhatsApp = function () {
        var message = "My location is: Latitude: " + this.locationService.latitude + ", Longitude: " + this.locationService.longitude;
        window.open("https://wa.me/?text=" + encodeURIComponent(message), "_blank");
    };
    SettingsPage.prototype.sendLocationViaSMS = function () {
        var message = "My location is: Latitude: " + this.locationService.latitude + ", Longitude: " + this.locationService.longitude;
        window.open("sms:?body=" + encodeURIComponent(message), "_blank");
    };
    SettingsPage.prototype.sendLocationViaMessenger = function () {
        var message = "My location is: Latitude: " + this.locationService.latitude + ", Longitude: " + this.locationService.longitude;
        window.open("https://www.facebook.com/messages/t/?text=" + encodeURIComponent(message), "_blank");
    };
    SettingsPage.prototype.onToggleGeolocation = function () {
        this.locationService.onToggleGeolocation();
    };
    SettingsPage.prototype.sendLocationViaEmail = function () {
        var subject = "My Current Location";
        var body = "My location is: Latitude: " + this.locationService.latitude + ", Longitude: " + this.locationService.longitude;
        window.open("mailto:?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body), "_blank");
    };
    SettingsPage.prototype.onCancel = function () {
        console.log("OnCancelFired");
    };
    SettingsPage.prototype.onChange = function () {
        if (this.LanguageSelect === "ENG") {
            this.ENG = true;
            this.FR = false;
            this.ES = false;
            this.storage.set("Language", "ENG");
        }
        if (this.LanguageSelect === "ES") {
            this.ENG = false;
            this.ES = true;
            this.FR = false;
            this.storage.set("Language", "ES");
        }
        if (this.LanguageSelect === "FR") {
            this.ENG = false;
            this.ES = false;
            this.FR = true;
            this.storage.set("Language", "FR");
        }
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-settings",template:/*ion-inline-start:"D:\Projects\UN_Buddy_First_Aid_App\src\pages\settings\settings.html"*/'<ion-header no-border>\n  <ion-navbar color="transparent"> </ion-navbar>\n</ion-header>\n\n<ion-content no-padding>\n  <ion-card class="card">\n    <ion-item *ngIf="ENG === true">\n      <ion-label id="LabelText">Language</ion-label>\n      <ion-select\n        id="Text"\n        (ionCancel)="onCancel()"\n        (ionChange)="onChange()"\n        [(ngModel)]="LanguageSelect"\n      >\n        <ion-option selected="true" value="ENG">English</ion-option>\n        <ion-option value="ES">Español</ion-option>\n        <ion-option value="FR">Français</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item *ngIf="ENG === true">\n      <ion-label id="LabelText">Geo-Location</ion-label>\n      <ion-toggle\n        [(ngModel)]="geolocationEnabled"\n        [color]="geolocationEnabled ? \'success\' : \'danger\'"\n        (ionChange)="onToggleGeolocation()"\n      ></ion-toggle>\n    </ion-item>\n\n    <div *ngIf="geolocationEnabled && ENG === true">\n      <ion-label style="text-align: center">Share Location Detail</ion-label>\n\n      <div class="share-buttons-container">\n        <button class="share-button" (click)="sendLocationViaWhatsApp()">\n          Share via WhatsApp\n        </button>\n        <button class="share-button" (click)="sendLocationViaMessenger()">\n          Share via Messenger\n        </button>\n        <button class="share-button" (click)="sendLocationViaSMS()">\n          Share via SMS\n        </button>\n        <button class="share-button" (click)="sendLocationViaEmail()">\n          Share via Email\n        </button>\n      </div>\n    </div>\n\n    <ion-item *ngIf="ES === true">\n      <ion-label id="LabelText">idioma</ion-label>\n      <ion-select\n        id="Text"\n        cancelText="Cancelar"\n        (ionCancel)="onCancel()"\n        (ionChange)="onChange()"\n        [(ngModel)]="LanguageSelect"\n      >\n        <ion-option value="ENG">English</ion-option>\n        <ion-option selected="true" value="ES">Español</ion-option>\n        <ion-option value="FR">Français</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item *ngIf="FR === true">\n      <ion-label id="LabelText">Langue</ion-label>\n      <ion-select\n        id="Text"\n        cancelText="Annuler"\n        (ionCancel)="onCancel()"\n        (ionChange)="onChange()"\n        [(ngModel)]="LanguageSelect"\n      >\n        <ion-option value="ENG">English</ion-option>\n        <ion-option value="ES">Español</ion-option>\n        <ion-option selected="true" value="FR">Français</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"D:\Projects\UN_Buddy_First_Aid_App\src\pages\settings\settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_4__app_services_location_service__["a" /* LocationService */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(114);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


// import { Geolocation } from '@ionic-native/geolocation';  // Import Geolocation plugin

var LocationService = /** @class */ (function () {
    function LocationService(storage, geolocation) {
        this.storage = storage;
        this.geolocation = geolocation;
        this.geolocationEnabled = false;
    }
    LocationService.prototype.setLocation = function (lat, long) {
        this.latitude = lat;
        this.longitude = long;
    };
    LocationService.prototype.getLocation = function () {
        return { latitude: this.latitude, longitude: this.longitude };
    };
    LocationService.prototype.onToggleGeolocation = function () {
        this.geolocationEnabled = !this.geolocationEnabled;
        console.log(this.geolocationEnabled);
        this.storage.set("geolocationEnabled", this.geolocationEnabled);
        if (this.geolocationEnabled) {
            this.enableGeolocation();
        }
        else {
            this.disableGeolocation();
        }
    };
    LocationService.prototype.enableGeolocation = function () {
        var _this = this;
        this.geolocation
            .getCurrentPosition()
            .then(function (resp) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("Latitude:", resp.coords.latitude);
                        console.log("Longitude:", resp.coords.longitude);
                        // Store the geolocation in the service
                        this.setLocation(resp.coords.latitude, resp.coords.longitude);
                        return [4 /*yield*/, this.storage.set("lat", resp.coords.latitude)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.storage.set("lon", resp.coords.longitude)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); })
            .catch(function (error) {
            console.error("Error getting location", error);
        });
    };
    LocationService.prototype.disableGeolocation = function () {
        console.log("Geolocation disabled");
        // Implement any additional logic if you need to stop geolocation tracking
    };
    LocationService.prototype.loadGeolocationStatus = function () {
        var _this = this;
        this.storage.get("geolocationEnabled").then(function (status) {
            if (status !== null) {
                _this.geolocationEnabled = status; // Load the saved state
            }
        });
    };
    LocationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]])
    ], LocationService);
    return LocationService;
}());

//# sourceMappingURL=location.service.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(248);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_protocol_protocol__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_train_train__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_ENGprotocoldata__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_FRprotocoldata__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_ESProtocolData__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_protocol_infomodal_infomodal__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_train_airway_airway__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_train_alert_alert__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_train_circulation_circulation__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_train_heat_heat__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_train_massive_massive__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_train_movement_movement__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_train_respiration_respiration__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_train_scene_scene__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_native_audio__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_train_massive_tourniquet_tourniquet__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_train_massive_woundpacking_woundpacking__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_train_airway_headtilt_headtilt__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_train_airway_recoveryposition_recoveryposition__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_train_airway_situp_situp__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_train_heat_hyperthermia_hyperthermia__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_train_heat_hypothermia_hypothermia__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_settings_settings__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_train_basics_basics__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__services_location_service__ = __webpack_require__(224);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_protocol_protocol__["a" /* ProtocolPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_train_train__["a" /* TrainPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_protocol_infomodal_infomodal__["a" /* InfoModalPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_train_airway_airway__["a" /* AirwayPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_train_alert_alert__["a" /* AlertPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_train_circulation_circulation__["a" /* CirculationPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_train_heat_heat__["a" /* HeatPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_train_massive_massive__["a" /* MassivePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_train_movement_movement__["a" /* MovementPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_train_respiration_respiration__["a" /* RespirationPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_train_scene_scene__["a" /* ScenePage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_train_basics_basics__["a" /* BasicsPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_train_massive_tourniquet_tourniquet__["a" /* TourniquetPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_train_massive_woundpacking_woundpacking__["a" /* WoundpackingPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_train_airway_headtilt_headtilt__["a" /* HeadtiltPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_train_airway_recoveryposition_recoveryposition__["a" /* RecoverypositionPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_train_airway_situp_situp__["a" /* SitupPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_train_heat_hyperthermia_hyperthermia__["a" /* HyperthermiaPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_train_heat_hypothermia_hypothermia__["a" /* HypothermiaPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_settings_settings__["a" /* SettingsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {
                    backButtonText: "     ",
                }, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_11__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_protocol_protocol__["a" /* ProtocolPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_train_train__["a" /* TrainPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_protocol_infomodal_infomodal__["a" /* InfoModalPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_train_airway_airway__["a" /* AirwayPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_train_alert_alert__["a" /* AlertPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_train_circulation_circulation__["a" /* CirculationPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_train_heat_heat__["a" /* HeatPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_train_massive_massive__["a" /* MassivePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_train_movement_movement__["a" /* MovementPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_train_respiration_respiration__["a" /* RespirationPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_train_scene_scene__["a" /* ScenePage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_train_basics_basics__["a" /* BasicsPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_train_massive_tourniquet_tourniquet__["a" /* TourniquetPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_train_massive_woundpacking_woundpacking__["a" /* WoundpackingPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_train_airway_headtilt_headtilt__["a" /* HeadtiltPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_train_airway_recoveryposition_recoveryposition__["a" /* RecoverypositionPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_train_airway_situp_situp__["a" /* SitupPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_train_heat_hyperthermia_hyperthermia__["a" /* HyperthermiaPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_train_heat_hypothermia_hypothermia__["a" /* HypothermiaPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_settings_settings__["a" /* SettingsPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_12__providers_ENGprotocoldata__["a" /* ENGProtocolData */],
                __WEBPACK_IMPORTED_MODULE_13__providers_FRprotocoldata__["a" /* FRProtocolData */],
                __WEBPACK_IMPORTED_MODULE_14__providers_ESProtocolData__["a" /* ESProtocolData */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_native_audio__["a" /* NativeAudio */],
                __WEBPACK_IMPORTED_MODULE_34__services_location_service__["a" /* LocationService */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            ],
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            if (platform.is('android')) {
                console.log('android');
                statusBar.backgroundColorByHexString('#96b3c4');
            }
            if (platform.is('ios')) {
                console.log('ios');
                statusBar.styleDefault();
            }
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Projects\UN_Buddy_First_Aid_App\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\Projects\UN_Buddy_First_Aid_App\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScenePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ScenePage = /** @class */ (function () {
    function ScenePage(storage, navCtrl) {
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.ENG = false;
        this.FR = false;
        this.ES = false;
    }
    ScenePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('Language').then(function (data) {
            console.log(data, 'Language ScenePage');
            if (data === 'ENG') {
                _this.ENG = true;
                _this.FR = false;
                _this.ES = false;
            }
            if (data === 'FR') {
                _this.ENG = false;
                _this.FR = true;
                _this.ES = false;
            }
            if (data === 'ES') {
                _this.ENG = false;
                _this.FR = false;
                _this.ES = true;
            }
        });
    };
    ScenePage.prototype.GoBack = function () {
        this.navCtrl.pop();
    };
    ScenePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-scene',template:/*ion-inline-start:"D:\Projects\UN_Buddy_First_Aid_App\src\pages\train\scene\scene.html"*/'<ion-header no-border>\n    <ion-navbar hideBackButton color="transparent">\n        <ion-buttons left>\n            <button ion-button class="ion-icon" color="light" icon-only (click)="GoBack()">\n                <ion-icon id="closeicon" name="arrow-back"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content no-padding>\n\n    <ion-card *ngIf="ENG === true">\n        <h2 id="Title">S.C.E.N.E</h2>\n        <p id="Text">The general S.C.E.N.E Assessment is the first evaluation you will make as a first-aider upon\n            arriving at or witnessing an injury.</p>\n    </ion-card>\n    <ion-card *ngIf="FR === true">\n        <h2 id="Title">S.C.E.N.E</h2>\n        <p id="Text">L\'évaluation générale S.C.E.N.E est la première évaluation que vous ferez à votre arrivée en tant\n            que secouriste ou en tant que témoin d\'une blessure.</p>\n    </ion-card>\n    <ion-card *ngIf="ES === true">\n        <h2 id="Title">S.C.A.N.R</h2>\n        <p id="Text">\n            La evaluación general S.C.A.N.R. es la evaluación primaria que realiza el socorrista al llegar al lugar de un accidente o presenciar una lesión.\n        </p>\n    </ion-card>\n\n    <ion-card *ngIf="ENG === true">\n        <h2 id="Title">Safe</h2>\n        <p id="Text">In your assessment of the scene you need to identify hazards and control them before turning your\n            attention to the treatment of the casualty.\n            <br>When potential threats are reduced, and it is safe to treat the casualty, take appropriate precautions\n            to treat the casualty by using the following personal protective equipment (PPE):\n            • Gloves\n            • Eye protection\n        </p>\n    </ion-card>\n    <ion-card *ngIf="FR === true">\n        <h2 id="Title">Sécurité</h2>\n        <p id="Text">Dans votre évaluation de la scène, vous devez identifier les dangers et les maîtriser avant de vous\n            concentrer sur le traitement de la victime.\n            <br>Lorsque les menaces potentielles sont réduites et que vous pouvez traiter la victime en sécurité, prenez\n            les précautions appropriées en utilisant l\'équipement de protection individuelle (EPI) suivant :\n            • Gants\n            • Protection des yeux\n        </p>\n    </ion-card>\n    <ion-card *ngIf="ES === true">\n        <h2 id="Title">SEGURIDAD</h2>\n        <p id="Text">\n            Al evaluar la escena, usted debe identificar los peligros y controlarlos antes de enfocar su atención en socorrer a la víctima.\n\n            <br>\n            Cuando sean reducidas las amenazas potenciales y sea seguro socorrer a la víctima, tome las precauciones apropiadas haciendo uso del siguiente equipo de protección personal (EPP):\n            .Guantes\n            .Protección ocular\n        </p>\n    </ion-card>\n    \n\n    <ion-card *ngIf="ENG === true">\n        <h2 id="Title">Cause</h2>\n        <p id="Text">Look at the scene around the casualty for clues to what happened and what caused the casualty’s\n            injuries. There are traumatic injuries (external) and medical injuries (internal):\n            <br>Examples of traumatic injury (external):\n            • Road traffic accidents\n            • Gunshots\n            • Explosions\n            • Drowning\n            • Snakebites\n            <br>Examples of medical injury (internal):\n            • Seizures\n            • Respiratory disorders\n            • Heart disorders\n            • Heat disorders\n        </p>\n    </ion-card>\n    <ion-card *ngIf="FR === true">\n        <h2 id="Title">Cause</h2>\n        <p id="Text">Examinez la scène autour de la victime pour trouver des indices sur ce qui s\'est passé et ce qui a\n            causé les blessures de la victime. Il y a des blessures traumatiques (externes) et des blessures médicales\n            (internes) :\n            <br>Exemples de blessures traumatiques (externes) :\n            • Accidents de la route\n            • Fusillade\n            • Explosions\n            • Noyade\n            • Morsures de serpent\n            <br>Exemples de blessures médicales (internes) :\n            • Convulsions\n            • Troubles respiratoires\n            • Troubles cardiaques\n            • Troubles de la chaleur\n        </p>\n    </ion-card>\n    <ion-card *ngIf="ES === true">\n        <h2 id="Title">CAUSA</h2>\n        <p id="Text">\n            Estudie la escena alrededor de la víctima para encontrar pistas sobre lo sucedido y lo que sea que haya podido causarle las lesiones. Existen lesiones traumáticas (externas) y lesiones médicas (internas):\n            <br>Ejemplos de lesiones traumáticas (externas):\n            .Accidentes de tránsito\n            .Disparos\n            .Explosiones\n            .Ahogamiento\n            .Mordeduras de serpiente\n            <br>Ejemplos de condiciones médicas (internas):\n            .Convulsiones\n            .Padecimientos respiratorias\n            .Padecimientos cardíacos\n            .Trastornos producidos  por el calor\n        </p>\n    </ion-card>\n\n    <ion-card *ngIf="ENG === true">\n        <h2 id="Title">Environment</h2>\n        <p id="Text">\n            Are there environmental factors impacting on the victim? Environmental factors may include:\n            • Standing water or wet casualties\n            • Extreme heat or cold or direct exposure\n            • Electrical cables or fallen power lines\n            • Oncoming traffic\n            • Fire or flammable liquid and vapors\n        </p>\n    </ion-card>\n    <ion-card *ngIf="FR === true">\n        <h2 id="Title">Environnement</h2>\n        <p id="Text">Y a-t-il des facteurs environnementaux qui ont un impact sur la victime ? Les facteurs\n            environnementaux peuvent inclure:\n            • Eau stagnante ou blessures mouillées\n            • Chaleur ou froid extrême ou exposition directe\n            • Câbles électriques ou lignes électriques tombées\n            • Trafic\n            • Liquides et vapeurs inflammables ou un feu\n        </p>\n    </ion-card>\n    <ion-card *ngIf="ES === true">\n        <h2 id="Title">AMBIENTE</h2>\n        <p id="Text">\n            ¿Hay algún factor ambiental que afecte a la víctima? Los factores medioambientales pueden incluir:\n            .Agua estancada o víctimas expuestas al agua\n            .Frío o calor extremos o bajo exposición directa\n            .Cables eléctricos o líneas eléctricas caídas\n            .vehículos que se aproximen a su posición. \n            .Fuego o líquidos y vapores inflamables.\n        </p>\n    </ion-card>\n\n    <ion-card *ngIf="ENG === true">\n        <h2 id="Title">Number of casualties</h2>\n        <p id="Text">In circumstances where the number of casualties outweighs the number of responders and resources,\n            decisions must be made to prioritize casualties to ensure the best is done for the most victims.</p>\n    </ion-card>\n    <ion-card *ngIf="FR === true">\n        <h2 id="Title">Nombre de victimes</h2>\n        <p id="Text">Dans les cas où le nombre de victimes l\'emporte sur le nombre d\'intervenants et de ressources, des\n            décisions doivent être prises pour établir l\'ordre de priorité des victimes afin de s\'assurer que la plupart\n            des victimes seront traitées au mieux.</p>\n    </ion-card>\n    <ion-card *ngIf="ES === true">\n        <h2 id="Title">NÚMERO DE VÍCTIMAS</h2>\n        <p id="Text">\n            En circunstancias donde al número de víctimas supera el número de socorristas y de recursos disponibles, se deben tomar decisiones para priorizar las víctimas y garantizar que se hace lo mejor para la mayoría de ellos.\n        </p>\n    </ion-card>\n\n    <ion-card *ngIf="ENG === true">\n        <h2 id="Title">Extra resources</h2>\n        <p id="Text">Incidents may require additional resources to be delivered to the scene to aid in the treatment and\n            evacuation of victims.As a first-aider, you are uniquely positioned to identify these needs early, having a\n            direct impact on the time taken to deliver these resources to the incident scene.Additional resources may\n            include:\n            • Medical personnel\n            • Specialist equipment\n            • Fire suppression assets\n            • Quick reaction force\n            • Fire support\n            • Electricity or utility stabilization services\n            • Helicopters or air evacuation assets\n        </p>\n    </ion-card>\n    <ion-card *ngIf="FR === true">\n        <h2 id="Title">Ressources supplémentaires</h2>\n        <p id="Text">Les incidents peuvent nécessiter l’apport de ressources supplémentaires sur les lieux pour aider au\n            traitement et à l\'évacuation des victimes. En tant que secouriste, vous êtes particulièrement bien placé\n            pour identifier rapidement ces besoins, ce qui a un impact direct sur le temps nécessaire pour livrer ces\n            ressources sur les lieux de l\'incident. Les ressources additionnelles peuvent comprendre:\n            • Personnel médical\n            • Matériel spécialisé\n            • Moyens d\'extinction d\'incendie\n            • Force de réaction rapide\n            • Pompiers\n            • Services de stabilisation de l\'électricité ou des services publics\n            • Hélicoptères ou moyens d\'évacuation aérienne\n        </p>\n    </ion-card>\n    <ion-card *ngIf="ES === true">\n        <h2 id="Title">RECURSOS ADICIONALES</h2>\n        <p id="Text">\n            En algunos incidentes, puede ser necesario enviar recursos adicionales al lugar del suceso para ayudar en el tratamiento y evacuación de las víctimas. Como socorrista, usted puede identificar rápidamente estas necesidades, lo que tendrá un impacto directo en el tiempo  que lleva proveer estos recursos en el lugar del incidente y en el tiempo que tome llevar estos recursos al área del incidente. Los recursos adicionales pueden incluir:\n            \n            .Personal médico\n            .Equipo especializado\n            .Materiales para sofocar incendios.\n            .Unidad de reacción inmediata.\n            .Apoyo contra incendios\n            .Medios para el restablecimiento de servicios básicos\n            .Helicópteros o medios de evacuación aérea.\n        </p>\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"D:\Projects\UN_Buddy_First_Aid_App\src\pages\train\scene\scene.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], ScenePage);
    return ScenePage;
}());

//# sourceMappingURL=scene.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertPage = /** @class */ (function () {
    function AlertPage(storage, navCtrl) {
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.ENG = false;
        this.FR = false;
        this.ES = false;
    }
    AlertPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('Language').then(function (data) {
            console.log(data, 'Language alert');
            if (data === 'ENG') {
                _this.ENG = true;
                _this.FR = false;
                _this.ES = false;
            }
            if (data === 'FR') {
                _this.ENG = false;
                _this.FR = true;
                _this.ES = false;
            }
            if (data === 'ES') {
                _this.ENG = false;
                _this.FR = false;
                _this.ES = true;
            }
        });
    };
    AlertPage.prototype.GoBack = function () {
        this.navCtrl.pop();
    };
    AlertPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-alert',template:/*ion-inline-start:"D:\Projects\UN_Buddy_First_Aid_App\src\pages\train\alert\alert.html"*/'<ion-header no-border>\n    <ion-navbar hideBackButton color="transparent">\n        <ion-buttons left>\n            <button ion-button class="ion-icon" color="light" icon-only (click)="GoBack()">\n                <ion-icon id="closeicon" name="arrow-back"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content no-padding>\n    <ion-card *ngIf="ENG === true">\n        <h2 id="Title">4-liner</h2>\n        <p id="Text">An alert message must be transmitted as soon as possible, and no later than 10 minutes after\n            casualties are sustained to ensure rapid access to evacuation assets. The United Nations has adopted a basic\n            4-line situation report.</p>\n    </ion-card>\n    <ion-card *ngIf="FR === true">\n        <h2 id="Title">4 lignes</h2>\n        <p id="Text">Un message d\'alerte doit être transmis dès que possible, et au plus tard 10 minutes après que les\n            victimes ont été blessées, pour assurer un accès rapide aux moyens d\'évacuation. L\'Organisation des Nations\n            Unies a adopté un rapport de situation standard de quatre lignes.</p>\n    </ion-card>\n    <ion-card *ngIf="ES === true">\n        <h2 id="Title">4-LÍNEAS</h2>\n        <p id="Text">\n            Un mensaje de alerta debe ser transmitido tan pronto como sea posible y no excediendo 10 minutos después de que se produzcan las víctimas, para garantizar una evacuación rápida. Las Naciones Unidas han adoptado un informe de situación básico que consta de cuatro líneas.\n        </p>\n    </ion-card>\n\n    <ion-card *ngIf="ENG === true">\n        <h2 id="Title">Location</h2>\n        <p id="Text">Where are you? Provide the exact location of desired pick-up (e.g. UTM, MGRS, Lat/Long).</p>\n    </ion-card>\n    <ion-card *ngIf="FR === true">\n        <h2 id="Title">Lieu</h2>\n        <p id="Text">Où êtes-vous ? Indiquez l\'emplacement exact de l\'enlèvement souhaité (p.ex., UTM, MGRS, Lat/Long).\n        </p>\n    </ion-card>\n    <ion-card *ngIf="ES === true">\n        <h2 id="Title">UBICACIÓN</h2>\n        <p id="Text">¿Dónde está? Proporcione la ubicación exacta de extracción deseada (por ejemplo, UTM, MGRS, LAT/LONG). </p>\n    </ion-card>\n\n    <ion-card *ngIf="ENG === true">\n        <h2 id="Title">Incident</h2>\n        <p id="Text">What has happened? Include information as to the radio frequency, phone or satellite phone\n            on-scene.</p>\n    </ion-card>\n    <ion-card *ngIf="FR === true">\n        <h2 id="Title">Incident</h2>\n        <p id="Text">Que s\'est-il passé ? Donnez les informations sur la fréquence radio, le téléphone – satellite sur\n            place.</p>\n    </ion-card>\n    <ion-card *ngIf="ES === true">\n        <h2 id="Title">INCIDENTE</h2>\n        <p id="Text">\n            ¿Qué ha ocurrido? Incluya información sobre la frecuencia de radio, teléfono o teléfono satelital en el lugar. \n        </p>\n    </ion-card>\n\n    <ion-card *ngIf="ENG === true">\n        <h2 id="Title">Actions taken</h2>\n        <p id="Text">What are you doing? For example “We are providing first aid on the side of the road”, or “We are\n            self-driving to nearest hospital”.</p>\n    </ion-card>\n    <ion-card *ngIf="FR === true">\n        <h2 id="Title">Mesures prises</h2>\n        <p id="Text">Qu\'est-ce que vous faites ? Par exemple, « Nous prodiguons les premiers soins sur le bord de la\n            route », ou « Nous nous rendons en voiture à l\'hôpital le plus proche ».</p>\n    </ion-card>\n    <ion-card *ngIf="ES === true">\n        <h2 id="Title">ACCIONES TOMADAS</h2>\n        <p id="Text">\n            ¿Qué han hecho? Por ejemplo “Estamos proporcionando primeros auxilios al costado de la carretera” o “Conducimos sin ayuda hasta el hospital más cercano”. \n        </p>\n    </ion-card>\n\n    <ion-card *ngIf="ENG === true">\n        <h2 id="Title">Resources required</h2>\n        <p id="Text">What do you want? Is there any special equipment needed at the site (e.g. Hoist, Extrication\n            Equipment, Ventilators)? </p>\n    </ion-card>\n    <ion-card *ngIf="FR === true">\n        <h2 id="Title">Ressources nécessaires</h2>\n        <p id="Text">Que voulez-vous ? A-t-on besoin d\'équipement spécial sur le site (p.ex. un treuil, un équipement de\n            dégagement, des ventilateurs)?</p>\n    </ion-card>\n    <ion-card *ngIf="ES === true">\n        <h2 id="Title">RECURSOS NECESARIOS</h2>\n        <p id="Text">\n            ¿Qué necesita? ¿Hay algún equipo especial en el sitio (por ejemplo, elevadores, equipos de extracción, ventiladores)?\n        </p>\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"D:\Projects\UN_Buddy_First_Aid_App\src\pages\train\alert\alert.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], AlertPage);
    return AlertPage;
}());

//# sourceMappingURL=alert.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TourniquetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TourniquetPage = /** @class */ (function () {
    function TourniquetPage(storage, navCtrl) {
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.ENG = false;
        this.FR = false;
        this.ES = false;
    }
    TourniquetPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('Language').then(function (data) {
            if (data === 'ENG') {
                _this.ENG = true;
                _this.FR = false;
                _this.ES = false;
            }
            if (data === 'FR') {
                _this.ENG = false;
                _this.FR = true;
                _this.ES = false;
            }
            if (data === 'ES') {
                _this.ENG = false;
                _this.FR = false;
                _this.ES = true;
            }
        });
    };
    TourniquetPage.prototype.GoBack = function () {
        this.navCtrl.pop();
    };
    TourniquetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tourniquet',template:/*ion-inline-start:"D:\Projects\UN_Buddy_First_Aid_App\src\pages\train\massive\tourniquet\tourniquet.html"*/'<ion-header no-border>\n    <ion-navbar hideBackButton color="transparent">\n        <ion-buttons left>\n            <button ion-button class="ion-icon" color="light" icon-only (click)="GoBack()">\n                <ion-icon id="closeicon" name="arrow-back"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content no-padding>\n    <ion-card *ngIf="ENG === true">\n        <h2 id="Title">Storage of the tourniquet</h2>\n        <p id="Text">The can be found in your Individual First Aid Kit (IFAK). The tourniquet should be carried on your\n            person in a location and manner that allows for rapid access and application by either the left or right\n            hand, ideally, in less than 30 seconds.</p>\n        <img id="Image" src="./assets/imgs/massive/TourniquetonChestRig.png">\n    </ion-card>\n    <ion-card *ngIf="FR === true">\n        <h2 id="Title">Rangement du garrot tourniquet</h2>\n        <p id="Text">Le Tourniquet "Combat Application Tourniquet (CAT)" se trouve dans votre Trousse de Premiers Soins\n            Individuelle (TPSI). Le garrot doit être porté sur votre personne à un endroit et d\'une manière qui permet\n            un accès et une application rapides de la main gauche ou droite, idéalement en moins de 30 secondes.</p>\n        <img id="Image" src="./assets/imgs/massive/TourniquetonChestRig.png">\n    </ion-card>\n    <ion-card *ngIf="ES === true">\n        <h2 id="Title">ALMACENAMIENTO DEL TORNIQUETE</h2>\n        <p id="Text">\n            Puede encontrarlo en su botiquín individual de primeros auxilios (IFAK, por sus siglas en inglés). El\n            torniquete debe llevarse cerca de la mano izquierda o derecha, de manera que permita un rápido acceso y\n            colocación, idealmente en menos de 30 segundos.\n        </p>\n        <img id="Image" src="./assets/imgs/massive/TourniquetonChestRig.png">\n    </ion-card>\n\n\n    <ion-card *ngIf="ENG === true">\n        <h2 id="Title">Applying the tourniquet</h2>\n        <p id="Text">The Tourniquet should be applied directly to the skin approximately 5cm (2-3inches) above the open\n            wound. In circumstances where the first-aider has no time to expose and search for wounds, the tourniquet\n            may be applied directly over clothing in the ‘high and tight’ position, as high on the limb and close to the\n            torso as possible, provided there are no solid objects inside the clothing.</p>\n    </ion-card>\n    <ion-card *ngIf="FR === true">\n        <h2 id="Title">Application du garrot tourniquet</h2>\n        <p id="Text">Le garrot tourniquet doit être appliqué directement sur la peau à environ 5 cm (2-3 pouces)\n            au-dessus de la plaie ouverte. Dans les cas où le secouriste n\'a pas le temps d\'exposer et de chercher des\n            plaies, le garrot peut être appliqué directement sur le vêtement en position « haute et serrée », aussi haut\n            que possible sur le membre et aussi près du torse que possible, à condition qu\'il n\'y ait aucun objet solide\n            dans les vêtements.</p>\n    </ion-card>\n    <ion-card *ngIf="ES === true">\n        <h2 id="Title">COLOCACIÓN DEL TORNIQUETE</h2>\n        <p id="Text">\n            El torniquete debe colocarse directamente sobre la piel aproximadamente a 5 cm (2 o 3 pulgadas) por encima\n            de la herida. En circunstancias en las que el socorrista no tenga tiempo para exponer y buscar heridas, el\n            torniquete puede colocarse directamente sobre la ropa en la posición más alta y ajustada, tan alto en la\n            extremidad y cerca del torso como sea posible, siempre que no haya objetos sólidos dentro de la ropa.\n        </p>\n    </ion-card>\n\n    <ion-slides pager=\'true\' *ngIf="ENG === true">\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">One-handed application</h2>\n                <h2 id="SubTitle">Step 1</h2>\n                <img id="Image" src="./assets/imgs/massive/TourniquetSingleStep1.gif">\n                <p id="Text">Insert the injured limb through the loop and position it 2-3 inch above the bleeding site\n                    to the skin or in ‘high and tight’ position over clothing</p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">One-handed application</h2>\n                <h2 id="SubTitle">Step 2</h2>\n                <img id="Image" src="./assets/imgs/massive/TourniquetSingleStep2.gif">\n                <p id="Text">Pull band tightly and fasten it back on itself all the way around the limb, but not over\n                    the rod clips.</p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">One-handed application</h2>\n                <h2 id="SubTitle">Step 3</h2>\n                <img id="Image" src="./assets/imgs/massive/TourniquetSingleStep3.gif">\n                <p id="Text">Twist the rod until bleeding has stopped</p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">One-handed application</h2>\n                <h2 id="SubTitle">Step 4</h2>\n                <img id="Image" src="./assets/imgs/massive/TourniquetSingleStep4.gif">\n                <p id="Text">Secure the rod inside the clip to lock it in place.</p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">One-handed application</h2>\n                <h2 id="SubTitle">Step 5</h2>\n                <img id="Image" src="./assets/imgs/massive/TourniquetSingleStep5.gif">\n                <p id="Text">Route the band between the clips and over the rod. Secure rod and band with TIME strap.\n                    Record time of application.</p>\n            </ion-card>\n        </ion-slide>\n    </ion-slides>\n    <ion-slides pager=\'true\' *ngIf="FR === true">\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">Application d’une seule main</h2>\n                <h2 id="SubTitle">Étape 1</h2>\n                <img id="Image" src="./assets/imgs/massive/TourniquetSingleStep1.gif">\n                <p id="Text">Insérez le membre blessé dans la boucle et placez-la à 2-3 pouces au-dessus du saignement\n                    ou en position « haute et serrée » sur les vêtements.</p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">Application d’une seule main</h2>\n                <h2 id="SubTitle">Étape 2</h2>\n                <img id="Image" src="./assets/imgs/massive/TourniquetSingleStep2.gif">\n                <p id="Text">Tirez fermement la bande et fixez-la sur elle-même tout autour du membre, mais pas sur les\n                    clips de la tige.</p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">Application d’une seule main</h2>\n                <h2 id="SubTitle">Étape 3</h2>\n                <img id="Image" src="./assets/imgs/massive/TourniquetSingleStep3.gif">\n                <p id="Text">Tournez la tige jusqu\'à ce que le saignement s\'arrête.</p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">Application d’une seule main</h2>\n                <h2 id="SubTitle">Étape 4</h2>\n                <img id="Image" src="./assets/imgs/massive/TourniquetSingleStep4.gif">\n                <p id="Text">Fixez la tige à l\'intérieur du clip pour la verrouiller en place.</p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">Application d’une seule main</h2>\n                <h2 id="SubTitle">Étape 5</h2>\n                <img id="Image" src="./assets/imgs/massive/TourniquetSingleStep5.gif">\n                <p id="Text">Placez la bande entre les clips et sur la tige. Fixez la tige et la bande avec la sangle\n                    TIME. Enregistrez l’heure de la pose.</p>\n            </ion-card>\n        </ion-slide>\n    </ion-slides>\n    <ion-slides pager=\'true\' *ngIf="ES === true">\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">COLOCACIÓN CON UNA MANO</h2>\n                <h2 id="SubTitle">PASO 1: </h2>\n                <img id="Image" src="./assets/imgs/massive/TourniquetSingleStep1.gif">\n                <p id="Text">\n                    Inserte la extremidad lesionada a través del lazo y colóquela de 2 a 3 pulgadas por encima del área\n                    de la hemorragia sobre la piel o en una posición “alta y apretada” sobre la ropa.\n                </p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">COLOCACIÓN CON UNA MANO</h2>\n                <h2 id="SubTitle">PASO 2: </h2>\n                <img id="Image" src="./assets/imgs/massive/TourniquetSingleStep2.gif">\n                <p id="Text">\n                    Tire de la banda con fuerza y ajústela sobre sí misma en todo el contorno de la extremidad, pero no sobre los clips de la barra.\n                </p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">COLOCACIÓN CON UNA MANO</h2>\n                <h2 id="SubTitle">PASO 3: </h2>\n                <img id="Image" src="./assets/imgs/massive/TourniquetSingleStep3.gif">\n                <p id="Text">Gire la barra hasta que deje de sangrar. </p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">COLOCACIÓN CON UNA MANO</h2>\n                <h2 id="SubTitle">PASO 4:</h2>\n                <img id="Image" src="./assets/imgs/massive/TourniquetSingleStep4.gif">\n                <p id="Text">Asegure la barra dentro del clip.</p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">COLOCACIÓN CON UNA MANO</h2>\n                <h2 id="SubTitle">PASO 5:</h2>\n                <img id="Image" src="./assets/imgs/massive/TourniquetSingleStep5.gif">\n                <p id="Text">\n                    Pase la banda entre los clips y sobre la barra. Asegure la barra y la banda con la correa para marcar el tiempo. Registre el tiempo de la colocación.\n                </p>\n            </ion-card>\n        </ion-slide>\n    </ion-slides>\n\n    <ion-slides pager=\'true\' *ngIf="ENG === true">\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">Two-handed application</h2>\n                <h2 id="SubTitle">Step 1</h2>\n                <img id="Image" src="./assets/imgs/massive/TourniquetBuddyStep1.gif">\n                <p id="Text">Route the band around the limb and position it above the bleeding site directly on the skin\n                    or in ‘high and tight’ position over clothing</p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">Two-handed application</h2>\n                <h2 id="SubTitle">Step 2</h2>\n                <img id="Image" src="./assets/imgs/massive/TourniquetBuddyStep2.gif">\n                <p id="Text">Pull band tightly and fasten it back on itself all the way around the limb, but not over\n                    the rod clips.</p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">Two-handed application</h2>\n                <h2 id="SubTitle">Step 3</h2>\n                <img id="Image" src="./assets/imgs/massive/TourniquetBuddyStep3.gif">\n                <p id="Text">Twist the rod until bleeding has stopped</p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">Two-handed application</h2>\n                <h2 id="SubTitle">Step 4</h2>\n                <img id="Image" src="./assets/imgs/massive/TourniquetBuddyStep4.gif">\n                <p id="Text">Secure the rod inside the clip to lock it in place.</p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">Two-handed application</h2>\n                <h2 id="SubTitle">Step 5</h2>\n                <img id="Image" src="./assets/imgs/massive/TourniquetBuddyStep5.gif">\n                <p id="Text">Route the band between the clips and over the rod. Secure rod and band with TIME strap.\n                    Record time of application.</p>\n            </ion-card>\n        </ion-slide>\n    </ion-slides>\n    <ion-slides pager=\'true\' *ngIf="FR === true">\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">Application à deux mains</h2>\n                <h2 id="SubTitle">Étape 1</h2>\n                <img id="Image" src="./assets/imgs/massive/TourniquetBuddyStep1.gif">\n                <p id="Text">Placez la bande autour du membre et placez-la au-dessus du saignement directement sur la\n                    peau ou en position « haute et serrée » par-dessus les vêtements.</p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">Application à deux mains</h2>\n                <h2 id="SubTitle">Étape 2</h2>\n                <img id="Image" src="./assets/imgs/massive/TourniquetBuddyStep2.gif">\n                <p id="Text">Tirez fermement la bande et fixez-la sur elle-même tout autour du membre, mais pas sur les\n                    clips de la tige.</p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">Application à deux mains</h2>\n                <h2 id="SubTitle">Étape 3</h2>\n                <img id="Image" src="./assets/imgs/massive/TourniquetBuddyStep3.gif">\n                <p id="Text">Tournez la tige jusqu\'à ce que l\'hémorragie s\'arrête.</p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">Application à deux mains</h2>\n                <h2 id="SubTitle">Étape 4</h2>\n                <img id="Image" src="./assets/imgs/massive/TourniquetBuddyStep4.gif">\n                <p id="Text">Fixez la tige à l\'intérieur du clip pour la verrouiller en place.</p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">Application à deux mains</h2>\n                <h2 id="SubTitle">Étape 5</h2>\n                <img id="Image" src="./assets/imgs/massive/TourniquetBuddyStep5.gif">\n                <p id="Text">Placez la bande entre les clips et sur la tige. Fixez la tige et la bande avec la sangle\n                    TIME. Enregistrez l’heure de la pose.</p>\n            </ion-card>\n        </ion-slide>\n    </ion-slides>\n    <ion-slides pager=\'true\' *ngIf="ES === true">\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">COLOCACIÓN CON DOS MANOS</h2>\n                <h2 id="SubTitle">PASO 1: </h2>\n                <img id="Image" src="./assets/imgs/massive/TourniquetBuddyStep1.gif">\n                <p id="Text">Pase la banda alrededor de la extremidad y colóquela sobre el sitio de sangrado directamente sobre la piel o en una posición “alta y ajustada” sobre la ropa. </p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">COLOCACIÓN CON DOS MANOS</h2>\n                <h2 id="SubTitle">PASO 2: </h2>\n                <img id="Image" src="./assets/imgs/massive/TourniquetBuddyStep2.gif">\n                <p id="Text">Tire de la banda con fuerza y ajustela sobre sí misma alrededor de la extremidad, pero no sobre los clips de la barra. </p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">COLOCACIÓN CON DOS MANOS</h2>\n                <h2 id="SubTitle">PASO 3: </h2>\n                <img id="Image" src="./assets/imgs/massive/TourniquetBuddyStep3.gif">\n                <p id="Text">Gire la barra hasta que deje de sangrar. </p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">COLOCACIÓN CON DOS MANOS</h2>\n                <h2 id="SubTitle">PASO 4: </h2>\n                <img id="Image" src="./assets/imgs/massive/TourniquetBuddyStep4.gif">\n                <p id="Text">Asegure la barra dentro del clip. </p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">COLOCACIÓN CON DOS MANOS</h2>\n                <h2 id="SubTitle">Step 5</h2>\n                <img id="Image" src="./assets/imgs/massive/TourniquetBuddyStep5.gif">\n                <p id="Text">Pase la banda entre los clips y sobre la barra. Asegure la barra y la banda con la correa para marcar la hora. Registre el tiempo de la colocación.</p>\n            </ion-card>\n        </ion-slide>\n    </ion-slides>\n\n    <ion-card *ngIf="ENG === true">\n        <h2 id="Title">Improvised windlass device</h2>\n        <p id="Text">If you do not have access to a tourniquet or your tourniquet is being used it is possible to create\n            an improvised tourniquet. To make an improvised tourniquet you will need:<br><br>A material/band of some\n            sort to wrap around the extremity such as a cravat/triangle bandage or piece of clothing/cloth;<br><br>A\n            windlass – a rigid object to twist the band such as a stick, jack handle, broom handle, pocket knife (closed\n            blade), or carabineer.</p>\n    </ion-card>\n    <ion-card *ngIf="FR === true">\n        <h2 id="Title">Dispositif de treuil improvisé</h2>\n        <p id="Text">Si vous n\'avez pas de garrot tourniquet ou si votre garrot est utilisé, il est possible de créer un\n            garrot improvisé. <br><br>Pour faire un garrot tourniquet improvisé vous aurez besoin d’un tissu ou d’une\n            bande à enrouler autour de l\'extrémité du membre, comme une cravate, un bandage triangulaire ou un morceau\n            de vêtement/textile;\n            <br>Un guindeau - un objet rigide pour tordre la bande comme un bâton, un manche de cric, un manche à balai,\n            un couteau de poche (lame fermée), un mousqueton.\n        </p>\n    </ion-card>\n    <ion-card *ngIf="ES === true">\n        <h2 id="Title">TORNIQUETE  IMPROVISADO</h2>\n        <p id="Text">Si no tiene acceso a un torniquete o si está siendo usado, se puede hacer uno improvisado. Para hacer un torniquete improvisado necesitará: \n            Material: banda de algún tipo para envolver la extremidad, como una corbata/vendaje triangular o una pieza de ropa/tela; \n            Un torniquete: un objeto rígido para torcer la banda, como un palo, mango de gato hidráulico, mango de escoba, navaja de bolsillo (hoja cerrada) o mosquetón.</p>\n    </ion-card>\n\n    <ion-slides pager=\'true\' *ngIf="ENG === true">\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">Improvised windlass device</h2>\n                <h2 id="SubTitle">Step 1</h2>\n                <img id="Image" src="./assets/imgs/massive/ImprovisedWindlassStep1.gif">\n                <p id="Text">Use your selected material/ band to wrap the extremity tightly then secure the material\n                    with a knot.</p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">Improvised windlass device</h2>\n                <h2 id="SubTitle">Step 2</h2>\n                <img id="Image" src="./assets/imgs/massive/ImprovisedWindlassStep2.gif">\n                <p id="Text">Place the chosen windlass object underneath the knot and twist the windlass object until\n                    the bleeding has stopped.</p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">Improvised windlass device</h2>\n                <h2 id="SubTitle">Step 3</h2>\n                <img id="Image" src="./assets/imgs/massive/ImprovisedWindlassStep3.gif">\n                <p id="Text">Use the material to tie a final knot on top on the twisted windlass in order to properly\n                    secure the tourniquet.</p>\n            </ion-card>\n        </ion-slide>\n    </ion-slides>\n    <ion-slides pager=\'true\' *ngIf="FR === true">\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">Utilisation d’un garrot improvisé</h2>\n                <h2 id="SubTitle">Étape 1</h2>\n                <img id="Image" src="./assets/imgs/massive/ImprovisedWindlassStep1.gif">\n                <p id="Text">Utilisez le matériel/la sangle que vous avez choisi pour envelopper étroitement\n                    l’extrémité, puis fixez-le à l\'aide d\'un nœud.</p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">FUtilisation d’un garrot improvisé</h2>\n                <h2 id="SubTitle">Étape 2</h2>\n                <img id="Image" src="./assets/imgs/massive/ImprovisedWindlassStep2.gif">\n                <p id="Text">Placez un bâtonnet improvisé sous le nœud et faites-le tourner jusqu’à ce que l’hémorragie\n                    s’arrête.</p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">Utilisation d’un garrot improvisé</h2>\n                <h2 id="SubTitle">Étape 3</h2>\n                <img id="Image" src="./assets/imgs/massive/ImprovisedWindlassStep3.gif">\n                <p id="Text">Utilisez le matériel pour faire un dernier nœud au-dessus du bâtonnet afin de bien le\n                    fixer.</p>\n            </ion-card>\n        </ion-slide>\n    </ion-slides>\n    <ion-slides pager=\'true\' *ngIf="ES === true">\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">TORNIQUETE IMPROVISADO</h2>\n                <h2 id="SubTitle">PASO 1: </h2>\n                <img id="Image" src="./assets/imgs/massive/ImprovisedWindlassStep1.gif">\n                <p id="Text">Use el material o banda seleccionado para envolver la extremidad firmemente y luego asegure el material con un nudo. </p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">TORNIQUETE IMPROVISADOe</h2>\n                <h2 id="SubTitle">PASO 2: </h2>\n                <img id="Image" src="./assets/imgs/massive/ImprovisedWindlassStep2.gif">\n                <p id="Text">Coloque el objeto seleccionado como torniquete debajo del nudo y gire el objeto hasta que pare el sangrado.</p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">TORNIQUETE IMPROVISADO</h2>\n                <h2 id="SubTitle">PASO 3: </h2>\n                <img id="Image" src="./assets/imgs/massive/ImprovisedWindlassStep3.gif">\n                <p id="Text">Utilice el material para hacer un nudo final en la parte superior del molinete retorcido para asegurar correctamente el torniquete.</p>\n            </ion-card>\n        </ion-slide>\n    </ion-slides>\n\n</ion-content>'/*ion-inline-end:"D:\Projects\UN_Buddy_First_Aid_App\src\pages\train\massive\tourniquet\tourniquet.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], TourniquetPage);
    return TourniquetPage;
}());

//# sourceMappingURL=tourniquet.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WoundpackingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WoundpackingPage = /** @class */ (function () {
    function WoundpackingPage(storage, navCtrl) {
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.ENG = false;
        this.FR = false;
        this.ES = false;
    }
    WoundpackingPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('Language').then(function (data) {
            if (data === 'ENG') {
                _this.ENG = true;
                _this.FR = false;
                _this.ES = false;
            }
            if (data === 'FR') {
                _this.ENG = false;
                _this.FR = true;
                _this.ES = false;
            }
            if (data === 'ES') {
                _this.ENG = false;
                _this.FR = false;
                _this.ES = true;
            }
        });
    };
    WoundpackingPage.prototype.GoBack = function () {
        this.navCtrl.pop();
    };
    WoundpackingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-woundpacking',template:/*ion-inline-start:"D:\Projects\UN_Buddy_First_Aid_App\src\pages\train\massive\woundpacking\woundpacking.html"*/'<ion-header no-border>\n    <ion-navbar hideBackButton color="transparent">\n        <ion-buttons left>\n            <button ion-button class="ion-icon" color="light" icon-only (click)="GoBack()">\n                <ion-icon id="closeicon" name="arrow-back"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content no-padding>\n    <ion-card *ngIf="ENG === true">\n        <h2 id="Title">Wound packing</h2>\n        <p id="Text">Not all wounds are amendable to tourniquet application, such as high limb. In these cases, severe\n            bleeding should be controlled by wound packing.</p>\n    </ion-card>\n    <ion-card *ngIf="FR === true">\n        <h2 id="Title">Emballage de la plaie</h2>\n        <p id="Text">Toutes les plaies ne sont pas amendables par l\'application d\'un garrot, p.ex. sur un membre\n            supérieur. Dans ces cas, les hémorragies graves doivent être contrôlées par l\'emballage de la plaie.</p>\n    </ion-card>\n    <ion-card *ngIf="ES === true">\n        <h2 id="Title">APÓSITO DE HERIDAS</h2>\n        <p id="Text">No todas las heridas se pueden contener con la colocación de un torniquete, como las de las\n            extremidades altas. En estos casos, la hemorragia intensa debe controlarse mediante la colocación de un\n            apósito en herida.</p>\n    </ion-card>\n\n    <ion-slides pager=\'true\' *ngIf="ENG === true">\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">Wound packing</h2>\n                <h2 id="SubTitle">Step 1</h2>\n                <img id="Image" src="./assets/imgs/massive/WoundpackingStep1.gif">\n                <p id="Text">Start by forming a small ball of dressing material to begin the packing process.</p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">Wound packing</h2>\n                <h2 id="SubTitle">Step 2</h2>\n                <img id="Image" src="./assets/imgs/massive/WoundpackingStep2.gif">\n                <p id="Text">This ball should be inserted directly into the wound as close as possible to the source of\n                    the bleeding. One finger should be kept on the gauze ball maintaining constant pressure, while the\n                    remainder of the gauze is fed into the wound.</p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">Wound packing</h2>\n                <h2 id="SubTitle">Step 3</h2>\n                <img id="Image" src="./assets/imgs/massive/WoundpackingStep3.gif">\n                <p id="Text">Once the wound cavity is packed, the remaining gauze should be placed on top of the wound\n                    and direct pressure applied for as long as possible, it may take up to 30-minutes for a clot to\n                    form.</p>\n            </ion-card>\n        </ion-slide>\n    </ion-slides>\n    <ion-slides pager=\'true\' *ngIf="FR === true">\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">Emballage de la plaie</h2>\n                <h2 id="SubTitle">Étape 1</h2>\n                <img id="Image" src="./assets/imgs/massive/WoundpackingStep1.gif">\n                <p id="Text">Commencez par former une petite boule de pansement pour commencer le processus d\'emballage.\n                </p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">Emballage de la plaie</h2>\n                <h2 id="SubTitle">Étape 2</h2>\n                <img id="Image" src="./assets/imgs/massive/WoundpackingStep2.gif">\n                <p id="Text">Cette boule doit être insérée directement dans la plaie le plus près possible de la source\n                    du saignement. Un doigt doit être maintenu sur la boule de gaze en maintenant une pression\n                    constante, tandis que le reste de la gaze est introduit dans la plaie.</p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">Emballage de la plaie</h2>\n                <h2 id="SubTitle">Étape 3</h2>\n                <img id="Image" src="./assets/imgs/massive/WoundpackingStep3.gif">\n                <p id="Text">Une fois que la cavité de la plaie est remplie, la gaze restante doit être placée sur la\n                    plaie et une pression directe doit être appliquée le plus longtemps possible, cela peut prendre\n                    jusqu\'à 30 minutes pour qu\'un caillot se forme.</p>\n            </ion-card>\n        </ion-slide>\n    </ion-slides>\n    <ion-slides pager=\'true\' *ngIf="ES === true">\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">APÓSITO DE HERIDAS</h2>\n                <h2 id="SubTitle">PASO 3: </h2>\n                <img id="Image" src="./assets/imgs/massive/WoundpackingStep1.gif">\n                <p id="Text">Comience formando una pequeña bola de material de vendaje para comenzar el cubrimiento. </p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">APÓSITO DE HERIDAS</h2>\n                <h2 id="SubTitle">PASO 2: </h2>\n                <img id="Image" src="./assets/imgs/massive/WoundpackingStep2.gif">\n                <p id="Text">Esta bola debe insertarse directamente en la herida lo más cerca posible de la fuente de sangrado. Se debe mantener un dedo sobre la bola de gasa manteniendo una presión constante, mientras que el resto de la gasa se introduce en la herida. </p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">APÓSITO DE HERIDAS</h2>\n                <h2 id="SubTitle">PASO 3: </h2>\n                <img id="Image" src="./assets/imgs/massive/WoundpackingStep3.gif">\n                <p id="Text">\n                    Cuando la cavidad de la herida está llena, se debe colocar la gasa restante sobre la herida y se debe aplicar presión directa durante el mayor tiempo posible, puede tomar hasta 30 minutos para que se forme un coágulo. \n                </p>\n            </ion-card>\n        </ion-slide>\n    </ion-slides>\n</ion-content>'/*ion-inline-end:"D:\Projects\UN_Buddy_First_Aid_App\src\pages\train\massive\woundpacking\woundpacking.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], WoundpackingPage);
    return WoundpackingPage;
}());

//# sourceMappingURL=woundpacking.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CirculationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CirculationPage = /** @class */ (function () {
    function CirculationPage(storage, navCtrl) {
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.ENG = false;
        this.FR = false;
        this.ES = false;
    }
    CirculationPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('Language').then(function (data) {
            if (data === 'ENG') {
                _this.ENG = true;
                _this.FR = false;
                _this.ES = false;
            }
            if (data === 'FR') {
                _this.ENG = false;
                _this.FR = true;
                _this.ES = false;
            }
            if (data === 'ES') {
                _this.ENG = false;
                _this.FR = false;
                _this.ES = true;
            }
        });
    };
    CirculationPage.prototype.GoBack = function () {
        this.navCtrl.pop();
    };
    CirculationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-circulation',template:/*ion-inline-start:"D:\Projects\UN_Buddy_First_Aid_App\src\pages\train\circulation\circulation.html"*/'<ion-header no-border>\n    <ion-navbar hideBackButton color="transparent">\n        <ion-buttons left>\n            <button ion-button class="ion-icon" color="light" icon-only (click)="GoBack()">\n                <ion-icon id="closeicon" name="arrow-back"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-card *ngIf="ENG === true">\n        <h2 id="Title">Emergency Pressure Dressing (EPD)</h2>\n        <p id="Text">The EPD was designed specifically with military application in mind and comes contained within\n            double vacuum sealed, water proof packaging. The bandage is available in various sizes (10cm, 15cm and 25cm)\n        </p>\n    </ion-card>\n    <ion-card *ngIf="FR === true">\n        <h2 id="Title">Pansement Compressif d’Urgence (PCU)</h2>\n        <p id="Text">Le PCU a été conçu spécifiquement pour les applications militaires et est contenu dans un emballage\n            doublement scellé sous vide et étanche à l’eau. Le bandage est disponible en différentes tailles (10 cm, 15\n            cm et 25 cm</p>\n    </ion-card>\n    <ion-card *ngIf="ES === true">\n        <h2 id="Title">APÓSITO COMPRESIVO DE EMERGENCIA (ACE)</h2>  \n        <p id="Text">\n            El ACE fue diseñado específicamente para uso militar, viene en un paquete doble sellado al vacío, que es a prueba de agua. La venda está disponible en varios tamaños (10, 15 y 25 cm.).\n        </p>  \n      </ion-card>\n\n    <ion-slides pager=\'true\' *ngIf="ENG === true">\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">One-handed EPD application</h2>\n                <h2 id="SubTitle">Step 1</h2>\n                <img id="Image" src="./assets/imgs/circulation/OneHandedEPDStep1.gif">\n                <p id="Text">Upon opening the packaging of the EPD, stow the plastic wrapper for later use.</p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">One-handed EPD application</h2>\n                <h2 id="SubTitle">Step 2</h2>\n                <img id="Image" src="./assets/imgs/circulation/OneHandedEPDStep2.gif">\n                <p id="Text">Unfold the EPD and insert injured arm through the loop. The plastic tension Bar should be\n                    placed directly over the center of the wound.</p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">One-handed EPD application</h2>\n                <h2 id="SubTitle">Step 3</h2>\n                <img id="Image" src="./assets/imgs/circulation/OneHandedEPDStep3.gif">\n                <p id="Text">Apply pressure with the EPD bandage and wrap the bandage around the limb maintaining\n                    constant pressure. Wrap the bandage around both edges of the dressing with the tension bar still\n                    visible.</p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">One-handed EPD application</h2>\n                <h2 id="SubTitle">Step 4</h2>\n                <img id="Image" src="./assets/imgs/circulation/OneHandedEPDStep4.gif">\n                <p id="Text">Place the bandage through the tension bar and reverse the direction of the bandage, folding\n                    down the tension bar to place additional pressure directly over the wound site.</p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">One-handed EPD application</h2>\n                <h2 id="SubTitle">Step 5</h2>\n                <img id="Image" src="./assets/imgs/circulation/OneHandedEPDStep5.gif">\n                <p id="Text">Continue wrapping the bandage and secure the running end by tucking the plastic clips into\n                    bandage wraps.</p>\n            </ion-card>\n        </ion-slide>\n    </ion-slides>\n    <ion-slides pager=\'true\' *ngIf="FR === true">\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">Application du PCU d’une seule main</h2>\n                <h2 id="SubTitle">Étape 1</h2>\n                <img id="Image" src="./assets/imgs/circulation/OneHandedEPDStep1.gif">\n                <p id="Text">Lors de l’ouverture de l’emballage du PCU, mettez de côté l’emballage en plastique pour une\n                    utilisation ultérieure.</p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">Application du PCU d’une seule main</h2>\n                <h2 id="SubTitle">Étape 2</h2>\n                <img id="Image" src="./assets/imgs/circulation/OneHandedEPDStep2.gif">\n                <p id="Text">Dépliez le PCU et insérez le bras blessé dans la boucle. La barre de tension en plastique\n                    doit être placée directement au-dessus du centre de la plaie.</p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">Application du PCU d’une seule main</h2>\n                <h2 id="SubTitle">Étape 3</h2>\n                <img id="Image" src="./assets/imgs/circulation/OneHandedEPDStep3.gif">\n                <p id="Text">Appliquez la pression avec le bandage PCU et enroulez le bandage autour du membre en\n                    maintenant une pression constante. Enroulez le bandage autour des deux bords du pansement avec la\n                    barre de tension encore visible.</p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">Application du PCU d’une seule main</h2>\n                <h2 id="SubTitle">Étape 4</h2>\n                <img id="Image" src="./assets/imgs/circulation/OneHandedEPDStep4.gif">\n                <p id="Text">Placez le bandage à travers la barre de tension et inversez la direction du bandage en\n                    rabattant la barre de tension vers le bas pour exercer une pression supplémentaire directement sur\n                    la plaie.</p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">Application du PCU d’une seule main</h2>\n                <h2 id="SubTitle">Étape 5</h2>\n                <img id="Image" src="./assets/imgs/circulation/OneHandedEPDStep5.gif">\n                <p id="Text">Continuez à envelopper le bandage et sécurisez l’extrémité de la bande en rentrant les\n                    clips en plastique dans les enveloppes de bandage.</p>\n            </ion-card>\n        </ion-slide>\n    </ion-slides>\n    <ion-slides pager=\'true\' *ngIf="ES === true">\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">APLICACIÓN DE UN ACE CON UNA SOLA MANO</h2>\n                <h2 id="SubTitle">PASO 1</h2>\n                <img id="Image" src="./assets/imgs/circulation/OneHandedEPDStep1.gif">\n                <p id="Text">Al abrir el paquetes  del ACE, guarde el envoltorio de plástico para uso posterior.</p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">APLICACIÓN DE UN ACE CON UNA SOLA MANO</h2>\n                <h2 id="SubTitle">PASO 2</h2>\n                <img id="Image" src="./assets/imgs/circulation/OneHandedEPDStep2.gif">\n                <p id="Text">\n                    Desdoble el ACE y pase el brazo lesionado a través del mismo. La barra plástica de tensión debe ser colocada directamente sobre el centro de la herida.Desdoblar el ACE y pase el brazo lesionado a través del mismo. La barra plástica de tensión debe ser colocada directamente sobre el centro de la herida\n                </p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">APLICACIÓN DE UN ACE CON UNA SOLA MANO</h2>\n                <h2 id="SubTitle">PASO 3</h2>\n                <img id="Image" src="./assets/imgs/circulation/OneHandedEPDStep3.gif">\n                <p id="Text">\n                    Aplicar presión con la venda y envolverla alrededor de la extremidad, manteniendo una presión constante. Envuelva la venda alrededor de ambos bordes del apósito, con la barra de tensión aún visible\n                </p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">APLICACIÓN DE UN ACE CON UNA SOLA MANO</h2>\n                <h2 id="SubTitle">PASO 4</h2>\n                <img id="Image" src="./assets/imgs/circulation/OneHandedEPDStep4.gif">\n                <p id="Text">\n                    Coloque la venda a través de la barra de tensión y cambie la dirección de la venda, doblando la barra de tensión hacia abajo para aplicar presión adicional directamente sobre la herida.\n                </p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">APLICACIÓN DE UN ACE CON UNA SOLA MANO</h2>\n                <h2 id="SubTitle">PASO 5</h2>\n                <img id="Image" src="./assets/imgs/circulation/OneHandedEPDStep5.gif">\n                <p id="Text">\n                    Continúe envolviendo el vendaje y asegure el extremo, insertando los sujetadores de plástico dentro de las envolturas.\n                </p>\n            </ion-card>\n        </ion-slide>\n    </ion-slides>\n\n    <ion-slides pager=\'true\' *ngIf="ENG === true">\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">Two-handed EPD application</h2>\n                <h2 id="SubTitle">Step 1</h2>\n                <img id="Image" src="./assets/imgs/circulation/TwoHandedEPDStep1.gif">\n                <p id="Text">Upon opening the packaging of the EPD, stow the plastic wrapper for later use.</p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">Two-handed EPD application</h2>\n                <h2 id="SubTitle">Step 2</h2>\n                <img id="Image" src="./assets/imgs/circulation/TwoHandedEPDStep2.gif">\n                <p id="Text">Unfold the EPD taking care to not touch or contaminate the white dressing pad. Apply the\n                    EPD with two hands placing the dressing pad over the wound. The plastic tension bar should be placed\n                    directly over the center of the wound.</p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">Two-handed EPD application</h2>\n                <h2 id="SubTitle">Step 3</h2>\n                <img id="Image" src="./assets/imgs/circulation/TwoHandedEPDStep3.gif">\n                <p id="Text">Apply pressure with the EPD bandage and wrap the bandage around the limb maintaining\n                    constant pressure. Wrap the bandage around both edges of the dressing with the tension bar still\n                    visible.</p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">Two-handed EPD application</h2>\n                <h2 id="SubTitle">Step 4</h2>\n                <img id="Image" src="./assets/imgs/circulation/TwoHandedEPDStep4.gif">\n                <p id="Text">Place the bandage through the tension bar and reverse the direction of the bandage, folding\n                    down the tension bar to place additional pressure directly over the wound site.</p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">Two-handed EPD application</h2>\n                <h2 id="SubTitle">Step 5</h2>\n                <img id="Image" src="./assets/imgs/circulation/TwoHandedEPDStep5.gif">\n                <p id="Text">Continue wrapping the bandage and secure the running end by tucking the plastic clips into\n                    bandage wraps.</p>\n            </ion-card>\n        </ion-slide>\n    </ion-slides>\n    <ion-slides pager=\'true\' *ngIf="FR === true">\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">Application du PCU à deux mains</h2>\n                <h2 id="SubTitle">Étape 1</h2>\n                <img id="Image" src="./assets/imgs/circulation/TwoHandedEPDStep1.gif">\n                <p id="Text">Lors de l’ouverture de l’emballage du PCU, mettez de côté l’emballage en plastique pour une\n                    utilisation ultérieure.</p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">Application du PCU à deux mains</h2>\n                <h2 id="SubTitle">Étape 2</h2>\n                <img id="Image" src="./assets/imgs/circulation/TwoHandedEPDStep2.gif">\n                <p id="Text">Dépliez le PCU en prenant soin de ne pas toucher ou contaminer le tampon de pansement\n                    blanc. Appliquez le PCU avec les deux mains en plaçant le pansement sur la plaie. La barre de\n                    tension en plastique doit être placée directement au-dessus du centre de la plaie.</p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">Application du PCU à deux mains</h2>\n                <h2 id="SubTitle">Étape 3</h2>\n                <img id="Image" src="./assets/imgs/circulation/TwoHandedEPDStep3.gif">\n                <p id="Text">Appliquez la pression avec le bandage PCU et enroulez le bandage autour du membre en\n                    maintenant une pression constante. Enroulez le bandage autour des deux bords du pansement avec la\n                    barre de tension encore visible.</p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">Application du PCU à deux mains</h2>\n                <h2 id="SubTitle">Étape 4</h2>\n                <img id="Image" src="./assets/imgs/circulation/TwoHandedEPDStep4.gif">\n                <p id="Text">Placez le bandage à travers la barre de tension et inversez la direction du bandage en\n                    rabattant la barre de tension vers le bas pour exercer une pression supplémentaire directement sur\n                    la plaie.</p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">Application du PCU à deux mains</h2>\n                <h2 id="SubTitle">Étape 5</h2>\n                <img id="Image" src="./assets/imgs/circulation/TwoHandedEPDStep5.gif">\n                <p id="Text">Continuez à envelopper le bandage et sécurisez l’extrémité de la bande en rentrant les\n                    clips en plastique dans les enveloppes de bandage.</p>\n            </ion-card>\n        </ion-slide>\n    </ion-slides>\n    <ion-slides pager=\'true\' *ngIf="ES === true">\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">APLICACIÓN DE UN ACE CON DOS MANOS</h2>\n                <h2 id="SubTitle">PASO 1</h2>\n                <img id="Image" src="./assets/imgs/circulation/TwoHandedEPDStep1.gif">\n                <p id="Text">\n                    Al abrir el paquete del ACE, guarde el envoltorio de plástico para uso posterior.\n                </p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">APLICACIÓN DE UN ACE CON DOS MANOS</h2>\n                <h2 id="SubTitle">PASO 2</h2>\n                <img id="Image" src="./assets/imgs/circulation/TwoHandedEPDStep2.gif">\n                <p id="Text">\n                    Al desdoblar el ACE, tenga cuidado de no tocar o contaminar la gasa blanca. Aplique el ACE con las dos manos colocando la gasa sobre la herida. La barra de tensión plástica debe ser colocada directamente sobre el centro de la herida.\n                </p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">APLICACIÓN DE UN ACE CON DOS MANOS</h2>\n                <h2 id="SubTitle">PASO 3</h2>\n                <img id="Image" src="./assets/imgs/circulation/TwoHandedEPDStep3.gif">\n                <p id="Text">\n                    Aplique presión con el ACE y envuelva alrededor de la extremidad manteniendo presión                  constante. Envuelva el vendaje alrededor de ambos bordes del apósito manteniendo la barra de tensión visible.\n                </p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">APLICACIÓN DE UN ACE CON DOS MANOS</h2>\n                <h2 id="SubTitle">PASO 4</h2>\n                <img id="Image" src="./assets/imgs/circulation/TwoHandedEPDStep4.gif">\n                <p id="Text">\n                    Coloque la venda a través de la barra de tensión y cambie la dirección de la venda, doblando la barra de tensión hacia abajo para aplicar presión adicional directamente sobre la herida.\n                </p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">APLICACIÓN DE UN ACE CON DOS MANOS</h2>\n                <h2 id="SubTitle">PASO 5</h2>\n                <img id="Image" src="./assets/imgs/circulation/TwoHandedEPDStep5.gif">\n                <p id="Text">\n                    Continúe envolviendo el vendaje y asegure el extremo, insertando los sujetadores de plástico dentro de las envolturas.\n                </p>\n            </ion-card>\n        </ion-slide>\n    </ion-slides>\n\n    <ion-slides pager=\'true\' *ngIf="ENG === true">\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">EPD to the head</h2>\n                <h2 id="SubTitle">Step 1</h2>\n                <img id="Image" src="./assets/imgs/circulation/EPDHeadStep1.gif">\n                <p id="Text">Upon opening the packaging of the EPD, stow the plastic wrapper for later use.</p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">EPD to the head</h2>\n                <h2 id="SubTitle">Step 2</h2>\n                <img id="Image" src="./assets/imgs/circulation/EPDHeadStep2.gif">\n                <p id="Text">Unfold the EPD taking care to not touch or contaminate the white dressing pad. Apply the\n                    EPD with two hands placing the dressing pad over the wound. The plastic tension bar should be placed\n                    directly over the center of the wound.</p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">EPD to the head</h2>\n                <h2 id="SubTitle">Step 3</h2>\n                <img id="Image" src="./assets/imgs/circulation/EPDHeadStep3.gif">\n                <p id="Text">Apply pressure with the EPD bandage and wrap the bandage around the head maintaining\n                    constant pressure. Wrap the bandage around both edges of the dressing with the tension bar still\n                    visible.</p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">EPD to the head</h2>\n                <h2 id="SubTitle">Step 4</h2>\n                <img id="Image" src="./assets/imgs/circulation/EPDHeadStep4.gif">\n                <p id="Text">Place the bandage through the tension bar and reverse the direction of the bandage, folding\n                    down the tension bar to place additional pressure directly over the wound site.</p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">EPD to the head</h2>\n                <h2 id="SubTitle">Step 5</h2>\n                <img id="Image" src="./assets/imgs/circulation/EPDHeadStep5.gif">\n                <p id="Text">Continue wrapping the bandage and secure the running end by tucking the plastic clips into\n                    bandage wraps.</p>\n            </ion-card>\n        </ion-slide>\n    </ion-slides>\n    <ion-slides pager=\'true\' *ngIf="FR === true">\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">PCU à la tête</h2>\n                <h2 id="SubTitle">Étape 1</h2>\n                <img id="Image" src="./assets/imgs/circulation/EPDHeadStep1.gif">\n                <p id="Text">Lors de l’ouverture de l’emballage du PCU, mettez de côté l’emballage en plastique pour une\n                    utilisation ultérieure.</p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">PCU à la tête</h2>\n                <h2 id="SubTitle">Étape 2</h2>\n                <img id="Image" src="./assets/imgs/circulation/EPDHeadStep2.gif">\n                <p id="Text">Dépliez le PCU en prenant soin de ne pas toucher ou contaminer le tampon blanc du\n                    pansement. Appliquez le PCU avec les deux mains en plaçant le pansement sur la plaie. La barre de\n                    tension en plastique doit être placée directement au-dessus du centre de la plaie.</p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">PCU à la tête</h2>\n                <h2 id="SubTitle">Étape 3</h2>\n                <img id="Image" src="./assets/imgs/circulation/EPDHeadStep3.gif">\n                <p id="Text">Appliquez la pression avec le bandage PCU et enroulez le bandage autour du membre en\n                    maintenant une pression constante. Enroulez le bandage autour des deux bords du pansement avec la\n                    barre de tension encore visible.</p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">PCU à la tête</h2>\n                <h2 id="SubTitle">Étape 4</h2>\n                <img id="Image" src="./assets/imgs/circulation/EPDHeadStep4.gif">\n                <p id="Text">Placez le bandage à travers la barre de tension et inversez la direction du bandage en\n                    rabattant la barre de tension vers le bas pour exercer une pression supplémentaire directement sur\n                    la plaie.</p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">PCU à la tête</h2>\n                <h2 id="SubTitle">Étape 5</h2>\n                <img id="Image" src="./assets/imgs/circulation/EPDHeadStep5.gif">\n                <p id="Text">Continuez à envelopper le bandage et sécurisez l’extrémité de la bande en rentrant les\n                    clips en plastique dans les enveloppes de bandage.</p>\n            </ion-card>\n        </ion-slide>\n    </ion-slides>\n    <ion-slides pager=\'true\' *ngIf="ES === true">\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">EPD a la cabeza</h2>\n                <h2 id="SubTitle">PASO 1</h2>\n                <img id="Image" src="./assets/imgs/circulation/EPDHeadStep1.gif">\n                <p id="Text">Al abrir el embalaje de la EPD, guarde el envoltorio plástico para su uso posterior..</p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">EPD a la cabeza</h2>\n                <h2 id="SubTitle">PASO 2</h2>\n                <img id="Image" src="./assets/imgs/circulation/EPDHeadStep2.gif">\n                <p id="Text">\n                    Al desdoblar el ACE tenga cuidado de no tocar o contaminar la gasa blanca. Aplique el ACE con las dos manos colocando la gasa sobre la herida. La barra de tensión plástica debe ser colocada directamente sobre el centro de la herida.\n                </p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">EPD a la cabeza</h2>\n                <h2 id="SubTitle">PASO 3</h2>\n                <img id="Image" src="./assets/imgs/circulation/EPDHeadStep3.gif">\n                <p id="Text">\n                    Aplique presión con el vendaje EPD y envuelva el vendaje alrededor de la cabeza manteniendo una presión constante. Envuelva el vendaje alrededor de ambos bordes del vendaje con la barra de tensión aún visible.\n                </p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">EPD a la cabeza</h2>\n                <h2 id="SubTitle">PASO 4</h2>\n                <img id="Image" src="./assets/imgs/circulation/EPDHeadStep4.gif">\n                <p id="Text">\n                    Coloque la venda a través de la barra de tensión y cambie la dirección de la venda, doblando la barra de tensión hacia abajo para aplicar presión adicional directamente sobre la herida.\n                </p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">EPD a la cabeza</h2>\n                <h2 id="SubTitle">PASO 5</h2>\n                <img id="Image" src="./assets/imgs/circulation/EPDHeadStep5.gif">\n                <p id="Text">\n                    Continúe envolviendo el vendaje y asegure el extremo que corre metiendo los clips de plástico en las vendas.\n                </p>\n            </ion-card>\n        </ion-slide>\n    </ion-slides>\n</ion-content>'/*ion-inline-end:"D:\Projects\UN_Buddy_First_Aid_App\src\pages\train\circulation\circulation.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], CirculationPage);
    return CirculationPage;
}());

//# sourceMappingURL=circulation.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeadtiltPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeadtiltPage = /** @class */ (function () {
    function HeadtiltPage(storage, navCtrl) {
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.ENG = false;
        this.FR = false;
        this.ES = false;
    }
    HeadtiltPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('Language').then(function (data) {
            if (data === 'ENG') {
                _this.ENG = true;
                _this.FR = false;
                _this.ES = false;
            }
            if (data === 'FR') {
                _this.ENG = false;
                _this.FR = true;
                _this.ES = false;
            }
            if (data === 'ES') {
                _this.ENG = false;
                _this.FR = false;
                _this.ES = true;
            }
        });
    };
    HeadtiltPage.prototype.GoBack = function () {
        this.navCtrl.pop();
    };
    HeadtiltPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-headtilt',template:/*ion-inline-start:"D:\Projects\UN_Buddy_First_Aid_App\src\pages\train\airway\headtilt\headtilt.html"*/'<ion-header no-border>\n    <ion-navbar hideBackButton color="transparent">\n        <ion-buttons left>\n            <button ion-button class="ion-icon" color="light" icon-only  (click)="GoBack()">\n                <ion-icon id="closeicon" name="arrow-back"></ion-icon>\n            </button>\n          </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content no-padding>\n    <ion-card *ngIf="ENG === true">  \n        <h2 id="Title">Head-tilt</h2>\n        <p id="Text">The head-tilt technique is used to most rapidly open the casualty’s upper airway. The head tilt provides the added benefit of maintaining the airway in an open position without the need for the first-aider to maintain constant contact with the head, allowing the first-aider to use their hands to provide other treatments.</p>\n    </ion-card>  \n    <ion-card *ngIf="FR === true">  \n        <h2 id="Title">Inclinaison de la tête</h2>\n        <p id="Text">La technique d’inclinaison de la tête est utilisée pour ouvrir le plus rapidement possible les voies aériennes supérieures de la victime. L’inclinaison de la tête offre l’avantage supplémentaire de maintenir les voies respiratoires en position ouverte sans que le secouriste n’ait besoin de maintenir un contact constant avec la tête, ce qui permet aux secouristes d’utiliser leurs mains pour effectuer d’autres traitements.</p>\n    </ion-card>  \n    <ion-card *ngIf="ES === true">  \n        <h2 id="Title">INCLINACIÓN DE LA CABEZA </h2>\n        <p id="Text">\n            La técnica de inclinación de la cabeza se utiliza para abrir más rápidamente las vías respiratorias superiores del herido. La inclinación proporciona un beneficio adicional de mantener las vías respiratorias en una posición abierta sin la necesidad de que el socorrista mantenga un contacto constante con la cabeza, lo que le permite al socorrista utilizar sus manos para proporcionar otros tratamientos.\n        </p>\n    </ion-card>  \n\n    <ion-card *ngIf="ENG === true">  \n        <h2 id="Title">Performing the head-tilt</h2>\n        <img id="Image" src="./assets/imgs/airway/headtilt.gif">  \n        <p id="Text">The technique is carried out by using one hand to place downward pressure on the casualty’s forehead, while using your other hand to raise the chin and jaw of the victim, extending the head and neck backward.</p>\n    </ion-card>  \n    <ion-card *ngIf="FR === true">  \n        <h2 id="Title">Exécution de l’inclinaison de la tête</h2>\n        <img id="Image" src="./assets/imgs/airway/headtilt.gif">  \n        <p id="Text">La technique est effectuée en utilisant une main pour exercer une pression vers le bas sur le front de la victime, tout en utilisant votre autre main pour soulever le menton et la mâchoire de la victime, en étendant la tête et le cou vers l’arrière.</p>\n    </ion-card> \n    <ion-card *ngIf="ES === true">  \n        <h2 id="Title">EJECUCIÓN DE LA INCLINACIÓN DE LA CABEZA</h2>\n        <img id="Image" src="./assets/imgs/airway/headtilt.gif">  \n        <p id="Text">La técnica se lleva a cabo utilizando una mano para ejercer presión hacia abajo sobre la frente de la víctima, mientras usa la otra mano para levantar la barbilla y mandíbula de la víctima, extendiendo la cabeza y cuello hacia atrás.</p>\n    </ion-card> \n</ion-content>'/*ion-inline-end:"D:\Projects\UN_Buddy_First_Aid_App\src\pages\train\airway\headtilt\headtilt.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HeadtiltPage);
    return HeadtiltPage;
}());

//# sourceMappingURL=headtilt.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecoverypositionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RecoverypositionPage = /** @class */ (function () {
    function RecoverypositionPage(storage, navCtrl) {
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.ENG = false;
        this.FR = false;
        this.ES = false;
    }
    RecoverypositionPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('Language').then(function (data) {
            if (data === 'ENG') {
                _this.ENG = true;
                _this.FR = false;
                _this.ES = false;
            }
            if (data === 'FR') {
                _this.ENG = false;
                _this.FR = true;
                _this.ES = false;
            }
            if (data === 'ES') {
                _this.ENG = false;
                _this.FR = false;
                _this.ES = true;
            }
        });
    };
    RecoverypositionPage.prototype.GoBack = function () {
        this.navCtrl.pop();
    };
    RecoverypositionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-recoveryposition',template:/*ion-inline-start:"D:\Projects\UN_Buddy_First_Aid_App\src\pages\train\airway\recoveryposition\recoveryposition.html"*/'<ion-header no-border>\n    <ion-navbar hideBackButton color="transparent">\n        <ion-buttons left>\n            <button ion-button class="ion-icon" color="light" icon-only (click)="GoBack()">\n                <ion-icon id="closeicon" name="arrow-back"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content no-padding>\n    <ion-card *ngIf="ENG === true">\n        <h2 id="Title">Recovery position</h2>\n        <p id="Text">The recovery position allows for an unconscious casualty to maintain their own airway by allowing\n            the tongue to stay forward of the airway and to drain any aspirated fluid. The Recovery Position is best\n            used for unconscious medical casualties and trauma casualties without spinal injury.</p>\n    </ion-card>\n    <ion-card *ngIf="FR === true">\n        <h2 id="Title">Position de récupération</h2>\n        <p id="Text">La position latérale de sécurité permet à la victime inconsciente de préserver ses propres voies\n            respiratoires en permettant à la langue de rester en avant des voies respiratoires et de drainer tout\n            liquide aspiré. La position de récupération est la meilleure pour les victimes médicales inconscientes et\n            les victimes de traumatismes sans lésion de la colonne vertébrale.</p>\n    </ion-card>\n    <ion-card *ngIf="ES === true">\n        <h2 id="Title">POSICIÓN DE RECUPERACIÓN</h2>\n        <p id="Text">\n            La posición de recuperación permite a un herido inconsciente mantener sus vías respiratorias libres, posicionando a la lengua mantenerse delante de las vías respiratorias y drenar cualquier fluido aspirado. La posición de recuperación es mejor utilizada en heridos medicamente inconscientes y heridos por traumatismo sin lesión espinal.\n        </p>\n    </ion-card>\n\n    <ion-slides pager=\'true\' *ngIf="ENG === true">\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">Performing recovery position</h2>\n                <h2 id="SubTitle">Step 1</h2>\n                <img id="Image" src="./assets/imgs/airway/RecoveryPositionStep1.gif">\n                <p id="Text">With the person lying on their back, kneel on the floor at their side. Extend the arm\n                    nearest you at a right angle to their body with their palm facing up.</p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">Performing recovery position</h2>\n                <h2 id="SubTitle">Step 2</h2>\n                <img id="Image" src="./assets/imgs/airway/RecoveryPositionStep2.gif">\n                <p id="Text">Take the other arm and fold it so the back of their hand rests on the cheek closest to you,\n                    and hold it in place. Use your free hand to bend the person\'s knee farthest from you to a right\n                    angle. Roll the person onto their side by pulling on the bent knee.</p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">Performing recovery position</h2>\n                <h2 id="SubTitle">Step 3</h2>\n                <img id="Image" src="./assets/imgs/airway/RecoveryPositionStep3.gif">\n                <p id="Text">Open their airway by gently tilting their head back and lifting their chin, and check that\n                    nothing is blocking their airway.</p>\n            </ion-card>\n        </ion-slide>\n    </ion-slides>\n    <ion-slides pager=\'true\' *ngIf="FR === true">\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">Exécution de la position latérale de sécurité</h2>\n                <h2 id="SubTitle">Étape 1</h2>\n                <img id="Image" src="./assets/imgs/airway/RecoveryPositionStep1.gif">\n                <p id="Text">Avec la personne allongée sur le dos, agenouillez-vous sur le sol à côté d’elle. Tendez le\n                    bras le plus près de vous à angle droit par rapport au corps, la paume vers le haut.</p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">Exécution de la position latérale de sécurité</h2>\n                <h2 id="SubTitle">Étape 2</h2>\n                <img id="Image" src="./assets/imgs/airway/RecoveryPositionStep2.gif">\n                <p id="Text">Prenez l’autre bras et pliez-le de façon à ce que le dos de la main repose sur la joue la\n                    plus proche de vous, et maintenez-le en place. Utilisez votre main libre pour plier le genou externe\n                    de la personne à angle droit. Roulez la personne sur le côté en tirant sur le genou fléchi.</p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">Exécution de la position latérale de sécurité</h2>\n                <h2 id="SubTitle">Étape 3</h2>\n                <img id="Image" src="./assets/imgs/airway/RecoveryPositionStep3.gif">\n                <p id="Text">Ouvrez les voies respiratoires en inclinant doucement la tête vers l’arrière et en levant\n                    le menton de la victime, et vérifiez que rien ne bloque ses voies respiratoires.</p>\n            </ion-card>\n        </ion-slide>\n    </ion-slides>\n    <ion-slides pager=\'true\' *ngIf="ES === true">\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">EJECUCIÓN DE POSICIÓN DE RECUPERACIÓN</h2>\n                <h2 id="SubTitle">PASO 1:</h2>\n                <img id="Image" src="./assets/imgs/airway/RecoveryPositionStep1.gif">\n                <p id="Text">\n                    Con la persona recostada hacia atrás, arrodíllese en el piso al lado de la persona. Extienda el brazo más cercano de usted en ángulo recto de su cuerpo con la palma de la mano hacia arriba.\n                </p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">EJECUCIÓN DE POSICIÓN DE RECUPERACIÓN</h2>\n                <h2 id="SubTitle">PASO 2:</h2>\n                <img id="Image" src="./assets/imgs/airway/RecoveryPositionStep2.gif">\n                <p id="Text">\n                    Tome el otro brazo y dóblelo de modo que el dorso de la mano descanse sobre la mejilla más cercana a usted y manténgalo en su lugar. Use la mano que está libre para doblar en ángulo recto la rodilla de la persona mas alejada de usted. Ponga a la persona de lado tirando de la rodilla doblada.\n                </p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">EJECUCIÓN DE POSICIÓN DE RECUPERACIÓN</h2>\n                <h2 id="SubTitle">PASO 3:</h2>\n                <img id="Image" src="./assets/imgs/airway/RecoveryPositionStep3.gif">\n                <p id="Text">Abra las vías respiratorias inclinando suavemente la cabeza hacia atrás y levantando la barbilla y revise que no haya nada bloqueando las vías respiratorias.</p>\n            </ion-card>\n        </ion-slide>\n    </ion-slides>\n</ion-content>'/*ion-inline-end:"D:\Projects\UN_Buddy_First_Aid_App\src\pages\train\airway\recoveryposition\recoveryposition.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], RecoverypositionPage);
    return RecoverypositionPage;
}());

//# sourceMappingURL=recoveryposition.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SitupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SitupPage = /** @class */ (function () {
    function SitupPage(storage, navCtrl) {
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.ENG = false;
        this.FR = false;
        this.ES = false;
    }
    SitupPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('Language').then(function (data) {
            if (data === 'ENG') {
                _this.ENG = true;
                _this.FR = false;
                _this.ES = false;
            }
            if (data === 'FR') {
                _this.ENG = false;
                _this.FR = true;
                _this.ES = false;
            }
            if (data === 'ES') {
                _this.ENG = false;
                _this.FR = false;
                _this.ES = true;
            }
        });
    };
    SitupPage.prototype.GoBack = function () {
        this.navCtrl.pop();
    };
    SitupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-situp',template:/*ion-inline-start:"D:\Projects\UN_Buddy_First_Aid_App\src\pages\train\airway\situp\situp.html"*/'<ion-header no-border>\n    <ion-navbar hideBackButton color="transparent">\n        <ion-buttons left>\n            <button ion-button class="ion-icon" color="light" icon-only (click)="GoBack()">\n                <ion-icon id="closeicon" name="arrow-back"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content no-padding>\n    <ion-card *ngIf="ENG === true">\n        <h2 id="Title">Sit up & forward position</h2>\n        <p id="Text">Casualties that are conscious and experiencing breathing difficulty should be permitted to adopt\n            the ‘sit up & forward position’.<br><br>Particularly those with severe facial trauma may be able to best\n            maintain their airway by leaning forward and allowing blood, tissue, and fluid to naturally drain free.</p>\n        <img id="Image" src="./assets/imgs/airway/sittingposition.gif">\n    </ion-card>\n    <ion-card *ngIf="FR === true">\n        <h2 id="Title">Position assise penchée en avant</h2>\n        <p id="Text">Les blessés conscients qui éprouvent des difficultés respiratoires devraient être autorisés à\n            adopter la « position assise penchée vers l’avant ». <br><br>En particulier, ceux qui ont un traumatisme\n            facial grave pourront être mieux en mesure de maintenir leurs voies respiratoires en se penchant vers\n            l’avant et en laissant le sang, les tissus et les liquides se dégager naturellement.</p>\n        <img id="Image" src="./assets/imgs/airway/sittingposition.gif">\n    </ion-card>\n    <ion-card *ngIf="ES === true">\n        <h2 id="Title">POSICIÓN SENTADA HACIA ADELANTE</h2>\n        <p id="Text">\n            Se puede adoptar una posición sentada hacia adelante a los heridos que estén conscientes que sientan\n            dificultad para respirar.\n            Particularmente aquellos con traumas faciales severos puedan mantener mejor sus vías respiratorias\n            inclinándose hacia adelante y permitiendo que la sangre, los tejidos y el líquido se drenen naturalmente.\n        </p>\n        <img id="Image" src="./assets/imgs/airway/sittingposition.gif">\n    </ion-card>\n</ion-content>'/*ion-inline-end:"D:\Projects\UN_Buddy_First_Aid_App\src\pages\train\airway\situp\situp.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], SitupPage);
    return SitupPage;
}());

//# sourceMappingURL=situp.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RespirationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RespirationPage = /** @class */ (function () {
    function RespirationPage(storage, navCtrl) {
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.ENG = false;
        this.FR = false;
        this.ES = false;
    }
    RespirationPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('Language').then(function (data) {
            if (data === 'ENG') {
                _this.ENG = true;
                _this.FR = false;
                _this.ES = false;
            }
            if (data === 'FR') {
                _this.ENG = false;
                _this.FR = true;
                _this.ES = false;
            }
            if (data === 'ES') {
                _this.ENG = false;
                _this.FR = false;
                _this.ES = true;
            }
        });
    };
    RespirationPage.prototype.GoBack = function () {
        this.navCtrl.pop();
    };
    RespirationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-respiration',template:/*ion-inline-start:"D:\Projects\UN_Buddy_First_Aid_App\src\pages\train\respiration\respiration.html"*/'<ion-header no-border>\n    <ion-navbar hideBackButton color="transparent">\n        <ion-buttons left>\n            <button ion-button class="ion-icon" color="light" icon-only (click)="GoBack()">\n                <ion-icon id="closeicon" name="arrow-back"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content no-padding>\n    <ion-card *ngIf="ENG === true">\n        <h2 id="Title">Chest wounds</h2>\n        <p id="Text">Any injury on the front or back of the casualty’s torso above the navel should be treated as a\n            chest injury.</p>\n    </ion-card>\n    <ion-card *ngIf="FR === true">\n        <h2 id="Title">Blessures à la poitrine</h2>\n        <p id="Text">Toute blessure à l’avant ou à l’arrière du torse de la victime au-dessus du nombril doit être\n            traitée comme une blessure à la poitrine.</p>\n    </ion-card>\n    <ion-card *ngIf="ES === true">\n        <h2 id="Title">HERIDAS DE PECHO</h2>\n        <p id="Text">\n            Cualquier lesión en la parte delantera o trasera del torso de la víctima por encima del ombligo debe\n            tratarse como una lesión en el pecho.\n        </p>\n    </ion-card>\n\n    <ion-card *ngIf="ENG === true">\n        <h2 id="Title">Chest seal</h2>\n        <p id="Text">Sucking chest wounds should be sealed with an air tight dressing.<br><br>If there is more than one\n            wound, such as an entrance and exit wound, apply the chest seal or 3-sided flutter valve to the wound on the\n            casualty\'s front and a full seal to the wound on the casualty\'s back (all four sides taped down).\n        </p>\n    </ion-card>\n    <ion-card *ngIf="FR === true">\n        <h2 id="Title">Pansement thoracique occlusif</h2>\n        <p id="Text">Les plaies thoraciques soufflantes doivent être scellées avec un pansement hermétique. S’il y a\n            plus d’une plaie, comme une plaie d’entrée et une plaie de sortie, appliquez un pansement thoracique\n            occlusif ou une valve anti-reflux à 3 côtés sur la plaie sur l’avant de la victime et un pansement occlusif\n            sur la plaie au dos de la victime (les quatre côtés sont scotchés).\n        </p>\n    </ion-card>\n    <ion-card *ngIf="ES === true">\n        <h2 id="Title">CUBRIR EL PECHO</h2>\n        <p id="Text">Las heridas por succión en el pecho deben cubrirse con un vendaje hermético.\n            \n            Si hay más de una herida, tales como una entrada o salida, aplicar el vendaje hermético o la válvula de\n            aleteo de 3 lados en la herida, de la parte frontal de la víctima y un sello completo a la herida en la\n            espalda de la víctima (los cuatro lados pegados con cinta adhesiva).\n        </p>\n    </ion-card>\n\n    <ion-slides pager=\'true\' *ngIf="ENG === true">\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">Applying chest seal</h2>\n                <h2 id="SubTitle">Step 1</h2>\n                <img id="Image" src="assets/imgs/respiration/ChestsealStep1.gif">\n                <p id="Text">Prior to fetching a chest seal place gloved hand over the wound or apply sideways pressure\n                    to the wound to shift the muscle tissue, closing the wound.</p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">Applying chest seal</h2>\n                <h2 id="SubTitle">Step 2</h2>\n                <img id="Image" src="./assets/imgs/respiration/ChestsealStep2.gif">\n                <p id="Text">Take gauze/cloth and wipe away any blood, sweat, debris from the wound area. Place the\n                    chest seal next to the wound. Slowly remove the plastic backing while rolling the sticky side over\n                    the wound. The seal should be centered over the wound.</p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">Applying chest seal</h2>\n                <h2 id="SubTitle">Step 3</h2>\n                <img id="Image" src="./assets/imgs/respiration/ChestsealStep3.gif">\n                <p id="Text">Verify that the seal is sticking and that no air is heard passing through the seal during\n                    inhalation. For vented chest seals make sure that the vent ports are not clogged up and are able to\n                    let excess air vent from the chest cavity. Repeat as necessary for additional wounds, ensure you\n                    seal any exit wounds.</p>\n            </ion-card>\n        </ion-slide>\n    </ion-slides>\n    <ion-slides pager=\'true\' *ngIf="FR === true">\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">Application d’un pansement thoracique occlusif</h2>\n                <h2 id="SubTitle">Étape 1</h2>\n                <img id="Image" src="assets/imgs/respiration/ChestsealStep1.gif">\n                <p id="Text">Avant de poser un pansement pour plaie thoracique, placez la main gantée sur la plaie ou\n                    appuyez sur les côtés de la plaie pour déplacer le tissu musculaire et fermer la plaie.</p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">Application d’un pansement thoracique occlusif</h2>\n                <h2 id="SubTitle">Étape 2</h2>\n                <img id="Image" src="./assets/imgs/respiration/ChestsealStep2.gif">\n                <p id="Text">Prenez de la gaze ou un tissu et essuyez le sang, la sueur et les débris de la zone de la\n                    plaie. Placez le pansement occlusif à côté de la plaie. Retirez lentement le dos en plastique tout\n                    en faisant rouler le côté collant sur la plaie. Le pansement doit être centré sur la plaie.</p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">Application d’un pansement thoracique occlusif</h2>\n                <h2 id="SubTitle">Étape 3</h2>\n                <img id="Image" src="./assets/imgs/respiration/ChestsealStep3.gif">\n                <p id="Text">Vérifiez que le pansement colle bien et qu’il n’y a pas d’air qui passe à travers pendant\n                    l’inhalation. Pour les pansements thoraciques ventilés, s’assurer que les orifices de ventilation ne\n                    sont pas obstrués et qu’ils sont capables de laisser l’excès d’air s’échapper de la cavité\n                    thoracique. Répétez l’opération si nécessaire pour d’autres plaies, assurez-vous de sceller toutes\n                    les plaies de sortie.</p>\n            </ion-card>\n        </ion-slide>\n    </ion-slides>\n    <ion-slides pager=\'true\' *ngIf="ES === true">\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">APLICAR PARCHE DE PECHO</h2>\n                <h2 id="SubTitle">PASO 1:</h2>\n                <img id="Image" src="assets/imgs/respiration/ChestsealStep1.gif">\n                <p id="Text">\n                    Antes de utilizar un parche de pecho, coloque la mano enguantada sobre la herida o aplique presión\n                    lateral a la herida para mover el tejido muscular cerrando la herida.\n                </p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">APLICAR PARCHE DE PECHO</h2>\n                <h2 id="SubTitle">PASO 2:</h2>\n                <img id="Image" src="./assets/imgs/respiration/ChestsealStep2.gif">\n                <p id="Text">\n                    Tome una gasa o paño y limpie la sangre, el sudor y los residuos del área de la herida. Coloque el\n                    parche de forma uniforme con la herida. Remueva despacio el respaldo de plástico mientras enrolla el\n                    lado adhesivo sobre la herida. El parche debe quedar centrado sobre la herida.\n                </p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">APLICAR PARCHE DE PECHO</h2>\n                <h2 id="SubTitle">PASO 3:</h2>\n                <img id="Image" src="./assets/imgs/respiration/ChestsealStep3.gif">\n                <p id="Text">\n                    Verifique que el parche quede adherido y que no se escuche paso de aire a través del sello durante\n                    la inhalación. Para los parches de pecho ventilados, asegúrese que los puertos de ventilación no\n                    estén obstruidos y que sean capaces de permitir que el exceso de aire salga de la cavidad torácica.\n                    Repita según sea necesario para heridas adicionales, asegúrese de sellar cualquier herida.\n                </p>\n            </ion-card>\n        </ion-slide>\n    </ion-slides>\n\n    <ion-card *ngIf="ENG === true">\n        <h2 id="Title">4-Sided Occlusive Dressing</h2>\n        <p id="Text">If commercial chest seals are not available, any air tight material like plastic can be used to\n            seal the chest including plastic wrapping from other dressings, duct tape or plastic kitchen roll. The\n            important objective is to seal the wounds in a way that prevents air from entering the chest.</p>\n        <img id="Image" src="./assets/imgs/respiration/FlutterValve.png">\n    </ion-card>\n    <ion-card *ngIf="FR === true">\n        <h2 id="Title">Pansement occlusif à 4 côtés</h2>\n        <p id="Text">S’il n’y a pas de pansement thoracique occlusif, tout matériau étanche à l’air comme du plastique\n            peut être utilisé pour sceller la poitrine, y compris un emballage en plastique, d’autres pansements, du\n            ruban adhésif en toile ou un rouleau de film plastique. L’objectif important est de sceller les plaies d’une\n            manière qui empêche l’air de pénétrer dans la poitrine.</p>\n        <img id="Image" src="./assets/imgs/respiration/FlutterValve.png">\n    </ion-card>\n    <ion-card *ngIf="ES === true">\n        <h2 id="Title">VENDAJE OCLUSIVO DE 4 LADOS</h2>\n        <p id="Text">\n            Si los parches comerciales no están disponibles, cualquier material hermético como el plástico puede ser\n            usado para sellar el pecho incluyendo envoltura de plástico de otros vendajes, cinta adhesiva o rollo\n            plástico para cocina. El objetivo principal es sellar las heridas de forma que evitemos que el aire entre en\n            el pecho.\n        </p>\n        <img id="Image" src="./assets/imgs/respiration/FlutterValve.png">\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"D:\Projects\UN_Buddy_First_Aid_App\src\pages\train\respiration\respiration.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], RespirationPage);
    return RespirationPage;
}());

//# sourceMappingURL=respiration.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HyperthermiaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HyperthermiaPage = /** @class */ (function () {
    function HyperthermiaPage(storage, navCtrl) {
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.ENG = false;
        this.FR = false;
        this.ES = false;
    }
    HyperthermiaPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('Language').then(function (data) {
            if (data === 'ENG') {
                _this.ENG = true;
                _this.FR = false;
                _this.ES = false;
            }
            else if (data === 'FR') {
                _this.ENG = false;
                _this.FR = true;
                _this.ES = false;
            }
            else if (data === 'ES') {
                _this.ENG = false;
                _this.FR = false;
                _this.ES = true;
            }
        });
    };
    HyperthermiaPage.prototype.GoBack = function () {
        this.navCtrl.pop();
    };
    HyperthermiaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hyperthermia',template:/*ion-inline-start:"D:\Projects\UN_Buddy_First_Aid_App\src\pages\train\heat\hyperthermia\hyperthermia.html"*/'<ion-header no-border>\n    <ion-navbar hideBackButton color="transparent">\n        <ion-buttons left>\n            <button ion-button class="ion-icon" color="light" icon-only (click)="GoBack()">\n                <ion-icon id="closeicon" name="arrow-back"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content no-padding>\n    <ion-card *ngIf="ENG === true">\n        <h2 id="Title">Hyperthermia</h2>\n        <p id="Text">Hyperthermia (heat cramps/heat exhaustion or heat stroke) is elevated body temperature as the body\n            produces or absorbs more heat than it dissipates. Extreme temperature elevation becomes a medical emergency\n            requiring immediate treatment to prevent disability or death.\n        </p>\n    </ion-card>\n    <ion-card *ngIf="FR === true">\n        <h2 id="Title">Hyperthermie</h2>\n        <p id="Text">Hyperthermia (heat cramps/heat exhaustion or heat stroke) is elevated body temperature as the body\n            produces or absorbs more heat than it dissipates. Extreme temperature elevation becomes a medical emergency\n            requiring immediate treatment to prevent disability or death.</p>\n    </ion-card>\n    <ion-card *ngIf="ES === true">\n        <h2 id="Title">HIPERTERMIA</h2>\n        <p id="Text">\n            Hipertermia (calambres por calor/insolación o golpe de calor) es la temperatura corporal elevada cuando el cuerpo genera o absorbe más calor de lo que puede disipar. Un aumento extremo de la temperatura es una emergencia médica que requiere tratamiento inmediato para prevenir discapacidades o la muerte.\n        </p>\n    </ion-card>\n\n    <ion-card *ngIf="ENG === true">\n        <h2 id="Title">Heat exhaustion</h2>\n        <p id="Text">As the body’s organs and muscle tissue lose fluid, they draw this fluid from the fat cells and\n            circulating blood causing the heart rate to increase in an effort to maintain blood pressure. Signs of Heat\n            Exhaustion include:\n            • Excessive Sweating\n            • Mild Headaches\n            • Dizziness and/or confusion\n            • Loss of Appetite\n        </p>\n        <p id="SubTitle">Treatment</p>\n        <p id="Text">Emergency medical care for hyperthermia may include one of the following interventions:\n            • Remove person from the elements into the shade\n            • Use cold wet towels or dampen clothing with tepid water\n            • Offer cool fluids to drink\n            Avoid hot, heavy meals. Do not immerse someone who is suffering from hyperthermia into a body of cold water\n        </p>\n    </ion-card>\n    <ion-card *ngIf="FR === true">\n        <h2 id="Title">Épuisement par la chaleur</h2>\n        <p id="Text">Lorsque les organes et les tissus musculaires du corps perdent du liquide, ils le tirent des\n            cellules adipeuses et du sang en circulation, ce qui fait augmenter la fréquence cardiaque dans un effort de\n            maintenir la tension artérielle. Les signes d’épuisement par la chaleur incluent :\n            • Transpiration excessive\n            • Légers maux de tête\n            • Vertige et/ou confusion\n            • Perte d’appétit</p>\n        <p id="SubTitle">Traitement</p>\n        <p id="Text">Les soins médicaux d\'urgence en cas d\'hyperthermie peuvent comprendre l\'une des interventions\n            suivantes :\n            • Retirez la personne du soleil et la mettre à l’ombre\n            • Utilisez des serviettes humides froides ou mouiller les vêtements avec de l’eau tiède\n            • Offrez des boissons froides\n            Évitez les repas chauds et lourds. Ne plongez pas une personne souffrant d\'hyperthermie dans un plan d\'eau\n            froide.</p>\n    </ion-card>\n    <ion-card *ngIf="ES === true">\n        <h2 id="Title">INSOLACIÓN</h2>\n        <p id="Text">A medida que los órganos y tejidos musculares del cuerpo pierden líquido, extraen este líquido de las células grasas y de la sangre circulante, haciendo que la frecuencia cardíaca aumente en un intento de mantener la presión arterial. Los signos de insolación incluyen:\n            • Sudoración excesiva.\n            • Dolores leves de cabeza.\n            • Mareo o confusión.\n            • Pérdida de apetito\n        </p>\n        <p id="SubTitle">TRATAMIENTO</p>\n        <p id="Text">La atención médica de emergencia para la hipertermia puede incluir una de las siguientes intervenciones:\n            • Alejar a la persona del ambiente caluroso hacia la sombra.\n            • Usar toallas mojadas frías o humedecer la ropa con agua tibia.\n            • Proporcionar líquidos fríos para beber.\n            Evitar comidas pesadas y calientes. No sumergir a alguien que está sufriendo hipertermia en agua fría.\n        </p>\n    </ion-card>\n\n    <ion-card *ngIf="ENG === true">\n        <h2 id="Title">Heat stroke</h2>\n        <p id="Text">If fluid and electrolyte levels are not rapidly replaced, the casualty’s level of consciousness\n            will continue to decline, leading to Heat Stroke. Signs of Heat Stroke include:\n            • Throbbing Headache\n            • Little or no sweating\n            • Vomiting\n            • Red skin which is dry and hot to the touch\n            • Loss of Consciousness (fainting)\n        </p>\n        <p id="SubTitle">Treatment</p>\n        <p id="Text">Heat Stroke is a medical emergency. Without rapid intervention, the casualty may suffer\n            irreversible brain and organ damage. The treatment for Heat Stoke in a hot field environment is referred to\n            as ‘rapid cooling’. This is achieved by:\n            • Requesting assistance of a medical professional as soon as possible\n            • Moving the casualty to shade if possible\n            • Removing the casualty’s clothing (except underwear)\n            • Pouring water (30ºC-40ºC) over the casualty below the neck. Use as much water as possible (approx40-80L)\n            • Medical professional to administer IV fluid\n        </p>\n    </ion-card>\n    <ion-card *ngIf="FR === true">\n        <h2 id="Title">Insolation</h2>\n        <p id="Text">Si les niveaux de liquide et d’électrolytes ne sont pas rapidement rééquilibrés, l’état de\n            conscience de la victime continuera de décliner, ce qui entraînera une insolation. Les signes d’insolation\n            incluent :\n            • Maux de tête lancinants\n            • Pas de transpiration ou transpiration légère.\n            • Vomissements\n            • Peau rouge, sèche et chaude au toucher\n            • Perte de conscience (évanouissement)</p>\n        <p id="SubTitle">Traitement</p>\n        <p id="Text">L’insolation est une urgence médicale. Sans intervention rapide, la victime peut souffrir de\n            dommages irréversibles au cerveau et aux organes. Le traitement de l’insolation dans un environnement de\n            terrain surchauffé est appelé « refroidissement rapide ». Pour ce faire, il faut :\n            • Demander au plus tôt l’aide d’un professionnel de la santé\n            • Mettre la victime à l’ombre si possible\n            • Retirer les vêtements de la victime (sauf les sous-vêtements)\n            • Verser de l’eau (30ºC-40ºC) sur la victime en dessous du cou. Utiliser autant d’eau que possible (de 40 à\n            80 litres environ)\n            • Un professionnel de la santé qui administre du liquide par voie intraveineuse</p>\n    </ion-card>\n    <ion-card *ngIf="ES === true">\n        <h2 id="Title">GOLPE DE CALOR</h2>\n        <p id="Text">Si los niveles de líquidos y electrolitos no se reponen rápidamente, el nivel de conciencia de la víctima seguirá disminuyendo, llevándola a una insolación. Los signos de un golpe de calor incluyen:\n            • Dolor de cabeza palpitante.\n            • Poca o nada de sudoración.\n            • Vómitos.\n            • Piel enrojecida, la cual es seca y caliente al tacto.\n            • Pérdida de conciencia (desmayo).\n        </p>\n        <p id="SubTitle">TRATAMIENTO</p>\n        <p id="Text">El golpe de calor es una emergencia médica. Sin la intervención inmediata, la víctima podría sufrir daños irreversibles de los órganos y el cerebro. El tratamiento para el golpe de calor en un ambiente caluroso se conoce como ‘enfriamiento rápido’, y se logra de la siguiente manera:\n            • Solicitar la asistencia de un médico profesional lo antes posible.\n            • Trasladar a la víctima a la sombra de ser posible\n            • Quitarle la ropa a la víctima (excepto la ropa interior).\n            • Verter agua (30 °C o 40 °C) sobre la víctima debajo del cuello. Utilizar la \n            • mayor cantidad de agua posible (aproximadamente entre 40 a 80 litros).\n            • Un médico profesional debe de administrar líquidos por vía intravenosa.\n        </p>\n    </ion-card>\n</ion-content>'/*ion-inline-end:"D:\Projects\UN_Buddy_First_Aid_App\src\pages\train\heat\hyperthermia\hyperthermia.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HyperthermiaPage);
    return HyperthermiaPage;
}());

//# sourceMappingURL=hyperthermia.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HypothermiaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HypothermiaPage = /** @class */ (function () {
    function HypothermiaPage(storage, navCtrl) {
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.ENG = false;
        this.FR = false;
        this.ES = false;
    }
    HypothermiaPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('Language').then(function (data) {
            if (data === 'ENG') {
                _this.ENG = true;
                _this.FR = false;
                _this.ES = false;
            }
            else if (data === 'FR') {
                _this.ENG = false;
                _this.FR = true;
                _this.ES = false;
            }
            else if (data === 'ES') {
                _this.ENG = false;
                _this.FR = false;
                _this.ES = true;
            }
        });
    };
    HypothermiaPage.prototype.GoBack = function () {
        this.navCtrl.pop();
    };
    HypothermiaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hypothermia',template:/*ion-inline-start:"D:\Projects\UN_Buddy_First_Aid_App\src\pages\train\heat\hypothermia\hypothermia.html"*/'<ion-header no-border>\n    <ion-navbar hideBackButton color="transparent">\n        <ion-buttons left>\n            <button ion-button class="ion-icon" color="light" icon-only (click)="GoBack()">\n                <ion-icon id="closeicon" name="arrow-back"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content no-padding>\n    <ion-card *ngIf="ENG === true">\n        <h2 id="Title">Hypothermia</h2>\n        <p id="Text">Hypothermia is a medical emergency that occurs when your body loses heat faster than it can produce\n            heat, causing a dangerously low body temperature. Severe hypothermia can be identified by the following\n            symptoms:\n            • Shivering\n            • Slurred speech or mumbling\n            • Slow, shallow breathing\n            • Weak pulse\n            • Clumsiness or lack of coordination\n            • Drowsiness or very low energy\n            • Confusion or memory loss\n            • Loss of consciousness\n            • Bright red, cold skin (in infants)\n        </p>\n    </ion-card>\n    <ion-card *ngIf="FR === true">\n        <h2 id="Title">Hypothermie</h2>\n        <p id="Text">L’hypothermie est une urgence médicale qui survient lorsque votre corps perd de la chaleur plus\n            rapidement qu’il ne peut en produire, ce qui entraîne une température corporelle dangereusement basse.\n            L’hypothermie sévère peut être identifiée par les symptômes suivants:\n            • Frissonnements\n            • Troubles de l’élocution ou marmonnements\n            • Respiration lente et superficielle\n            • Pouls faible\n            • Maladresse ou manque de coordination\n            • Somnolence ou très faible énergie\n            • Confusion ou perte de mémoire\n            • Perte de conscience\n            • Peau rouge vif, peau froide (chez les nourrissons)\n        </p>\n    </ion-card>\n    <ion-card *ngIf="ES === true">\n        <h2 id="Title">HIPOTERMIA</h2>\n        <p id="Text">La hipotermia es una emergencia médica que ocurre cuando el cuerpo pierde calor más rápido de lo que puede producirlo, causando una temperatura corporal peligrosamente baja. La hipotermia grave puede identificarse por los siguientes síntomas:\n            • Temblores\n            • Habla entrecortada o balbuceos\n            • Respiración lenta y superficial\n            • Pulso débil\n            • Torpeza o falta de coordinación\n            • Somnolencia o energía muy baja\n            • Confusión o pérdida de memoria\n            • Pérdida de conocimiento\n            • Piel roja y fría (en bebés)\n        </p>\n    </ion-card>\n\n    <ion-card *ngIf="ENG === true">\n        <h2 id="Title">Treating hypothermia</h2>\n        <p id="Text">Depending on the severity of hypothermia, emergency medical care for hypothermia may include one of\n            the following interventions:\n            • Cover them with heated blankets\n            or use sleeping bag\n            • Offer warm fluids to drink\n        </p>\n    </ion-card>\n    <ion-card *ngIf="FR === true">\n        <h2 id="Title">Traitement de l’hypothermie</h2>\n        <p id="Text">Les soins médicaux d’urgence sont fonctions de la sévérité de l’hypothermie et peuvent comprendre\n            l’une des interventions suivantes:\n            • Couvrir avec des couvertures chauffantes ou utilisez un sac de couchage.\n            • Proposer des liquides chauds à boire\n        </p>\n    </ion-card>\n    <ion-card *ngIf="ES === true">\n        <h2 id="Title">TRATAMIENTO PARA LA HIPOTERMIA</h2>\n        <p id="Text">\n            Dependiendo de la gravedad de la hipotermia, la atención médica de emergencia puede incluir una de las siguientes intervenciones:\n            • Cubrir a la persona con mantas térmicas o utilizar un saco de dormir.\n            • Ofrecer líquidos calientes para beber.\n        </p>\n    </ion-card>\n\n    <ion-slides pager=\'true\' *ngIf="ENG === true">\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">Hypothermia wrap</h2>\n                <h2 id="SubTitle">Step 1</h2>\n                <img id="Image" src="./assets/imgs/heat/HypoWrapStep1.gif">\n                <p id="Text">Lay out a tarp on the ground. Place one or two (sleeping) pads down on top of the tarp. Two\n                    pads are always better than one.</p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">Hypothermia wrap</h2>\n                <h2 id="SubTitle">Step 2</h2>\n                <img id="Image" src="./assets/imgs/heat/HypoWrapStep2.gif">\n                <p id="Text">Stack two sleeping bags on top of the pads.</p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">Hypothermia wrap</h2>\n                <h2 id="SubTitle">Step 3</h2>\n                <img id="Image" src="./assets/imgs/heat/HypoWrapStep3.gif">\n                <p id="Text">Place the victim inside the second sleeping bag.</p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">Hypothermia wrap</h2>\n                <h2 id="SubTitle">Step 4</h2>\n                <img id="Image" src="./assets/imgs/heat/HypoWrapStep4.gif">\n                <p id="Text">Place a third sleeping bag on top.</p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">Hypothermia wrap</h2>\n                <h2 id="SubTitle">Step 5</h2>\n                <img id="Image" src="./assets/imgs/heat/HypoWrapStep5.gif">\n                <p id="Text">Wrap the victim in the tarp.</p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">Hypothermia wrap</h2>\n                <h2 id="SubTitle">Step 6</h2>\n                <img id="Image" src="./assets/imgs//heat/HypoWrapStep6.gif">\n                <p id="Text">Avoid opening the hypothermia wrap if possible as opening and closing will significantly\n                    reduce its effectiveness.</p>\n            </ion-card>\n        </ion-slide>\n    </ion-slides>\n    <ion-slides pager=\'true\' *ngIf="FR === true">\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">Enveloppement hypothermique </h2>\n                <h2 id="SubTitle">Étape 1</h2>\n                <img id="Image" src="./assets/imgs/heat/HypoWrapStep1.gif">\n                <p id="Text">Posez une bâche sur le sol. Placez un ou deux coussins (oreillers) sur le dessus de la\n                    bâche. Deux coussins valent mieux qu’un.</p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">Enveloppement hypothermique </h2>\n                <h2 id="SubTitle">Étape 2</h2>\n                <img id="Image" src="./assets/imgs/heat/HypoWrapStep2.gif">\n                <p id="Text">Empilez deux sacs de couchage sur les coussins.</p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">Enveloppement hypothermique </h2>\n                <h2 id="SubTitle">Étape 3</h2>\n                <img id="Image" src="./assets/imgs/heat/HypoWrapStep3.gif">\n                <p id="Text">Placez la victime dans le deuxième sac de couchage.</p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">Enveloppement hypothermique </h2>\n                <h2 id="SubTitle">Étape 4</h2>\n                <img id="Image" src="./assets/imgs/heat/HypoWrapStep4.gif">\n                <p id="Text">Placez un troisième sac de couchage par-dessus.</p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">Enveloppement hypothermique </h2>\n                <h2 id="SubTitle">Étape 5</h2>\n                <img id="Image" src="./assets/imgs/heat/HypoWrapStep5.gif">\n                <p id="Text">Enveloppez la victime dans la bâche.</p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">Enveloppement hypothermique</h2>\n                <h2 id="SubTitle">Étape 6</h2>\n                <img id="Image" src="./assets/imgs//heat/HypoWrapStep6.gif">\n                <p id="Text">Évitez si possible d\'ouvrir l\'enveloppe hypothermique, car l\'ouverture et la fermeture\n                    réduisent considérablement son efficacité.</p>\n            </ion-card>\n        </ion-slide>\n    </ion-slides>\n    <ion-slides pager=\'true\' *ngIf="ES === true">\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">ENVOLTURA PARA LA HIPOTERMIA</h2>\n                <h2 id="SubTitle">PASO 1</h2>\n                <img id="Image" src="./assets/imgs/heat/HypoWrapStep1.gif">\n                <p id="Text">\n                    Extienda una lona en el suelo. Coloque uno o dos lonas. Dos lonas siempre son mejor que una.\n                </p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">ENVOLTURA PARA LA HIPOTERMIA</h2>\n                <h2 id="SubTitle">PASO 2</h2>\n                <img id="Image" src="./assets/imgs/heat/HypoWrapStep2.gif">\n                <p id="Text">Apile dos sacos de dormir en la parte superior de las lonas.</p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">ENVOLTURA PARA LA HIPOTERMIA</h2>\n                <h2 id="SubTitle">PASO 3</h2>\n                <img id="Image" src="./assets/imgs/heat/HypoWrapStep3.gif">\n                <p id="Text">Coloque a la víctima dentro del segundo saco de dormir.</p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">ENVOLTURA PARA LA HIPOTERMIA</h2>\n                <h2 id="SubTitle">PASO 4</h2>\n                <img id="Image" src="./assets/imgs/heat/HypoWrapStep4.gif">\n                <p id="Text">Coloque un tercer saco de dormir sobre el anterior.</p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">ENVOLTURA PARA LA HIPOTERMIA</h2>\n                <h2 id="SubTitle">PASO 5</h2>\n                <img id="Image" src="./assets/imgs/heat/HypoWrapStep5.gif">\n                <p id="Text">Envuelva la víctima en la lona.</p>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="cardSteps">\n                <h2 id="Title">ENVOLTURA PARA LA HIPOTERMIA</h2>\n                <h2 id="SubTitle">PASO 6</h2>\n                <img id="Image" src="./assets/imgs//heat/HypoWrapStep6.gif">\n                <p id="Text">\n                    Evite abrir la envoltura para hipotermia si es posible, ya que abrirla y cerrarla reducirá significativamente su efectividad.\n                </p>\n            </ion-card>\n        </ion-slide>\n    </ion-slides>\n\n</ion-content>'/*ion-inline-end:"D:\Projects\UN_Buddy_First_Aid_App\src\pages\train\heat\hypothermia\hypothermia.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HypothermiaPage);
    return HypothermiaPage;
}());

//# sourceMappingURL=hypothermia.js.map

/***/ })

},[225]);
//# sourceMappingURL=main.js.map