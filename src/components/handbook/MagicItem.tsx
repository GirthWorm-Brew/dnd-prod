import { Container } from "react-bootstrap";
import itemJson from "../../../data/magicitems/excalibur.json";
import "../../../themes/V3/phb.standalone.css";

// { "slug": string,
//   "name": string,
//   "type": string,
//   "desc": string
//   "rarity": string,
//   "requires_attunement": string,
//   "document__slug": string,
//   "document__title": string,
//   "document__url": string
// }

const item = itemJson;

export default function MagicItem() {
  return (
    <Container fluid className="phb page">
      <main className="page tocDepthH3" id="p1" data-index="0"></main>
    </Container>
  );
}
