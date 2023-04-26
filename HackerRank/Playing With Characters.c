#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int main() 
{
    char c;
    char buffer[200];
    int iter;
    
    scanf("%c\n",&c);
    printf("%c\n", c);
    scanf("%s\n",buffer);
    printf("%s\n", buffer);
    iter = 0;  
    c = getchar();
    while (c != EOF &&c != '\n')
    {
        buffer[iter] = c;
        c = getchar();
        iter++;
    }
    buffer[iter] = 0;
    printf("%s\n" ,buffer);
    return 0;
}
