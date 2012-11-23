//A brutally simple vertex shader that just mimics exactly what OpenGL's default
//fixed pipeline does
uniform float currentTime;

void main() {                


    vec4 aTex = gl_MultiTexCoord0;
    aTex.x = gl_MultiTexCoord0.x*cos(currentTime) - gl_MultiTexCoord0.y*sin(currentTime);
    aTex.y = gl_MultiTexCoord0.y*cos(currentTime) + gl_MultiTexCoord0.x*sin(currentTime);
    
    gl_TexCoord[0] = aTex ;
    
    gl_Position = gl_ModelViewProjectionMatrix * gl_Vertex;
}
