import { USER } from '@/mocks/user';
import request from '@/utils/request';

export interface UserInfo {
  id: number
  full_name: string
  avatar: string
}
export default () => ({
  me: () => request(USER),
});