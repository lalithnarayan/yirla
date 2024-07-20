const g="data:text/markdown;base64,YGBganN4DQppbXBvcnQgQ2hhcnQgZnJvbSAncmVhY3QtYXBleGNoYXJ0cycNCmltcG9ydCB7IENPTE9SXzEgfSBmcm9tICdAL2NvbnN0YW50cy9jaGFydC5jb25zdGFudCcNCg0KY29uc3QgQmFzaWNBcmVhID0gKCkgPT4gew0KICAgIGNvbnN0IGRhdGEgPSBbDQogICAgICAgIHsNCiAgICAgICAgICAgIG5hbWU6ICdTVE9DSyBBQkMnLA0KICAgICAgICAgICAgZGF0YTogWw0KICAgICAgICAgICAgICAgIDgxMDcuODUsIDgxMjguMCwgODEyMi45LCA4MTY1LjUsIDgzNDAuNywgODQyMy43LCA4NDIzLjUsIDg1MTQuMywNCiAgICAgICAgICAgICAgICA4NDgxLjg1LCA4NDg3LjcsIDg1MDYuOSwgODYyNi4yLCA4NjY4Ljk1LCA4NjAyLjMsIDg2MDcuNTUsDQogICAgICAgICAgICAgICAgODUxMi45LCA4NDk2LjI1LCA4NjAwLjY1LCA4ODgxLjEsIDkzNDAuODUsDQogICAgICAgICAgICBdLA0KICAgICAgICB9LA0KICAgIF0NCg0KICAgIHJldHVybiAoDQogICAgICAgIDxDaGFydA0KICAgICAgICAgICAgb3B0aW9ucz17ew0KICAgICAgICAgICAgICAgIGNoYXJ0OiB7DQogICAgICAgICAgICAgICAgICAgIHpvb206IHsNCiAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLA0KICAgICAgICAgICAgICAgICAgICB9LA0KICAgICAgICAgICAgICAgIH0sDQogICAgICAgICAgICAgICAgY29sb3JzOiBbQ09MT1JfMV0sDQogICAgICAgICAgICAgICAgZmlsbDogew0KICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZ3JhZGllbnQnLA0KICAgICAgICAgICAgICAgICAgICBncmFkaWVudDogew0KICAgICAgICAgICAgICAgICAgICAgICAgc2hhZGVJbnRlbnNpdHk6IDEsDQogICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5RnJvbTogMC43LA0KICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eVRvOiAwLjksDQogICAgICAgICAgICAgICAgICAgICAgICBzdG9wczogWzAsIDgwLCAxMDBdLA0KICAgICAgICAgICAgICAgICAgICB9LA0KICAgICAgICAgICAgICAgIH0sDQogICAgICAgICAgICAgICAgZGF0YUxhYmVsczogew0KICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZSwNCiAgICAgICAgICAgICAgICB9LA0KICAgICAgICAgICAgICAgIHN0cm9rZTogew0KICAgICAgICAgICAgICAgICAgICBjdXJ2ZTogJ3Ntb290aCcsDQogICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzLA0KICAgICAgICAgICAgICAgIH0sDQogICAgICAgICAgICAgICAgbGFiZWxzOiBbDQogICAgICAgICAgICAgICAgICAgICcxMyBOb3YgMjAxNycsDQogICAgICAgICAgICAgICAgICAgICcxNCBOb3YgMjAxNycsDQogICAgICAgICAgICAgICAgICAgICcxNSBOb3YgMjAxNycsDQogICAgICAgICAgICAgICAgICAgICcxNiBOb3YgMjAxNycsDQogICAgICAgICAgICAgICAgICAgICcxNyBOb3YgMjAxNycsDQogICAgICAgICAgICAgICAgICAgICcyMCBOb3YgMjAxNycsDQogICAgICAgICAgICAgICAgICAgICcyMSBOb3YgMjAxNycsDQogICAgICAgICAgICAgICAgICAgICcyMiBOb3YgMjAxNycsDQogICAgICAgICAgICAgICAgICAgICcyMyBOb3YgMjAxNycsDQogICAgICAgICAgICAgICAgICAgICcyNCBOb3YgMjAxNycsDQogICAgICAgICAgICAgICAgICAgICcyNyBOb3YgMjAxNycsDQogICAgICAgICAgICAgICAgICAgICcyOCBOb3YgMjAxNycsDQogICAgICAgICAgICAgICAgICAgICcyOSBOb3YgMjAxNycsDQogICAgICAgICAgICAgICAgICAgICczMCBOb3YgMjAxNycsDQogICAgICAgICAgICAgICAgICAgICcwMSBEZWMgMjAxNycsDQogICAgICAgICAgICAgICAgICAgICcwNCBEZWMgMjAxNycsDQogICAgICAgICAgICAgICAgICAgICcwNSBEZWMgMjAxNycsDQogICAgICAgICAgICAgICAgICAgICcwNiBEZWMgMjAxNycsDQogICAgICAgICAgICAgICAgICAgICcwNyBEZWMgMjAxNycsDQogICAgICAgICAgICAgICAgICAgICcwOCBEZWMgMjAxNycsDQogICAgICAgICAgICAgICAgXSwNCiAgICAgICAgICAgICAgICB4YXhpczogew0KICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZGF0ZXRpbWUnLA0KICAgICAgICAgICAgICAgIH0sDQogICAgICAgICAgICAgICAgeWF4aXM6IHsNCiAgICAgICAgICAgICAgICAgICAgb3Bwb3NpdGU6IHRydWUsDQogICAgICAgICAgICAgICAgfSwNCiAgICAgICAgICAgICAgICBsZWdlbmQ6IHsNCiAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWduOiAnbGVmdCcsDQogICAgICAgICAgICAgICAgfSwNCiAgICAgICAgICAgIH19DQogICAgICAgICAgICB0eXBlPSJhcmVhIg0KICAgICAgICAgICAgc2VyaWVzPXtkYXRhfQ0KICAgICAgICAgICAgaGVpZ2h0PXszMDB9DQogICAgICAgIC8+DQogICAgKQ0KfQ0KDQpleHBvcnQgZGVmYXVsdCBCYXNpY0FyZWENCmBgYA0K";export{g as default};