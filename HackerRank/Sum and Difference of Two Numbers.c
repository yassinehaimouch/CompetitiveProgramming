#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int main()
{
	int a,b;
    float x,y;
    scanf("%d %d\n",&a ,&b);
    scanf("%f %f\n",&x ,&y);
    printf("%d %d\n%.1f %.1f\n", a+b , a-b , x+y , x-y);
    return 0;
}