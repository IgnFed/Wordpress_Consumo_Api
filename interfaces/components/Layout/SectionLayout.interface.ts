import { Meta } from "interfaces/MetaTags.interface";
import { HTMLAttributes } from "react";

type OptionalMeta = Partial<Meta>;

export interface SectionLayout{
  layoutClass?: HTMLAttributes<HTMLElement>["className"];
  metas?: OptionalMeta
}