interface Tech {
  id: string;
  title: string;
  status: string;
}

export interface Work {
  id: string;
  title: string;
  description: string;
  deploy_url: string;
}

export interface UserInterface {
  id: string;
  name: string;
  email: string;
  avatar_url: string | null;
  bio: string;
  contact: string;
  course_module: string;
  techs: Tech[];
  works: Work[];
}
