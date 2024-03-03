import { RootState } from "../entities/entities";
import { Certificate, UseCertificatesStore } from "../entities/entities";
import {
  setCertificate,
  setCertificates,
} from "../store/certificates/certificatesSlice";
import { useAppDispatch, useAppSelector } from "./useRedux";

export const useCertificatesStore = (): UseCertificatesStore => {
  const { activeCertificate, certificates } = useAppSelector(
    (state: RootState) => state.certificates
  );
  const dispatch = useAppDispatch();

  const handleSetCertificates = async (
    certificates: Promise<Certificate[]>
  ): Promise<void> => {
    dispatch(setCertificates(await certificates));
    return;
  };

  const handleSetCertificate = async (
    certificate: Promise<Certificate>
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
