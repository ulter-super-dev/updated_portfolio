import { environment } from '../../environments/environment';

import { IProject } from './IProject';
import { testUniqueness } from './utils';

import { PrintCloud } from './data/printcloud.data';
import { Aradas } from './data/aradas.data';
import { Fire4Bond } from './data/fit4bond.data';
import { UberDelibery } from './data/uber-eats.data';
import { TrustPilot } from './data/trust-pilot.data';
import { GoDaddy } from './data/godaddy.data';

import { Abe } from './data/abe.data';
import { Wonderflats } from './data/wunderflats';
import { Baliyans } from './data/balyans.data';
import { Advinow } from './data/advinow.data';
import { Herotraveler } from './data/herotraveler.data';
import { ShashlikYan } from './data/shashlikyan.data';
import { SweetIo } from './data/sweet.data';

const getAllProject = () => {
  const projects = [
    Abe,
    Wonderflats,
    Baliyans,
    Advinow,
    Herotraveler,
    ShashlikYan,
    SweetIo,
    PrintCloud,
    Aradas,
    Fire4Bond,
    UberDelibery,
    TrustPilot,
    GoDaddy,
  ];

  if (!environment.production) {
    const result = testUniqueness(projects, project => project.id);

    if (result.error) {
      const errorLog = [];
      result.duplicates.forEach((project: IProject) => {
        errorLog.push(`Duplicate E-id ${project.id} of ${project.name} `);
      });
      throw new Error(JSON.stringify(errorLog));
    }
  }

  return projects;
};

export const ALL_PROJECT_DATA = getAllProject();
