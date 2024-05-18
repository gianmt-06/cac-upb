import AppmntType from "../../../../../../app/appointment/domain/model/AppointmentType/AppmntType.js";
import Client from "../../../../../../app/client/domain/model/Client/Client.js";
import Location from "../../../../../../app/location/domain/model/location/Location.js";
import View from "../../../../../../util/view/View.js";
import formsValidator from "../../../../utils/formsValidator/FormsValidator.js";
import { getScheduleForm } from "./template/ScheduleFormTemplate.js";

export default class ScheduleFormView extends View {
    constructor(parent: HTMLElement) {
        super(parent, getScheduleForm())
    }

    public render = async (): Promise<void> => {
        await this.load();
    }

    setAction(action: Function) {
        formsValidator(action);
    }

    clientFields(handler: Function) {
        const docNumberInput = document.getElementById('docNumber') as HTMLInputElement;
        docNumberInput?.addEventListener('blur', () => {
            handler(docNumberInput.value).then((value: Client) => {
                (document.getElementById('userNames') as HTMLInputElement).value = value.getName();
                (document.getElementById('userLastNames') as HTMLInputElement).value = value.getLastname();
            })
        })
    }

    getLocations = (handler: Function) => {
        const selectStates = document.getElementById('stateName') as HTMLSelectElement;
        const selectCities = document.getElementById('cityName') as HTMLSelectElement;
        const selectPlaces = document.getElementById('asignedPlace') as HTMLSelectElement;
        let allLocations: Location[];


        handler().then((locations: Location[]) => {
            allLocations = locations;

            this.changeOptions(selectStates, allLocations.map(location => {
                return {
                    value: location.getId(),
                    text: location.getCity()
                }
            }))
        })

        selectStates.addEventListener('change', () => {
            this.changeOptions(selectCities, allLocations.map(location => {
                return {
                    value: location.getId(),
                    text: location.getCity()
                }
            }))
        });

        selectCities.addEventListener('change', () => {
            this.changeOptions(selectPlaces, allLocations.map(location => {
                return {
                    value: location.getId(),
                    text: location.getName()
                }
            }))
        });

        selectPlaces.addEventListener('change', () => {
            (document.getElementById('address') as HTMLInputElement).value = allLocations.find(location => selectPlaces.value == location.getId())?.getAddress() || '';
        });
    }

    getAppmntTypes = (handler: Function) => {
        handler().then((appmntTypes: AppmntType[]) => {
            
            const options = appmntTypes.map(type => {
                return {
                    value: type.getIdType(),
                    text: type.getDescription()
                }
            })

            this.changeOptions(document.getElementById('requestType') as HTMLSelectElement, options);
            }
        )
    }


    changeOptions = (selectElement: HTMLSelectElement, options: { value: string, text: string }[]) => {
        options.forEach(option => {
            const optionElement = document.createElement('option');
            optionElement.value = option.value;
            optionElement.textContent = option.text;

            selectElement.appendChild(optionElement);
        })
    }

    public createAppmnt = (bind: Function) => {
       const form = document.getElementById("appmntForm") as HTMLFormElement;

       form.addEventListener('submit', (event) => {
            event.preventDefault();
            console.log('ENVIANDOOOOOOOOOOO');
            
            const data = {
                clientid:(document.getElementById('docNumber') as HTMLInputElement).value,
                location:(document.getElementById('asignedPlace') as HTMLSelectElement).value,
                type:(document.getElementById('requestType') as HTMLInputElement).value,
                code: "EEEAPA",
                description:(document.getElementById('requestDetails') as HTMLTextAreaElement).value,
                date:(document.getElementById('date') as HTMLInputElement).value + ' 06:00:00', 
            }

            console.log(data);
            
            bind(data).then((value: any) => {
                console.log(value);
            })
       })
    }
}