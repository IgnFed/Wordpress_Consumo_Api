import { Meta } from "interfaces/MetaTags.interface";

type OptionalMeta = Partial<Meta>;

export interface SectionLayout{
  layoutClass?: string
  metas?: OptionalMeta
}