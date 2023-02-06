import {
    Card,
    CardHeader,
    CardBody,
    Heading,
    Paragraph,
} from "grommet";

interface CardProps {
    title?: string,
    cardProps?: object,
    align?: string,
    children: any
}
const CardTemplate = ({ title, children, align="left", cardProps={} }: CardProps) => {
    return (
        <Card {...cardProps}>
            {title && (
                <CardHeader pad="medium">
                    <Heading level={2} margin="none">
                        {title}
                    </Heading>
                </CardHeader>
            )}
            <CardBody pad="medium" align={align}>
                {children}
            </CardBody>
        </Card>
    );
};

export default CardTemplate