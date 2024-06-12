import {mutate} from "swr";

export default function resetSwrCache() {
    return mutate(
        () => true,
        undefined,
        {revalidate: true}
    );
}