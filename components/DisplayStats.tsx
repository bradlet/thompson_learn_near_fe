import type { ApiData } from '../pages/api/hello';

const DisplayStats = ({name}: ApiData) => {
    return (
        <div>Hello {name}</div>
    );
}

export default DisplayStats;