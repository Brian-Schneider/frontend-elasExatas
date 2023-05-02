
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function Mulheres() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ maxWidth: 345}}>
            <CardHeader         
                title="Maryam Mirzakhani"
                subheader="Matemática"
            />
            <CardMedia
                component="img"
                height="194"
                image="https://news.stanford.edu/wp-content/uploads/2017/07/Fields_Maryam_Mirzakhani.jpg"
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                “Você tem que gastar um pouco de energia e esforço para ver a beleza da matemática.”
                    
                </Typography>
            </CardContent>
            <CardActions disableSpacing>               
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>História</Typography>
                    <Typography paragraph>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, dolorum autem? Porro molestiae asperiores aut velit ex tempore quisquam, dolor qui et ab doloribus itaque iste facere natus quo ea!
                    </Typography>
                    <Typography paragraph>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique excepturi dolorem consectetur ullam sint architecto labore impedit aspernatur vel inventore minus quas voluptates debitis deserunt, ipsum voluptas nam aperiam earum.
                    </Typography>
                    <Typography paragraph>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quis, non, similique ut dolore eius, iusto molestiae temporibus sequi consectetur aperiam amet? Dolor, voluptatum! Animi natus totam placeat qui consectetur!
                    </Typography>
                    <Typography>
                        A vida é uma caixinha de supresas.                    
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}