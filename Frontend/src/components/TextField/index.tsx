import { Center, Input } from "@chakra-ui/react";


      
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function TextField({ field, hasError,isCheck, ...props }:any ) {
  return (
    <Center>
    
      <Input
     
      {...field} {...props}

        focusBorderColor={hasError ? "red.500" : isCheck? '#2B6CB0':"#575450"}
        width={"30.5em"}
        placeholdersize="md"
        borderColor={ hasError ? "red.500" : isCheck? '#2B6CB0':"#575450"}
        height={"64px"}
        borderRadius={10}

      />
      
    </Center>
  );
}


export default TextField;
