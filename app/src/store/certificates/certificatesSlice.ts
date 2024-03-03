import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CertificateState, PayloadCertificates } from "../../entities/entities";

const initialState: CertificateState = {
  certificates: [],
  activeCertificate: null,
};

export const certificatesSlice = createSlice({
  name: "certificates",
  initialState,
  reducers: {
    setCertificates: (
      state,
      action: PayloadAction<PayloadCertificates["certificates"]>
    ) => {
      state.certificates = action.payload;
      return;
    },
    setCertificate: (
      state,
      action: PayloadAction<PayloadCertificates["activeCertificate"]>
    ) => {
      state.activeCertificate = action.payload;
      return;
    },
  },
});

export const { setCertificates, setCertificate } = certificatesSlice.actions;

export default certificatesSlice.reducer;
