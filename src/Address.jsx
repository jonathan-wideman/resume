import React from "react";
import { spaceText } from "./util";

export function Address({ street1, street2, city, state, zip }) {
    return (
        <>
            {(street1 || street2) && (
                <>{spaceText(street1, street2)} • </>
            )}
            {[city, state, zip].filter(item => item != null).join(', ')}
        </>
    );
}
