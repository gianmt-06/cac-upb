import ClientDTO from "../../../../../../src/app/client/domain/model/ClientDTO/ClientDTO"
import { Mock, mock } from 'ts-jest-mocker'
import ClientRepository from "../../../../../../src/app/client/infrastructure/repository/ClientRepository/ClientRepository";
import Client from "../../../../../../src/app/client/domain/model/Client/Client";
import GetClientRepository from "../../../../../../src/app/client/infrastructure/repository/GetClient/GetClientRepository";

describe('GetClientRepository', () => {

    let getClientRepository: GetClientRepository;
    let clientRepository: Mock<ClientRepository>

    let mockClient: ClientDTO;
    let clientResponse: Client;

    beforeEach(() => {
        clientRepository = mock<ClientRepository>()
        getClientRepository = new GetClientRepository(clientRepository)

        mockClient = {
            id: "1",
            idtype: "1",
            doctype: "CC",
            docnumber: "1099735628",
            name: "Gian Marco",
            lastname: "Mora Tami",
            birth: "10-25-2004"
        }

        clientResponse = new Client(
            "Gian Marco",
            "Mora Tami",
            "1099735628",
            {
                id: "1",
                description: "1"
            },
            new Date("10-25-2024"),
            "1",
        )
    })

    describe("getClientById", () => {
        it("should return a client from a data transfer object", async() => {
            clientRepository.getOne.mockResolvedValue(mockClient);

            const client = await getClientRepository.getClientById("1");
            console.log(client);
            
            expect(client).toEqual(clientResponse);
        })
    })
})