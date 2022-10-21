import { ProfileSchema, Profile } from 'entities/Profile/model/types/profile';
import { fetchProfileData } from 'entities/Profile/model/services/fetchProfileData';
import { ProfileCard } from 'entities/Profile/ui/ProfileCard';
import { profileActions, profileReducer } from '../Profile/model/slice/ProfileSlice';

export {
  profileActions,
  profileReducer,
  Profile,
  ProfileSchema,
  fetchProfileData,
  ProfileCard,
};
