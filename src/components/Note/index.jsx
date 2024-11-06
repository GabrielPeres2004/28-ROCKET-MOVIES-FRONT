import { Container } from "./style";

import { Tag } from "../Tags";

import { Stars} from '../Stars'

export function Notes({data, ...rest}){

    return(
        <Container
        {...rest}>
            <h1>{data.title}</h1>

            <div className="Stars">
                <Stars
                rating={data.rating}
                />
                
                 
            </div>



            <div className="Description">
                <p>{data.description}</p>
            </div>



            {
            data.tags &&
            <footer>

                {
                    data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
                }
                
            </footer>
            }

        </Container>
    )
}