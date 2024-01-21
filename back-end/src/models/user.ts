import mongoose, {Schema, Document} from 'mongoose';

interface User {
  email: string;
  password: string;
}
