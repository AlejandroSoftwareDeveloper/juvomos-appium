const base = '../features/'
const routes = [
    {
        "folder":"TestsFlows",
        "files": ["LoginFlow.js",],
    },
    {
        "folder":"RepeatedFlows/",
        "files": [ "GoToTransferAccout", 
                   "GotoTransferAccountToEmployee", 
                   "CreateMultipleOrders", 
                   "DeleteMultipleOrders", ],
    },
    {
        "folder":"Pages/",
        "files": [ 
            'FoodMenuPage.js',
            'LicenseRegistrationPage/LicenseRegistrationPage.js',
            'PinRegistrationPage/PinRegistrationPage.js',
            'CheckMenuPage/CheckMenuPage.js',
            'FoodPageMenuModal/FoodPageMenuModal.js',
            'AccountOptionPage/AccountOptionPage.js',
            'AnularPage/AnularPage.js',
            'AnularPageCloseAccountModal/AnularPageCloseAccountModal.js',
        ],
    },
    {
        "folder":"selectors/",
        "files": [ 
            'constants.js',
        ],
    },
]


describe("Check vars and routes are correct",async () => {

    it("Routes are correct",async () => {
        const elements = await Promise.all(
            routes.map(filename => await import(base + filename))
        );
        
        const allExist = elements.every(el => !!el);
        chai.expect(allExist).to.equal(true);
    }

    });

});

