export class Permission {
    read: boolean;
    write: boolean;
    update: boolean;
    delete: boolean;
}

export class Level {
    _id: string;
    access_level_name: string;
    permissions: Permission;
    status: string;
}