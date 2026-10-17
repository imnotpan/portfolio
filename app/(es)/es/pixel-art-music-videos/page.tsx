import { ServicePage, serviceMetadata } from "../../../components/ServicePage";
import { getService } from "../../../data/services";

const service = getService("pixel-art-music-videos")!;

export const metadata = serviceMetadata(service, "es");

export default function Page() {
  return <ServicePage service={service} locale="es" />;
}
