import {
    Card,
    CardHeader,
    CardBody,
    Heading,
    Paragraph,
} from "grommet";

interface CardProps {
    title?: string,
    align?: string,
    children: any
}
const CardTemplate = ({ title, children, align="left" }: CardProps) => {
    return (
        <Card>
            {title && (
                <CardHeader pad="medium">
                    <Heading level={2} margin="none">
                        {title}
                    </Heading>
                </CardHeader>
            )}
            <CardBody pad="medium" align={align}>
                <Paragraph>
                    {children}
                </Paragraph>
            </CardBody>
        </Card>
    );
};

export default CardTemplate