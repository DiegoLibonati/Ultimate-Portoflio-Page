import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CertificateStateType, CertificateType } from "../../entities/types";

interface payload {
  certificates: CertificateType[];
  activeCertificate: CertificateType;
}

// Define the initial state using that type
const initialState: CertificateStateType = {
  certificates: [],
  activeCertificate: null,
};

export const certificatesSlice = createSlice({
  name: "certificates",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setCertificates: (
      state,
      action: PayloadAction<payload["certificates"]>
    ) => {
      state.certificates = action.payload;
      return;
    },
    setCertificate: (
      state,
      action: PayloadAction<payload["activeCertificate"]>
    ) => {
      state.activeCertificate = action.payload;
      return;
    },
  },
});

export const { setCertificates, setCertificate } = certificatesSlice.actions;

export default certificatesSlice.reducer;
