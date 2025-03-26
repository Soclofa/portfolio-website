import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";

export function ProfileCard() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="w-96">
        <CardHeader floated={false} className="h-80">
          <img
            src="/images/IMG_2809_edited.jpg"
            alt="profile-picture"
            className="w-full h-full object-cover object-center"
            // Adjust the following value to shift the visible portion
            style={{ objectPosition: "center 50%" }}
          />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Avi Soclof
          </Typography>
          <Typography color="blue-gray" className="font-medium" textGradient>
            Computer Science Student
          </Typography>

          <div className="flex items-center justify-center">
            <img src="/images/email.svg" alt="email" className="w-4 h-4 mr-2" />
            <Typography color="blue-gray" className="font-medium" textGradient>
              soclofa@gmail.com
            </Typography>
          </div>

          <div className="flex items-center justify-center">
            <img src="/images/phone.svg" alt="Phone" className="w-4 h-4 mr-2" />
            <Typography color="blue-gray" className="font-medium" textGradient>
              058-627-2403
            </Typography>
          </div>
        </CardBody>
        <CardFooter className="flex justify-center gap-7 pt-2">
          <Tooltip content="Like">
            <Typography
              as="a"
              href="#facebook"
              variant="lead"
              color="blue"
              textGradient
            >
              <i className="fab fa-facebook" />
            </Typography>
          </Tooltip>
          <Tooltip content="Follow">
            <Typography
              as="a"
              href="#twitter"
              variant="lead"
              color="light-blue"
              textGradient
            >
              <i className="fab fa-twitter" />
            </Typography>
          </Tooltip>
          <Tooltip content="Follow">
            <Typography
              as="a"
              href="#instagram"
              variant="lead"
              color="purple"
              textGradient
            >
              <i className="fab fa-instagram" />
            </Typography>
          </Tooltip>
        </CardFooter>
      </Card>
    </div>
  );
}
