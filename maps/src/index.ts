import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

// App structure https://cl.ly/769dabfd703d

const user = new User();
const company = new Company();
const customMap = new CustomMap('map'); // use divId just in case to re-use current class in other place

customMap.addMarker(user);
customMap.addMarker(company);
