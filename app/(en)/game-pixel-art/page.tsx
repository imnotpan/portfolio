import { ServicePage, serviceMetadata } from "../../components/ServicePage";
import { getService } from "../../data/services";

const service = getService("game-pixel-art")!;

export const metadata = serviceMetadata(service, "en");

export default function Page() {
  return <ServicePage service={service} locale="en" />;
}
