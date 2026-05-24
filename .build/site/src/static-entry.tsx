import { createRoot } from "react-dom/client";
import { StaticRenderer } from "@/static-renderer";

const route = document
  .querySelector('meta[name="gc:route"]')
  ?.getAttribute("content") ?? "/";

createRoot(document.getElementById("root")!).render(<StaticRenderer route={route} />);
