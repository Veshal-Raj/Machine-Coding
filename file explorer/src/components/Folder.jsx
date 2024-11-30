import { useState } from "react"


const Folder = ({ explorer }) => {
    const [expand, setExpand] = useState(false);
    if (explorer?.isFolder) {
        return (
            <div>
                <span onClick={() => setExpand(!expand)}>📁{explorer?.name}</span>
                <div style={{ marginLeft: 5, display: expand ? 'block' : 'none' }}>
                    {
                        explorer?.items?.map((exp) => {
                            return <div key={exp?.id}>
                                <Folder explorer={exp} />
                            </div>
                        })
                    }
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <span>📄{explorer?.name}</span>
            </div>
        )
    }
}

export default Folder
