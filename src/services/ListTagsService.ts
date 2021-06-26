import { getCustomRepository } from 'typeorm';
import { TagsRepository } from '../repositories/TagsRepositories';


class ListTagsService {

    async execute() {
        const tagsRepositories = getCustomRepository(TagsRepository);

        let tags = await tagsRepositories.find();
        tags = tags.map((tag) => ({...tag, nameCustom: `#${tag.name}`}));

        return tags;
    }
}

export {ListTagsService}