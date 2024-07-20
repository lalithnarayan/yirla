const g="data:text/markdown;base64,YGBganN4DQppbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0Jw0KaW1wb3J0IHsgRm9ybUl0ZW0sIEZvcm1Db250YWluZXIgfSBmcm9tICdAL2NvbXBvbmVudHMvdWkvRm9ybScNCmltcG9ydCBJbnB1dCBmcm9tICdAL2NvbXBvbmVudHMvdWkvSW5wdXQnDQppbXBvcnQgQnV0dG9uIGZyb20gJ0AvY29tcG9uZW50cy91aS9CdXR0b24nDQppbXBvcnQgU3Bpbm5lciBmcm9tICdAL2NvbXBvbmVudHMvdWkvU3Bpbm5lcicNCmltcG9ydCB7IEZvcm1paywgRm9ybSwgRmllbGQgfSBmcm9tICdmb3JtaWsnDQppbXBvcnQgdHlwZSB7IEZvcm1pa0Vycm9ycywgRm9ybWlrUHJvcHMgfSBmcm9tICdmb3JtaWsnDQoNCnR5cGUgRm9ybU1vZGVsID0gew0KICAgIHVzZXJOYW1lOiBzdHJpbmcsDQp9DQoNCmNvbnN0IHNsZWVwID0gKG1zOiBudW1iZXIpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSkNCg0KY29uc3QgQXN5bmNWYWxpZGF0aW9uID0gKCkgPT4gew0KICAgIGNvbnN0IFt2YWxpZGF0aW5nLCBzZXRWYWxpZGF0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKQ0KDQogICAgY29uc3QgdmFsaWRhdGVBc3luYyA9IGFzeW5jICgNCiAgICAgICAgdmFsdWU6IHN0cmluZywNCiAgICAgICAgZm9ybTogew0KICAgICAgICAgICAgZXJyb3JzOiBGb3JtaWtFcnJvcnM8Rm9ybU1vZGVsPiwNCiAgICAgICAgfSAmIEZvcm1pa1Byb3BzPEZvcm1Nb2RlbD4NCiAgICApID0+IHsNCiAgICAgICAgY29uc3QgeyB0b3VjaGVkLCBlcnJvcnMgfSA9IGZvcm0NCiAgICAgICAgaWYgKCF2YWx1ZSkgew0KICAgICAgICAgICAgcmV0dXJuDQogICAgICAgIH0NCiAgICAgICAgaWYgKGVycm9ycy51c2VyTmFtZSAmJiAhdG91Y2hlZC51c2VyTmFtZSkgew0KICAgICAgICAgICAgcmV0dXJuIGVycm9ycy51c2VyTmFtZQ0KICAgICAgICB9DQogICAgICAgIHNldFZhbGlkYXRpbmcodHJ1ZSkNCiAgICAgICAgYXdhaXQgc2xlZXAoMjAwMCkNCiAgICAgICAgaWYgKHZhbHVlID09PSAnQWRhbScpIHsNCiAgICAgICAgICAgIHNldFZhbGlkYXRpbmcoZmFsc2UpDQogICAgICAgICAgICByZXR1cm4NCiAgICAgICAgfQ0KICAgICAgICBzZXRWYWxpZGF0aW5nKGZhbHNlKQ0KICAgICAgICByZXR1cm4gJ1RoaXMgVXNlciBuYW1lIGhhcyBiZWVuIHRha2VuJw0KICAgIH0NCg0KICAgIHJldHVybiAoDQogICAgICAgIDxkaXY+DQogICAgICAgICAgICA8Rm9ybWlrDQogICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17eyB1c2VyTmFtZTogJycgfX0NCiAgICAgICAgICAgICAgICBvblN1Ym1pdD17KHZhbHVlcywgeyByZXNldEZvcm0sIHNldFN1Ym1pdHRpbmcgfSkgPT4gew0KICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsNCiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KEpTT04uc3RyaW5naWZ5KHZhbHVlcywgbnVsbCwgMikpDQogICAgICAgICAgICAgICAgICAgICAgICBzZXRTdWJtaXR0aW5nKGZhbHNlKQ0KICAgICAgICAgICAgICAgICAgICAgICAgcmVzZXRGb3JtKCkNCiAgICAgICAgICAgICAgICAgICAgfSwgNDAwKQ0KICAgICAgICAgICAgICAgIH19DQogICAgICAgICAgICA+DQogICAgICAgICAgICAgICAgeyh7IGVycm9ycywgLi4uZm9ybVByb3BzIH0pID0+ICgNCiAgICAgICAgICAgICAgICAgICAgPEZvcm0+DQogICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRhaW5lcj4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUl0ZW0NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9IkNoZWNrIHZhbGlkIHVzZXJuYW1lIg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnZhbGlkPXsNCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy51c2VyTmFtZSAmJg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLnVzZXJOYW1lLmxlbmd0aCA+IDANCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfQ0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U9e2Vycm9ycy51c2VyTmFtZX0NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZA0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0idGV4dCINCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9InVzZXJOYW1lIg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPSJvZmYiDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0iVXNlciBOYW1lIg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VmZml4PXsNCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3Bpbm5lcg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9ew0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXZhbGlkYXRpbmcgPyAnaGlkZGVuJyA6ICcnDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfQ0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGU9eyh2YWx1ZXM6IHN0cmluZykgPT4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZUFzeW5jKHZhbHVlcywgew0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMsDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmZvcm1Qcm9wcywNCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KQ0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfQ0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtJbnB1dH0NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1JdGVtPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtSXRlbT4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PSJzb2xpZCIgdHlwZT0ic3VibWl0Ij4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN1Ym1pdA0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1JdGVtPg0KICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udGFpbmVyPg0KICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+DQogICAgICAgICAgICAgICAgKX0NCiAgICAgICAgICAgIDwvRm9ybWlrPg0KICAgICAgICA8L2Rpdj4NCiAgICApDQp9DQoNCmV4cG9ydCBkZWZhdWx0IEFzeW5jVmFsaWRhdGlvbg0KYGBgDQo=";export{g as default};