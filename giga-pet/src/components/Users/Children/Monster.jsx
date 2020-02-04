import React from 'react';

function Monster(props) {
    return (
        <div>
            {(() => {
                switch (props.monster) {
                    case 1:
                        return "Orange Monster";

                    case 2:
                        return "Red Monster";

                    case 3:
                        return "Green Monster";

                    case 4:
                        return "Purple Monster";
                }
            }

            )}
        </div>
    );
}

export default Monster;
