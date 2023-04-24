#include <stdio.h>

int max_of_four(int a, int b, int c, int d)
{
    return fmax(fmax(fmax(a, b), c), d);
}

int main() {
    int a, b, c, d;
    scanf("%d\n%d\n%d\n%d\n", &a, &b, &c, &d);
    int ans = max_of_four(a, b, c, d);
    printf("%d", ans);
    
    return 0;
}
