import { AllowNull, BelongsTo, Column, CreatedAt, Default, ForeignKey, Table, UpdatedAt } from "sequelize-typescript";
import { FileHelper } from "../common/helpers/file.helper";
import { Entity } from "./abstraction/entity";
import * as moment from 'moment-timezone';
import { User } from "./user";

@Table({
    tableName: 'BlogPosts',
    timestamps: true
})
export class BlogPost extends Entity<BlogPost> {

    public static createModel(input: {
        title: string,
        description: string,
        body: string,
        userAuthorId: number
    }): BlogPost {

        const blogPost = new BlogPost({
            title: input.title,
            description: input.description,
            body: input.body,
            userAuthorId: input.userAuthorId
        });

        blogPost.setUrlKey(input.title);
        blogPost.setBody(input.body);

        return blogPost;
    }

    @AllowNull(false)
    @Column
    public title: string;

    @AllowNull(false)
    @Column
    public description: string;

    @AllowNull(false)
    @Column
    public body: string;

    @AllowNull(false)
    @Column
    public urlKey: string;

    @AllowNull(false)
    @Column
    public thumbnail: string;

    @Default(0)
    @AllowNull(false)
    @Column
    public views: number;

    @ForeignKey(() => User)
    @Column
    public userAuthorId?: number;
    @BelongsTo(() => User, 'userAuthorId')
    public userAuthor?: User;

    @AllowNull(false)
    @CreatedAt
    @Column
    public createdAt: Date;

    @AllowNull(false)
    @UpdatedAt
    @Column
    public updatedAt: Date;

    public setUrlKey(value: string): void {

        this.urlKey = value
            .toLowerCase()
            .trim()
            .split(' ')
            .join('-')
            .replace(/[^a-zA-Z0-9-\-]/g, '');
    }

    public setBody(value: string): void {
        this.body = this.body = value;
    }

    public setThumbnail(value: string): void {
        this.thumbnail = value;
    }

    public addView(): void {
        this.views++;
    }

    public get thumbnailUrl(): string {
        return FileHelper.getUrl(this.thumbnail);
    }

    public get createdAtCalendar(): string {
        return moment(this.createdAt).calendar();
    }
}