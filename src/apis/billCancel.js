export const qwe = {
  linkENC: (payMethod, ...rest) =>
    commonRequest.get(`Deploy/SelectDeployInfoForUser?productCode=${code}`),
};

// 호출할 때
// mutationFn: async (productCode: string) => await deployApi.getLicenseProductDeployInfo(productCode),
