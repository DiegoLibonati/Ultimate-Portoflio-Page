import { CertificateType, UseCertificatesStore } from "../entities/types";
import {
  setCertificate,
  setCertificates,
} from "../store/certificates/certificatesSlice";
import { useAppDispatch, useAppSelector } from "./useRedux";

export const useCertificatesStore = (): UseCertificatesStore => {
  const { activeCertificate, certificates } = useAppSelector(
    (state) => state.certificates
  );
  const dispatch = useAppDispatch();

  const handleSetCertificates = async (
    certificates: Promise<CertificateType[]>
  ): Promise<void> => {
    dispatch(setCertificates(await certificates));
    return;
  };

  const handleSetCertificate = async (
    certificate: Promise<CertificateType>
  ): Promise<void> => {
    dispatch(setCertificate(await certificate));
    return;
  };

  return {
    activeCertificate,
    certificates,
    handleSetCertificate,
    handleSetCertificates,
  };
};
