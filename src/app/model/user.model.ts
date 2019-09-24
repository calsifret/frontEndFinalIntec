import { ParentEntity } from './parentEntity.model';
export class UserModel extends ParentEntity{
    public firstName: string;
    public lastName: string;
    public address: string;
    public phone: string;
    public email: string;
    
}