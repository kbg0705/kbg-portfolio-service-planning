import { decisionSupportDetail } from './details/decisionSupport';
import { magicEcoleDetail } from './details/magicEcole';
import { metaverseDetail } from './details/metaverse';
import { printbankDetail } from './details/printbank';
import { printbankMainDetail } from './details/printbankMain';
import { printStudioDetail } from './details/printStudio';
import { taxCanvasDetail } from './details/taxCanvas';
import { visangAidtDetail } from './details/visangAidt';

export const projectDetails = [
  printbankDetail,
  printbankMainDetail,
  magicEcoleDetail,
  taxCanvasDetail,
  printStudioDetail,
  decisionSupportDetail,
  metaverseDetail,
  visangAidtDetail,
];

export const findProjectDetail = (slug?: string) => projectDetails.find((detail) => detail.slug === slug);