// 1. Import your photos:
import danielAforoImg from '../assets/images/daniel_aforo.jpeg';
import judeAzizImg from '../assets/images/dr_jude_aziz.jpeg';
import alexYeboahImg from '../assets/images/alex_yeboah.jpeg';
import aliDominicImg from '../assets/images/ali.jpeg';
import benjaminImg from '../assets/images/benjamin_sackey.jpg';


// 2. Link them to the corresponding team member:
export const MANAGEMENT_PHOTOS: Record<string, string | null> = {
  'daniel-aforo': danielAforoImg,    // div ID: div-mgmt-daniel-aforo
  'dr-jude-aziz': judeAzizImg,      // div ID: div-mgmt-dr-jude-aziz
  'alex-yeboah': alexYeboahImg,      // div ID: div-mgmt-alex-yeboah
  'ali-adams-dominic': aliDominicImg,
  'benjamin-sackey': benjaminImg,
};